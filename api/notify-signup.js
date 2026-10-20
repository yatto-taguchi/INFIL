// Vercel Serverless Function: Restock / Launch Notification Signup Handler
// Sends notification to store manager (taguchihayato.8810@gmail.com) when a customer registers

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

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {}
    }

    const { productId, productName, email, customerName } = body || {};

    // Validate email and product
    if (!email || !email.includes('@') || !email.includes('.')) {
      return res.status(400).json({ error: '有効なメールアドレスを入力してください。' });
    }
    if (!productId || !productName) {
      return res.status(400).json({ error: '商品情報が不足しています。' });
    }

    const managerEmail = process.env.MANAGER_EMAIL || 'taguchihayato.8810@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;
    const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;

    const timestamp = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    const clientName = customerName && customerName.trim() ? customerName.trim() : '未記入';

    console.info(`[Waitlist Signup] Time: ${timestamp}, Product: ${productName} (${productId}), Customer: ${email}, Name: ${clientName}`);

    let mailSent = false;
    let mailError = null;

    // 1. Send email via Resend if RESEND_API_KEY is configured
    if (resendApiKey) {
      try {
        const emailSubject = `【INFILL】販売開始・入荷お知らせの登録がありました（${productName}）`;
        const emailHtml = `
          <div style="font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'BIZ UDPGothic', Meiryo, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background: #0f172a; padding: 24px; color: #ffffff;">
              <h2 style="margin: 0; font-size: 20px; letter-spacing: 0.05em; font-weight: 600;">INFILL オンラインストア</h2>
              <p style="margin: 6px 0 0; font-size: 13px; color: #94a3b8;">入荷・販売開始通知の自動受付システム</p>
            </div>
            
            <div style="padding: 28px 24px; background: #ffffff;">
              <p style="font-size: 15px; margin-top: 0;">
                INFILL 公式ストアにて、お客様より<strong>「販売開始・入荷お知らせ通知」</strong>の登録がありました。
              </p>
              
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 18px 20px; margin: 20px 0;">
                <h3 style="margin: 0 0 14px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">
                  登録内容
                </h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr>
                    <td style="padding: 6px 0; color: #64748b; width: 120px;">登録日時</td>
                    <td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${timestamp}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #64748b;">対象商品</td>
                    <td style="padding: 6px 0; font-weight: 600; color: #0f172a;">${productName} (${productId})</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #64748b;">お客様メール</td>
                    <td style="padding: 6px 0; font-weight: 600; color: #0284c7;">
                      <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #64748b;">お名前</td>
                    <td style="padding: 6px 0; color: #0f172a;">${clientName}</td>
                  </tr>
                </table>
              </div>

              <div style="background: #f1f5f9; border-left: 4px solid #0f172a; padding: 14px 16px; margin: 20px 0; font-size: 13px; color: #334155;">
                <strong>次のアクション:</strong><br>
                商品の販売開始または在庫追加を行った際、上記メールアドレス宛にお知らせ案内をお送りください。
              </div>

              <p style="font-size: 12px; color: #94a3b8; margin: 28px 0 0; text-align: center;">
                このメールは INFILL Webサイトの自動通知システムより送信されています。
              </p>
            </div>
          </div>
        `;

        // Send via Resend REST API
        const fromAddress = process.env.RESEND_FROM_EMAIL || 'INFILL Store <onboarding@resend.dev>';
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [managerEmail],
            reply_to: email,
            subject: emailSubject,
            html: emailHtml
          })
        });

        if (resendRes.ok) {
          mailSent = true;
        } else {
          const errData = await resendRes.json();
          mailError = errData.message || 'Resend error';
          console.warn('Resend send failed:', errData);
        }
      } catch (err) {
        mailError = err.message;
        console.warn('Error sending email via Resend:', err);
      }
    }

    // 2. Optional: Forward to Webhook (e.g. Google Apps Script / Slack) if configured
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'waitlist_signup',
            timestamp,
            productId,
            productName,
            email,
            customerName: clientName
          })
        });
      } catch (err) {
        console.warn('Webhook dispatch error:', err);
      }
    }

    // Return success response with operational status details
    return res.status(200).json({
      success: true,
      message: '入荷お知らせの登録を受け付けました。',
      mailSent: mailSent,
      simulationMode: !resendApiKey,
      registered: {
        productId,
        productName,
        email,
        customerName: clientName,
        timestamp
      }
    });

  } catch (error) {
    console.error('Server error in notify-signup:', error);
    return res.status(500).json({
      error: 'SERVER_ERROR',
      message: '登録処理中にエラーが発生しました。時間をおいて再度お試しください。'
    });
  }
}
