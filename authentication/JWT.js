const jwt = require('jsonwebtoken');

function createToken(name, id, email) {
    var token = jwt.sign({ name, email, id }, "medicalimportexport_");
    return token;
}

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(" ")[1];
    //var decodedtoken = jwt.verify(token, "secretshh");

    jwt.verify(token, "secretshh", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            req.token = authData;
            next();
        }
    })

}

function getToken(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(" ")[1];
    //var decodedtoken = jwt.verify(token, "secretshh");
    return token;
}
module.exports = {
    createToken: createToken,
    verifyToken: verifyToken,
    getToken: getToken
}