const User = require('../models/userModel');
const bcryptjs = require('bcryptjs');

const registerUser = async(req, res) => {
    try {
        const spassword= await bcryptjs.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: spassword,
            image: req.file.filename,
            mobile: req.body.mobile,
            type: req.body.type,
        });
        const userData =await User.findOne({ email: req.body.email });
        console.log(userData);
        if (!userData) { 
            const newUser = await user.save();
            res.status(201).json({
                message: "User Created Successfully",
                data: newUser
            });
        } else {
            res.status(400).json({
                message: "User Already Exists",
            })
        }
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    registerUser,
}