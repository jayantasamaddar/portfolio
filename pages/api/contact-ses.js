// Load the AWS SDK for Node.js
import { SES } from 'aws-sdk';

const config = {
  accessKeyId: process.env.NEXT_AWS_ACCESSKEY_ID,
  secretAccessKey: process.env.NEXT_AWS_ACCESSKEY_SECRET,
  region: process.env.NEXT_AWS_REGION,
  apiVersion: '2010-12-01',
};

export default async (req, res) => {
  const { name, email, message } = req.body;

  // Create sendEmail params
  const params = {
    Destination: {
      ToAddresses: ['Jayanta Samaddar <hello@zenius.one>'],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
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
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New message from contact form',
      },
    },
    Source: `${name} via Contact Form <hello@zenius.one>`,
    ReplyToAddresses: [`${name} <${email}>`],
  };

  try {
    const emailResponse = await new SES(config).sendEmail(params).promise();
    console.log('Message sent: %s', emailResponse.MessageId);
  } catch (error) {
    throw new Error(error.message);
  }
  res.status(200).json(req.body);
};
