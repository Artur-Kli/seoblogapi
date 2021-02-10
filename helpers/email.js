const nodeMailer = require('nodemailer')

exports.sendEmailWithNodemailer = (req, res, emailData) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "arturklinfo@gmail.com",
      pass: "xzlttgocyuablgml",
    },
    tls: {
      ciphers: "SSLv3"
    }
  })

  return transporter
    .sendMail(emailData)
    .then((info) => {
        // console.log(`Message sent: ${info.response}`)
      
        return res.json({
          success: true
        })

        //  ----- controllers > auth > forgotPassword ------- test response
        // return res.json({
        //   message: `Email has been sent to ${emailData.to}. Follow the instructions to reset your password. Link expires in 10min.`
        // })
    })
    .catch((err) => console.log(`Problem sendind email: ${err}`))
}