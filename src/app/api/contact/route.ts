import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error('SENDGRID_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Le service d\'envoi d\'email n\'est pas configuré.' },
        { status: 500 }
      );
    }

    sgMail.setApiKey(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = company ? escapeHtml(company) : '';
    const safeMessage = escapeHtml(message);

    const msg = {
      to: 'alabaganne9@gmail.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'lome@strivehawk.com',
      replyTo: email,
      subject: `Nouvelle demande de contact - ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4DAADD; border-bottom: 2px solid #4DAADD; padding-bottom: 10px;">
            Nouvelle demande de contact
          </h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom complet:</strong> ${safeName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p style="margin: 10px 0;"><strong>T&eacute;l&eacute;phone:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>
            ${safeCompany ? `<p style="margin: 10px 0;"><strong>Entreprise:</strong> ${safeCompany}</p>` : ''}
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap;">
                ${safeMessage}
              </div>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Ce message a &eacute;t&eacute; envoy&eacute; depuis le formulaire de contact du site Strivehawk.
          </p>
        </div>
      `,
      text: `
Nouvelle demande de contact

Nom complet: ${name}
Email: ${email}
Téléphone: ${phone}
${company ? `Entreprise: ${company}` : ''}

Message:
${message}
      `.trim(),
    };

    await sgMail.send(msg);

    return NextResponse.json(
      {
        success: true,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons sous 24h.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
