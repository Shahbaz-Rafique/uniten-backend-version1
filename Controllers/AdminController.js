const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const admin = require('../models/adminmodel');



exports.adminregister = async (req, res) => {
    try {
        console.log('comed')
        const { email, password, confirmPassword } = req.body;


        console.log(email, password, confirmPassword);
        if (!email || !password || !confirmPassword) {
            return res.status(422).json({ error: "Please fill all the fields" });
        }

        const existingAdmin = await admin.findOne({ email: email });





        if (existingAdmin && (existingAdmin.email === email )) {
            return res.status(422).json({ error: 'admin Already exists' });
        }

        
        
        
        else {
            const admin1 = new admin({
                email: email,
                password: password,
                confirmPassword: confirmPassword,

            
            });

            await admin1.save();

            const data = {email, password };

            if (admin1) {
                return res.status(201).json({ message: 'admin Registered Successfully', data });
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.adminsignIn = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
console.log(email,password)
        if (!email || !password) {
            return res.status(400).json({ message: 'Please fill all the fields' });
        }

        const response = await admin.findOne({ email: email });

        if (!response) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isMatch = await bcrypt.compare(password, response.password);

        if (response && response.email === email && isMatch) {
            const token = jwt.sign({ _id: response._id }, process.env.SECRET_KEY);
            console.log('The token is ', token);

            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 200000000),
                httpOnly: true
            });

            res.status(201).json({
                message: "You are logged in successfully",
                email: response.email,
                adminId: response._id,
            });
        } else {
            res.status(500).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.logout = (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.send('admin Logout');
};


exports.getall = async(req, res) => {

    try {
        const alladmins = await admin.find({}, 'adminname'); 
        return res.status(200).json(alladmins);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    
   
};


exports.getall = async(req, res) => {

    try {
        const alladmins = await admin.find({}, 'adminname'); 
        return res.status(200).json(alladmins);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    
   
};




exports.approveUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        const role=req.body.role;

        // Find the user by ID
        const foundUser = await user.findById(userId);

        if (!foundUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        foundUser.isApproved = true;
        foundUser.role=role;

        // Save the updated user
        await foundUser.save();

        return res.status(200).json({ message: 'User approved successfully', user: foundUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
