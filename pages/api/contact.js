import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_EMAIL_USER,
      pass: process.env.NEXT_EMAIL_PASSWORD,
    },
  });

  try {
    const emailResponse = await transporter.sendMail({
      from: `${name} via Contact Form <hello@zenius.one>`,
      to: 'Jayanta Samaddar <jayanta@zenius.one>',
      replyTo: `${name} <${email}>`,
      subject: 'New message from contact form',
      html: `
      <style>
        p { white-space: pre-wrap }
      </style>
            <div>
                <h3>New message from contact form</h3><br />
                <p><strong>Name:</strong> ${name} </p>
                <p><strong>Email:</strong> ${email} </p><br/>
                <p><strong>Message:</strong></p>
                <p>${message.replaceAll(/\\n/g, '</p><p>')}</p><br/>
            </div>`,
    });
    console.log('Message sent: %s', emailResponse.messageId);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(req.body);
};
