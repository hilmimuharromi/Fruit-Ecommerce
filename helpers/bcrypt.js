const bcrypt = require('bcrypt')


function hashPassword(password) {
    let salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password.toString(), salt)
}

function verifyPassword(password, hashPassword) {
    return bcrypt.compareSync(password.toString(), hashPassword)
}

module.exports = {
    hashPassword,
    verifyPassword
}