let authorized = true;

function checkAuth(req, res, next) {
    if (authorized) {
        res.status(200).send("You are authorized");
        next();
    } else {
        res.status(403).send('Unauthorized!')
    }
}

export default checkAuth;