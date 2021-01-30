// const functions = require('firebase-functions');
// const nodemailer = require('nodemailer');

// //https://youtu.be/MeXLkNWTF_g
// const transport = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'musa.inspiram@gmail.com',
//     pass: 'musalyf2121'
//   }
// })

// exports.welcomeMail = functions.firestore.document('bienvenida/{id}').onCreate((snap, context) => {
//   const email = snap.data().email;
//   const name = snap.data().name;
//   return sendWelcomeMail(email, name);
// })

// function sendWelcomeMail(email, name) {
//   return transport.sendMail({
//     from: email,
//     to: 'musa.inspiram@gmail.com',
//     subject: 'test',
//     html: '<h1> bla bla bla</h1>'
//   })
//     .then(r => r)
//     .catch(e => e);
// }