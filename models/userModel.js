const {Schema, model } = require('mongoose');

// create userSchemam with name, email, password, profileImage, mobno, type

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    type: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
);

const User = model('User', userSchema);

module.exports = User;