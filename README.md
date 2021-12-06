# Orange-Pi-GPIOs-control-with-socket-io
Controlling Orange Pi GPIOs with Socket.io

Orange Pi Zero ရဲ့ GPIO တွေကို အင်တာနက်မှတဆင့် control နိုင်ဖို့ NodeJS, Socket.IO အသုံးပြုတဲ့ project လေး စမ်းကြည့်ထားပါတယ်။ server ကိုတော့ Heroku မှာ တင်ပေးထားပြီး ဒီ Link [http://led.kogyikaunghtet.com] ကနေ တိုက်ရိုက် စမ်းသပ်ကြည့်လို့ရပါတယ်။

## WiringOP-Zero Library Installation

Orange Pi Zero ရဲ့ GPIO တွေကို ထိန်းချုပ်ဖို့ WiringPi Library လိုအပ်တဲ့အတွက် orangepi_led.js File ကို Node မှာ မ run ခင် WiringOP-Zero Library ကို install ပေးဖို့ လိုအပ်ပါမယ်။ config.js File ထဲမှာတော့ ကိုယ်ပိုင် Server ရှိရင် URL ပြင်ဆင်နိုင်ပါတယ်။

`$ git clone https://github.com/kogyikaunghtet/WiringOP-Zero`

`$ cd WiringOP-Zero`

`$ chmod +x ./build`

`$ sudo ./build`

**Testing WiringOP-Zero Library** - `gpio readall`

## Node and NPM Installation

Node and NPM install ဖို့ အတွက်တော့ [https://nodejs.org/en/download/] မှာ ဒေါင်းလုပ်ရယူနိုင်ပါတယ်။ Arm kernel architecture စစ်ဖို့ကိုတော့ `uname -m` command သုံးနိုင်ပါတယ်။ `wget` command နဲ့ တိုက်ရိုက် ဒေါင်းယူပြီးရင် `tar -xvf` command နဲ့ ဖြည်ပါ။ ဖြည်ပြီးရင် cd ဖြင့် ဝင်ရောက်ပြီး အောက်ပါ command ဖြင့် **/usr/local** directory ထဲသို့ ထည့်ပါ။

`$ sudo cp -R * /usr/local/`

Node version စစ်ရန် - 

`$ node -v`

NPM version စစ်ရန် -

`$ npm -v`

## orange-pi-gpio Module Installation

Node.js မှာ Orange Pi ရဲ့ GPIO တွေ control နိုင်ဖို့ လိုအပ်တဲ့ orange-pi-gpio module ကိုတော့ အောက်ပါအတိုင်း install နိုင်ပါတယ်။

`npm i orange-pi-gpio`

အသေးစိတ်ကို [https://www.npmjs.com/package/orange-pi-gpio] မှာ ကြည့်လို့ရပါတယ်။
