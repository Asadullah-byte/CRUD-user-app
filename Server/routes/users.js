import express from 'express'
import User from '../model/userModels.js'

const router = express.Router();

  
router.get('/',async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })
router.get('/:id',async (req, res) => {
  const userId = req.params.id;  
  try {
      const users = await User.findById(userId);
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })

router.post('/add-users', async (req, res) => {
    const user = new User(req.body);
  
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
});

router.patch('/:id',async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{
          new : true,
          runValidators : true
        });   
        if (!user) {
            return res.status(404).send("User not found!");
          }
    
    const { name, email, phone } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;

        const updatedUser = await user.save();
        res.json(updatedUser);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);   
        if (!user) {
            return res.status(404).send("User not found!");
        }
        await user.deleteOne();
        res.status(200).send('User deleted');

        } catch (error) {
            res.status(500).json({ message: error.message });
          }
})



export default router