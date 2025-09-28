import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const {name, email, subject, message} = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                {error: 'Name, email, and message are required'},
                {status: 400}
            );
        }

        // Create transporter with your email service
        const transporter = nodemailer.createTransport({
            // Gmail configuration
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail App Password
            },

            // Alternative: Custom SMTP configuration
            // host: process.env.SMTP_HOST,
            // port: process.env.SMTP_PORT,
            // secure: true, // true for 465, false for other ports
            // auth: {
            //     user: process.env.SMTP_USER,
            //     pass: process.env.SMTP_PASS,
            // },
        });

        // Email to you (notification)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@culture-dynamics.at', // Your email address
            subject: `New Contact Form Message: ${subject || 'No Subject'}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #dc2626;">New Contact Form Submission</h2>
                    
                    <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
                    </div>
                    
                    <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <h3 style="margin-top: 0;">Message:</h3>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    
                    <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 12px;">
                        This email was sent from the Culture Dynamics website contact form.
                    </p>
                </div>
            `,
        };

        // Confirmation email to sender
        const confirmationMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Bestätigung: Ihre Nachricht an Culture Dynamics',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #dc2626;">Vielen Dank für Ihre Nachricht!</h2>
                    
                    <p>Liebe/r ${name},</p>
                    
                    <p>vielen Dank für Ihre Kontaktaufnahme. Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
                    
                    <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0;">Ihre Nachricht:</h3>
                        <p><strong>Betreff:</strong> ${subject || 'Kein Betreff'}</p>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    
                    <p>Falls Sie dringende Fragen haben, können Sie uns auch direkt unter <a href="mailto:info@culture-dynamics.at" style="color: #dc2626;">info@culture-dynamics.at</a> oder telefonisch unter +43 1 234 5678 erreichen.</p>
                    
                    <p>Mit freundlichen Grüßen,<br>
                    Ihr Culture Dynamics Team</p>
                    
                    <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 12px;">
                        Culture Dynamics - Verein zur Erforschung und Förderung von Diversität und Integrität in Kunst und Kultur
                    </p>
                </div>
            `,
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(confirmationMailOptions);

        return NextResponse.json(
            {message: 'Emails sent successfully'},
            {status: 200}
        );

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            {error: 'Failed to send email'},
            {status: 500}
        );
    }
}