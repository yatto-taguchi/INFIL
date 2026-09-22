// Vercel Serverless Function: Stripe Checkout Session Generator
import Stripe from 'stripe';

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

  const stripe = new Stripe(stripeSecretKey);

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {}
    }
    const { items, customerEmail } = body || {};

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'カートに商品が入っていません。' });
    }

    // Determine base URL from request origin/host
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'infil-design.vercel.app';
    const origin = req.headers.origin || `${protocol}://${host}`;

    // Format line items using Stripe Official API schema
    const lineItems = items.map(item => {
      const quantity = Math.max(1, parseInt(item.quantity, 10) || 1);
      const unitAmount = Math.round(Number(item.price) || 0);
      const name = item.name || 'INFILL 3Dプリント製品';
      const description = item.subtitle || (item.categoryName ? `${item.categoryName}` : '美容師・理容師向け専用ロッドスタンド');

      return {
        price_data: {
          currency: 'jpy',
          product_data: {
            name: name,
            description: description
          },
          unit_amount: unitAmount
        },
        quantity: quantity
      };
    });

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ['JP']
      },
      phone_number_collection: {
        enabled: true
      },
      billing_address_collection: 'auto',
      customer_email: customerEmail || undefined,
      success_url: `${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel.html`
    });

    return res.status(200).json({
      id: session.id,
      url: session.url
    });

  } catch (err) {
    console.error('Server error creating checkout session:', err);
    return res.status(500).json({
      error: 'STRIPE_ERROR',
      message: err.message || '決済セッションの作成中にエラーが発生しました。',
      details: err.raw || err
    });
  }
}
