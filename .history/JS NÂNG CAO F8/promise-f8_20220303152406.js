// sync / async
 // setTimeout, setInterval, fectch, xmlhttprequest, file reading, request animation frame : những thằng bất đồng bộ

 // để biết thằng nào trong những thằng bất đồng bộ xong thì 
setTimeout(function(){
   console.log('1');
},1000);

console.log('2');
