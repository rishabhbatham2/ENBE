// app/api/query/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, phoneno } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {   
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const recipients = process.env.EMAIL_TO.split(",");

    const mailOptions = {
    
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: recipients,
      subject: "New Contact Form Submission",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
mobile no: ${phoneno}
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent!" }, { status: 200 });
  } catch (err) {
    console.error("Mail error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
