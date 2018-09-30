module.exports = function(app, route){

   
        //return middleware.
        return function(req, res, next){
	console.log(req.body);
          res.setHeader('Content-Type', 'text/plain')
            res.write('you posted:\n')
            res.end(JSON.stringify(req.body, null, 2))  
            
        };
}
