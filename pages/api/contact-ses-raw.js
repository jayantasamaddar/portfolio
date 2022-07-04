import nodemailer from 'nodemailer';
import * as aws from '@aws-sdk/client-ses';

// Create config
const config = {
  credentials: {
    accessKeyId: process.env.NEXT_AWS_ACCESSKEY_ID,
    secretAccessKey: process.env.NEXT_AWS_ACCESSKEY_SECRET,
  },
  region: process.env.NEXT_AWS_REGION,
  apiVersion: '2010-12-01',
};

const ses = new aws.SES(config);

export default async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    SES: { ses, aws },
  });

  try {
    // send mail with defined transport object
    const emailResponse = await transporter.sendMail({
      from: `${name} via Contact Form <hello@zenius.one>`,
      to: 'Jayanta Samaddar <hello@zenius.one>',
      replyTo: `${name} <${email}>`,
      subject: 'New message from contact form', // Subject line
      text: message, // plaintext version
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
      attachments: [
        {
          filename: 'quickbrownfox.txt',
          content: Buffer.from('The quick brown fox jumps over the lazy dog.'),
        },
      ],
    });
    console.log('Message sent: %s', emailResponse.messageId);
  } catch (error) {
    throw new Error(error.message);
  }

  res.status(200).json(req.body);
};
