// bản chất nó là PROMISE: sinh ra để làm code clean hơn
// AWAIT CHỈ SỬ DỤNG ĐƯỢC TRONG FUNCTION CÓ SỬ DỤNG ASYNC

function wait(timer=0){
   return new Promise(function(resolve, reject){
      setTimeout(resolve, timer);
   });
}

//function expression
async function run(){
   console.log('starting');
   await wait(2000);
   console.log('ending');
}
run();

//async trong arrow function
const fn = async () => {};

// async trong object
const student = {
   fullname: async function(){},
   async calcAge(){},
   yearly: async () => {},
}

   //BAI TAP
   function makeTimer(time = 1000, str){
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(str);
         }, time);
      })
   }

   async function allTimer(){
      const timer1 =  makeTimer(1000, 'timer 1');
      const timer2 =  makeTimer(2000, 'timer 2');
      const [a,b] = await Promise.all([timer1, timer2]);
      console.log(timers);
   }
   allTimer();