import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export interface WelcomeEmailData {
  email: string;
  position: number;
  referralCode: string;
  language: 'en' | 'es';
}

export async function sendWelcomeEmail(data: WelcomeEmailData): Promise<boolean> {
  const { email, position, referralCode, language } = data;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const referralLink = `${appUrl}?ref=${referralCode}`;

  const subject = language === 'es' 
    ? '🎉 ¡Bienvenido a la Lista de Espera de EQUITTY!' 
    : '🎉 Welcome to EQUITTY Waitlist!';

  const htmlContent = language === 'es'
    ? `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: 'Inter', Arial, sans-serif; background-color: #050A14; color: #ffffff; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 40px; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 32px; font-weight: bold; color: #00B4C4; }
          .position { font-size: 48px; font-weight: bold; background: linear-gradient(135deg, #00B4C4 0%, #006AD5 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-align: center; margin: 20px 0; }
          .referral-box { background: rgba(0, 180, 196, 0.1); border: 1px solid #00B4C4; border-radius: 12px; padding: 20px; margin: 20px 0; text-align: center; }
          .referral-code { font-size: 24px; font-weight: bold; color: #00B4C4; letter-spacing: 2px; }
          .btn { display: inline-block; background: #00B4C4; color: #050A14; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 20px 0; }
          .footer { text-align: center; color: #6B7280; font-size: 12px; margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">EQUITTY</div>
            <h1>¡Estás en la lista!</h1>
          </div>
          <p>Hola,</p>
          <p>Bienvenido a la lista de espera de EQUITTY. Tu lugar está reservado.</p>
          <div class="position">#${position}</div>
          <p style="text-align: center; color: #9CA3AF;">Tu posición actual en la fila</p>
          
          <div class="referral-box">
            <p style="margin: 0 0 10px 0; font-size: 14px;">🚀 Sube de posición refiriendo amigos</p>
            <p style="margin: 5px 0; font-size: 12px; color: #9CA3AF;">Tu código de referido:</p>
            <div class="referral-code">${referralCode}</div>
            <a href="${referralLink}" class="btn">Compartir mi enlace</a>
            <p style="margin: 10px 0 0 0; font-size: 11px; color: #6B7280;">${referralLink}</p>
          </div>

          <p>Serás notificado 48 horas antes del lanzamiento público para tener acceso prioritario a los primeros activos.</p>
          
          <div class="footer">
            <p>© 2026 EQUITTY - Powered by Soluciones OMEGA</p>
            <p>Inversión transparente, segura y sin fronteras</p>
          </div>
        </div>
      </body>
      </html>
    `
    : `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: 'Inter', Arial, sans-serif; background-color: #050A14; color: #ffffff; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 40px; }
          .header { text-align: center; margin-bottom: 30px; }
          .logo { font-size: 32px; font-weight: bold; color: #00B4C4; }
          .position { font-size: 48px; font-weight: bold; background: linear-gradient(135deg, #00B4C4 0%, #006AD5 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-align: center; margin: 20px 0; }
          .referral-box { background: rgba(0, 180, 196, 0.1); border: 1px solid #00B4C4; border-radius: 12px; padding: 20px; margin: 20px 0; text-align: center; }
          .referral-code { font-size: 24px; font-weight: bold; color: #00B4C4; letter-spacing: 2px; }
          .btn { display: inline-block; background: #00B4C4; color: #050A14; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 20px 0; }
          .footer { text-align: center; color: #6B7280; font-size: 12px; margin-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">EQUITTY</div>
            <h1>You're on the list!</h1>
          </div>
          <p>Hello,</p>
          <p>Welcome to the EQUITTY waitlist. Your spot is reserved.</p>
          <div class="position">#${position}</div>
          <p style="text-align: center; color: #9CA3AF;">Your current position in line</p>
          
          <div class="referral-box">
            <p style="margin: 0 0 10px 0; font-size: 14px;">🚀 Move up by referring friends</p>
            <p style="margin: 5px 0; font-size: 12px; color: #9CA3AF;">Your referral code:</p>
            <div class="referral-code">${referralCode}</div>
            <a href="${referralLink}" class="btn">Share my link</a>
            <p style="margin: 10px 0 0 0; font-size: 11px; color: #6B7280;">${referralLink}</p>
          </div>

          <p>You will be notified 48 hours before the public launch to have priority access to the first assets.</p>
          
          <div class="footer">
            <p>© 2026 EQUITTY - Powered by Soluciones OMEGA</p>
            <p>Transparent, secure, and borderless investment</p>
          </div>
        </div>
      </body>
      </html>
    `;

  // If Resend is configured, send real email
  if (resend) {
    try {
      await resend.emails.send({
        from: 'EQUITTY <onboarding@equitty.com>',
        to: email,
        subject,
        html: htmlContent,
      });
      console.log(`✅ Welcome email sent to ${email}`);
      return true;
    } catch (error) {
      console.error('❌ Failed to send email:', error);
      return false;
    }
  }

  // Mock email for development
  console.log('📧 [MOCK EMAIL] Would send to:', email);
  console.log('Subject:', subject);
  console.log('Referral Link:', referralLink);
  console.log('Position:', position);
  return true;
}
