export = sendEmail;
/**
 * This function send emails using nodemailer and  gamil
 * set up access token in google account from which you wish send email
 * set these environmental variables 
*  process.env.GOOGLE_CLIENT_ID;
*  process.env.GOOGLE_CLIENT_SECRET;
*  process.env.GOOGLE_REDIRECT_URI;
*  process.env.GOOGLE_REFRESH_TOKEN;
*  process.env.GOOGLE_GMAIL_USER 
 * @param to To email to sent
 * @param subject subject  of email
 * @param text body of email in text format
 * @param html body of email in html formt
 * @param from replay to email 
 * @param fromName name to display
 */
declare function sendEmail(to: string, subject: string, text: string, html: any, fromName?: string, from?: string, replayTo?:string): Promise<any>;
