const http = require('http');

const port = 5050;

const dbConnection = false;

if(!dbConnection) process.exit(1);

const server = http.createServer( (req, res) =>{
  switch(req.url){
    case '/':
      res.end('Home');
      break;
    case '/admin':
      res.end('admin');
      break;
    case '/user':
      res.end('user');
      break;
    default:
      res.end('not found : 404');
      break;
  }
})


server.listen(port, ()=>{
  console.log(`SERVER AT ${port}`);
})