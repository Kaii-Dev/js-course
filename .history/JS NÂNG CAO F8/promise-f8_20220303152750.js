// sync / async

 // setTimeout, setInterval, fectch, xmlhttprequest, file reading, request animation frame : những thằng bất đồng bộ

 // để biết thằng nào trong những thằng bất đồng bộ xong thì sử dụng callback 
setTimeout(function(){
   console.log('1');
},1000);
console.log('2');

setTimeout(()=>{
   console.log('1');
};1000);