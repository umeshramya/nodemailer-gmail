// this file is for sending email functions

import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// These id's and secrets should come from .env file.
const CLIENT_ID                 = process.env.GOOGLE_CLIENT_ID;
const CLEINT_SECRET             = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI              = process.env.GOOGLE_REDIRECT_URI;
const REFRESH_TOKEN             = process.env.GOOGLE_REFRESH_TOKEN;
const  googleGmailUser          = process.env.GOOGLE_GMAIL_USER 

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async(to, subject, text, html, from = googleGmailUser)=> {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: googleGmailUser,
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: `PEMR mail <${from}>`,
      to: to,
      subject: subject,
      text: text,
      html: html,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}



module.exports= sendEmail