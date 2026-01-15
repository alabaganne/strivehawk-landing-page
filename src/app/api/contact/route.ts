import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, 
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'lome@strivehawk.com', 
      subject: `Nouvelle demande de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #4DAADD; border-bottom: 2px solid #4DAADD; padding-bottom: 10px;">
            Nouvelle demande de contact
          </h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom complet:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${company ? `<p style="margin: 10px 0;"><strong>Entreprise:</strong> ${company}</p>` : ''}
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Ce message a été envoyé depuis le formulaire de contact du site Strivehawk.
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
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true,
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons sous 24h.' 
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

