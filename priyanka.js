// This is created by priyanka

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity: {
        type: Number,
        required: true
    }
})

const Cart = mongoose.model('Cart', cartSchema)

function add(a, b) {
    return a+b
}

function greeting(name){
    console.log("welcome",name)
}

greeting("Sony")
greeting("Tony")
greeting("Mony")
greeting("Kony")

