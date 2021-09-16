const {User} = require('../models')


const register = async (req, res, next) => {
    const {email} = req.body

    try{
        const user = await User.findOne({
            where: { email}
        })

        res.status(201).json({
            status: 'success',
            data: user
        })

        console.log('user', user)
    } catch(err) {
        res.status(400).json({
            err
        })
    }
    
}

module.exports = {
    register
}