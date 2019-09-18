var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var pinList = [2, 3, 4, 17, 27, 22, 10, 9, 11, 5, 6, 13, 19, 26, 21, 20];
var gpio = [];
var count = 0;

pinList.forEach(function(el) {
  gpio[el] = new Gpio(el, 'out');
});

var blinkInterval = setInterval(function(){
  pinList.forEach(function(el) {
    gpio[el].writeSync(gpio[el].readSync() ^ 1);
  });

  count++;

  console.log(count);
}, 250);
