// Vercel Serverless Function: Stripe Checkout Session Generator
// Node.js 18+ (Native fetch, zero npm dependencies required)

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return res.status(400).json({
      error: 'STRIPE_SECRET_KEY_MISSING',
      message: 'Stripeのシークレットキーが設定されていません。Vercelの環境変数に STRIPE_SECRET_KEY を設定してください。',
      mode: 'mock_recommended'
    });
  }

  try {
    const { items, customerEmail } = req.body || {};

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'カートに商品が入っていません。' });
    }

    // Determine base URL from request origin/host
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'infil-design.vercel.app';
    const origin = req.headers.origin || `${protocol}://${host}`;

    // Build URL-encoded form data for Stripe Checkout API
    const params = new URLSearchParams();
    params.append('mode', 'payment');
    params.append('payment_method_types[0]', 'card');
    
    // Japanese address collection
    params.append('shipping_address_collection[allowed_countries][0]', 'JP');
    params.append('billing_address_collection', 'auto');
    params.append('phone_number_collection[enabled]', 'true');

    // Customer email if provided
    if (customerEmail) {
      params.append('customer_email', customerEmail);
    }

    // Success & Cancel URLs
    params.append('success_url', `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`);
    params.append('cancel_url', `${origin}/cancel.html`);

    // Line Items
    items.forEach((item, index) => {
      const quantity = Math.max(1, parseInt(item.quantity, 10) || 1);
      const unitAmount = Math.round(Number(item.price) || 0);
      const name = item.name || 'INFILL 3Dプリント製品';
      const description = item.subtitle || (item.categoryName ? `${item.categoryName}` : '美容師・理容師向け専用ロッドスタンド');

      params.append(`line_items[${index}][price_data][currency]`, 'jpy');
      params.append(`line_items[${index}][price_data][product_data][name]`, name);
      params.append(`line_items[${index}][price_data][product_data][description]`, description);
      params.append(`line_items[${index}][price_data][unit_amount]`, unitAmount.toString());
      params.append(`line_items[${index}][quantity]`, quantity.toString());
    });

    // Call Stripe API
    const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    const session = await stripeResponse.json();

    if (!stripeResponse.ok) {
      console.error('Stripe API Error:', session);
      return res.status(stripeResponse.status).json({
        error: 'STRIPE_API_ERROR',
        message: session.error?.message || 'Stripe決済セッションの作成に失敗しました。',
        details: session.error
      });
    }

    // Return the Checkout URL
    return res.status(200).json({
      id: session.id,
      url: session.url
    });

  } catch (err) {
    console.error('Server error creating checkout session:', err);
    return res.status(500).json({
      error: 'SERVER_ERROR',
      message: 'サーバー内部エラーが発生しました。時間をおいて再試行してください。'
    });
  }
}
