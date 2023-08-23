import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  // NOTE: Uncomment the below lines to make the code work

  try {
    await sendgrid.send({
      to: "kontakt@reviveinvestments.pl", // Your email where you'll receive emails
      from: "kontakt@reviveinvestments.pl", // your website email address here
      replyTo:`${req.body.email}`,
      subject: `Wiadomosc od  : ${req.body.email}`,
      html: `
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Wiadmość od ${req.body.fullname}, email: ${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Wiadomość:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              
            
              </div>
     `,
    });
  } catch (error) {
    // console.log(error);
    // return res.status(error.statusCode || 500).json({ error: error.message });
  }

  // return res.status(200).json({ error: "" });
}

export default sendEmail;