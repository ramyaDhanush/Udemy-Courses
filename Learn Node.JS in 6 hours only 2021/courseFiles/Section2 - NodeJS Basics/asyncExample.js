const {pbkdf2 } = require('crypto');
const start = Date.now();

pbkdf2('password', 'mySecret', 10000, 1000, 'sha256', 
       ()=>{console.log("Done", Date.now()-start)} );

console.log("I would be called first", Date.now()-start);

const hash = () => {
  pbkdf2('myPass', 'verysecretKey', 10000, 1000, 'sha256',()=>{
  console.log("DONE")
  });
}

