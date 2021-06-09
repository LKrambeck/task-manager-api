const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const myEmail = 'wirida1071@relumyx.com'

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: myEmail,
        subject: 'Welcome to the Task App',
        text: `Welcome, ${name}. Thanks for joining Task App`
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: myEmail,
        subject: `Farewell ${name}`,
        text: 'We are sad to see you go. Can you explain why you dont need our services anymore?'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}


