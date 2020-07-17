const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'rvibhor43@gmail.com',
    subject: 'Welcome to the app',
    text: `Hello ${name}, how are you?`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'rvibhor43@gmail.com',
    subject: 'User removed',
    text: `Hey, ${name}, you have deleted your account`,
  });
};

module.exports = {
  sendWelcomeEmail: sendWelcomeEmail,
  sendCancellationEmail: sendCancellationEmail,
};
