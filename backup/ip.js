const express = require("express");  //Require dependencies
const geo = require("geoip-lite");
const PORT = process.env.PORT || 2000;   //Define the PORT
const app = express();
app.set("trust proxy", true);
app.get("/lookup", function (req, res) {
  
const ip = req.ip;   //Extract the IP address from the request
if (!ip)
  return res.status(500).json({
    error: true,
    message: "Couldn't extract your IP address.",
  });
let details = geo.lookup(ip);  //Extract details the from IP address
  
return res.send({          //Send the data to the client
   country: details.country,
   state: details.region,
   city: details.city
  });
});
  
app.listen(PORT, () => {      // Start the server
  console.log("IP Lookup service started!");
});