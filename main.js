const jsonserver = require('json-server');
const server =jsonserver.create;    
const router = jsonserver.router;
const middleware = jsonserver.defaults;
// sset default middlleware(logger,)
server.use(middleware);
// add custom
server.get("/echo",(req,res)=>{
    res.jsonp(req,query);
});
 

//to hanle post, put,patch you need to use body parser
// you can use jsonser-servser
server.use(jsonserver.bodyParser);
server.use((req,res,next) => {
    if(req.method==="POST") {
        req.body.createdAt = Date.now();
    }    
        // continous to json servser
        next();

   });

    
    //use default router
    server.use(router);
    server.listen (3000,() => {
        console.log('JSON server is running');
    });

