const express = require('express');
const router = express.Router();
const {createUser , getUsers , updateUser , deleteUser , getUser} = require('../controllers/user_controllers.js')




router.get('/' , getUsers);

router.post('/' , createUser);


router.get('/:id' , getUser);

router.delete('/:id' , deleteUser);

router.patch('/:id' , updateUser);

exports.users_router=  router;
