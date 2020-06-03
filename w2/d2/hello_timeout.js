//each console log will be printed in terminal after 3 sec
setTimeout(() => {
  console.log('43110');
}, 2000);


setTimeout(() => {
  console.log('th3r3');
}, 3000);

setTimeout(() => {
  console.log('w0r1d');
}, 5000);


//printing: first line, last line, time out. The timeout will appear last, after approx 1 sec delay
console.log('first line');
setTimeout(() => {
  console.log('timeout line');
}, 1000);
console.log('last line');