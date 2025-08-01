export function isAuthenticated(req, res, next){
    if(req.session?.user){
        return next();
    }

    res.status(401).send({message: 'Not authorized'});
}