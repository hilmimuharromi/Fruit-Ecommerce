const {Cart, Product} = require('../models')

const getCart = async (req, res, next) => {
    
    try {
        const user = req.decoded
        const result = await Cart.findAll({
            where: {
                userId: user.id
            },
            include: [
                {
                  model: Product,
                },
              ],
        })
        console.log('cart ===>',result)

        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch(err) {
        console.log('error dari cart', err)
        res.status(400).json({
            err
        })
    }
}

const saveCart = async (req, res, next) => {
    try{

        const user = req.decoded
        const {productId, quantity} = req.body
        // const result = []
        const payload = {
            productId,
            quantity,
            userId: user.id
        }

        const oldCart = await Cart.findOne({
            where: {
                productId: productId,
                userId: user.id
            }
        })

        console.log('old cart', oldCart)
        

        if(quantity <= 0) {
            const result = await Cart.destroy({
                where: {
                    productId: productId,
                userId: user.id
                }
            })

            
            res.status(200).json({
                status: 'success',
                data: result
            })
        } else if(!oldCart) {
            console.log('masuk')
           const result = await Cart.create(payload)

            res.status(200).json({
                status: 'success',
                data: result
            })
        }  else {
            const result = await Cart.update(payload, {
                where: {
                    productId: productId,
                userId: user.id
                }
            })
            
            res.status(200).json({
                status: 'success',
                data: result
            })

        }


    } catch(err) {
        console.log('error dari cart', err)
        res.status(400).json({
            err
        })
    }

   
} 

const deleteCart =async (req, res, next) => {
    const {id} = req.params

    try {
        const result = await Cart.destroy({
            where: {
                id
            }
        })
    
        
        res.status(200).json({
            status: 'success',
            data: result
        })

    } catch(err) {
        console.log('error dari cart', err)
        res.status(400).json({
            err
        })
    }

   

}

module.exports = {
    getCart, saveCart, deleteCart
}