// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";

// dotenv.config();

// const TOKEN = process.env.MAILTRAP_TOKEN;
// const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

// console.log("Mailtrap Token:", process.env.MAILTRAP_TOKEN);
// console.log("Mailtrap Endpoint:", process.env.MAILTRAP_ENDPOINT);


// const client = new MailtrapClient({endpoint:ENDPOINT,token:TOKEN});

// const sender = {
//   email: "hello@demomailtrap.com",
//   name: "Mahi",
// };
// const recipients = [
//   {
//     email: "dirisalamaheswari@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     html: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);



import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
	email:"hello@demomailtrap.com" ,
     name: "Mahi",
};
