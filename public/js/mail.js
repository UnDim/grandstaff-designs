require('dotenv').config();
const mailjet = require('node-mailjet').connect(
  process.env.MAILJET_API_KEY, 
  process.env.MAILJET_API_SECRET)

export function sendEmail() {
  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: document.getElementById(email).value,
          Name: document.getElementById(name).value,
        },
        To: [
          {
            Email: 'shannon.odam@icloud.com',
            Name: 'Grandstaff Designs',
          },
        ],
        Subject: document.getElementById(subject).value,
        TextPart: document.getElementById(message).value,
        HTMLPart:
          '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
      },
    ],
  })
  request
    .then(result => {
      console.log(result.body)
    })
    .catch(err => {
      console.log(err.statusCode)
    })
}