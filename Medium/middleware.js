function authentication(req, res, next) {
    const user = req.params.user;
    if(!user.includes("READ_WRITE")){
        return res.status(403).json({message : "Access Denied"});
    }
    next();

}

module.exports = { authentication };