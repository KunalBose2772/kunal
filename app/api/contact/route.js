import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "All fields are required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465, // Secure SSL
            secure: true,
            auth: {
                user: 'info@imageoptimizer.in',
                pass: 'KunalBoseGW@1411',
            },
        });

        const mailOptions = {
            from: 'info@imageoptimizer.in', // Must match the authenticated user
            to: 'kunalbose2570@gmail.com', // Recipient
            replyTo: email, // So hitting reply responds to the sender
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #5B5FFF;">New Message from Portfolio</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, message: "Message sent successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send message. Please try again later." }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
