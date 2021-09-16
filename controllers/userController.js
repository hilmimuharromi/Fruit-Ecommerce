const {User} = require('../models')
const {generateToken} = require('../helpers/jwt')
const {verifyPassword} = require('../helpers/bcrypt')

const register = async (req, res, next) => {
    const {email, name, password, role} = req.body

    try {
        const user = await User.create({
            email, name, password, role
        })
        const payload = {
            email: user.email,
            id: user.id,
            name: user.name,
            role: user.role
        }

        const token = generateToken(payload)
        res.status(201).json({
            status: 'success',
            data: {
                token 
            }
        })

    } catch(err) {
        console.log('user error', err)
        res.status(400).json({
            err
        })
    }
}

const login = async(req, res, next) => {
    const {email, password} = req.body
    try{
        const user = await User.findOne({
            where: {
                email
            }
        })

        if(user) {
            console.log('user login', user.email)
            const truePassword = verifyPassword(password, user.password)
            if(truePassword) {
                const payload = {
                    email: user.email,
                    id: user.id,
                    name: user.name,
                    role: user.role
                }
                const token = generateToken(payload)
                res.status(200).json({
                    status: 'success',
                    data: {
                        token 
                    }
                })
            } else {
                res.status(400).json({
                    status: 'failed',
                    message: 'please Check your email or password'
                }) 
            }
            console.log('cek pass', truePassword)
        } else {
            res.status(400).json({
                status: 'failed',
                message: 'please Check your email or password'
            }) 
        }
    } catch(err) {
        console.log('user login error', err)
        res.status(400).json({
            err
        })
    }
}

module.exports = {
    register,
    login
}