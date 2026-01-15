# Contact Form Email Setup

This guide explains how to configure the contact form to receive emails.

## Required Environment Variables

Create a `.env.local` file in your project root:

```bash
SMTP_HOST=smtp.gmail.com       # Your SMTP server (default: Gmail)
SMTP_PORT=587                  # SMTP port (default: 587)
SMTP_USER=your-email@gmail.com # Your email account
SMTP_PASS=your-app-password    # Your email password or app password
SMTP_FROM=your-email@gmail.com # (Optional) "From" address
```

## Gmail Setup

1. Enable **2-Factor Authentication** on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Create an "App Password" for "Mail"
4. Use the 16-character password as `SMTP_PASS`

Example `.env.local` for Gmail:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
```

## Other Email Providers

| Provider        | SMTP Host              | Port |
|-----------------|------------------------|------|
| Gmail           | smtp.gmail.com         | 587  |
| Outlook/Hotmail | smtp.office365.com     | 587  |
| Yahoo           | smtp.mail.yahoo.com    | 587  |
| Zoho            | smtp.zoho.com          | 587  |
| SendGrid        | smtp.sendgrid.net      | 587  |
| Mailgun         | smtp.mailgun.org       | 587  |

## Changing the Recipient Email

Emails are currently sent to `lome@strivehawk.com`. To change this:

1. Open `src/app/api/contact/route.ts`
2. Find line 36: `to: 'lome@strivehawk.com'`
3. Replace with your desired email address

## Testing

1. Start the development server: `npm run dev`
2. Go to `http://localhost:3000/contact`
3. Fill out and submit the form
4. Check your inbox (and spam folder)

## Troubleshooting

### "Authentication failed" error
- Verify your `SMTP_USER` and `SMTP_PASS` are correct
- For Gmail, ensure you're using an App Password, not your regular password

### "Connection refused" error
- Check `SMTP_HOST` and `SMTP_PORT` values
- Ensure your firewall allows outbound connections on port 587

### Emails going to spam
- Use a verified domain for `SMTP_FROM`
- Consider using a transactional email service (SendGrid, Mailgun, etc.)
