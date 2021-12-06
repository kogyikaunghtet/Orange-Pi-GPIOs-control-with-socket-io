var config = require("./config.js");
var socket = require("socket.io-client")(config.server_url);
const Gpio = require("orange-pi-gpio");

socket.on("connect", function(){
  console.log("Connected to server");
  socket.on("updateState", function(state){
    console.log("The new state is: " + state);
    let gpio7 = new Gpio({pin:7});
    if (state == true){
        gpio7.write(1);
    }
    else {
        gpio7.write(0);
    }
  });
})
