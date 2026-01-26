// app/api/query/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phoneno, productName, quantity, productImage } = await req.json();

    if (!name || !email || !productName) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
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

    const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 1px solid #ddd;">
        <h1 style="margin: 0; font-size: 24px; color: #222;">New Quote Request</h1>
        </div>
        <div style="padding: 20px;">
        <h2 style="font-size: 20px; color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 0;">Product Details</h2>
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
            ${productImage ? `<img src="${productImage}" alt="${productName}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px;">` : ''}
            <div>
            <h3 style="font-size: 18px; margin: 0 0 5px;">${productName}</h3>
            <p style="margin: 0;"><strong>Quantity:</strong> ${quantity}</p>
            </div>
        </div>
        <h2 style="font-size: 20px; color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Customer Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${phoneno ? `<p><strong>Phone:</strong> ${phoneno}</p>` : ''}
        </div>
        <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #ddd;">
        <p>This email was sent from the website contact form.</p>
        </div>
    </div>
    `;

    const mailOptions = {
      from: `"Website Quote" <${process.env.SMTP_USER}>`,
      to: recipients,
      subject: `New Quote Request for: ${productName}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent!" }, { status: 200 });
  } catch (err) {
    console.error("Mail error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
