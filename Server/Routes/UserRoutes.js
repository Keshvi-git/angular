const express=require('express')
const Customer =require('../Models/Customer')
const router = express.Router()
var jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { GetAllUsers, GetByID, AddUser, UpdateUser, DelUser } = require('../Controller/userConroller')

router.get('/', GetAllUsers)
router.get('/:id', GetByID)
router.post('/', AddUser)
router.patch('/:id', UpdateUser)
router.delete('/:id', DelUser)

// router.post('/login',async(req,res)=>{
//     const data= await Customer.findOne({
//         name:req.body.name,
//         password:req.body.password
//     })

//     if(data){
//         var token =jwt.sign({...data},process.env.jwtSecret)
//         const ans={
//             isvalid: true,
//             msg:"welcome to our website",
//             token:token
//             // data:data
//         }
//         res.send(ans)
//     }
//     else{
//         const data={
//             isvalid:false,
//             msg:"UserName / Password is incorrect"
//         }
//         res.send(data)
//     }
// })
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Customer.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: user._id }, 'your_secret_key', { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, address } = req.body;

        // Check if the user already exists
        let user = await Customer.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        user = new Customer({
            name,
            email,
            password: hashedPassword, // Store hashed password
            address
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error("Signup Error:", error.message); // Log error in console
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router