const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative'],
        max: [1000, 'Price cannot exceed 1000']
    },
    category: {
        type: String,
        //only these four words are allowed for category
        enum: ['Starters', 'Main', 'Dessert', 'Drinks'],
        required: true,
        message: '{VALUE} is not a valid category' //custom error message for invalid category
    },
    isVegetarian: {
        type: Boolean,
        default: false,
    },
    reviews: [
        { 
            user: String,
            rating: {type: Number, min: 1, max: 5},
            comment: String

    }],
    chef: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Chef',
    }

});

module.exports = mongoose.model('Dish', dishSchema);
