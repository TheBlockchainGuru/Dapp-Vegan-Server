import http from 'http';
import express from 'express';
import fetch from 'node-fetch'
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json())
const httpServer = http.createServer(app);

const run = async () => {
         try {
            const mailTransporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                  user: 'Dev@veganrobscoin.com',
                  pass: 'Freelancer313#!!',
                },
            });

            let mailDetails = {
                from: 'Dev@veganrobscoin.com',
                to: 'veganrobcointest@outlook.com',//harry@veganrobscoin.com
                subject: 'Vegan Rob Box Request',
                text: "start"
            };

            mailTransporter.sendMail(mailDetails, function(err, data) {
                if(err) {
                    console.log('Error Occurs');
                } else {
                    this.setState({
                        emailString : ''
                    })
                    alert("email is sented successfully")
                }
            });
        } catch (error) {
          console.log(error)
        }
}
run()

app.post('/todos', function(request, response){
    let myJson = request.body;  
    console.log(myJson)

    let string = "Hi, vegan rob. \n I just have transferred vegan rob's coin to your wallet to get a vegan box. \ntransaction hash: \n" + myJson.hash + "\nmy wallet address is \n"+myJson.walletAddress+ "\nyou can check this in this URL : \nhttps://etherscan.io/tx/" + myJson.hash + " \n My address is : "  + myJson.city + "\n Thank you." 
    
    console.log(string)
    try {
        const mailTransporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
              user: 'Dev@veganrobscoin.com',
              pass: 'Freelancer313#!!',
            },
        });

        let mailDetails = {
            from: 'Dev@veganrobscoin.com',
            to: 'veganrobcointest1@outlook.com',//harry@veganrobscoin.com
            subject: 'Vegan Rob Box Request',
            text: string
        };

        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs');
            } else {
                this.setState({
                    emailString : ''
                })
                alert("email is sented successfully")
            }
        });
    } catch (error) {
      console.log(error)
    }

    response.json({
        price : 1000000000000000000
      });


});

const PORT = 5000;
httpServer.listen(PORT, (console.log("start")));