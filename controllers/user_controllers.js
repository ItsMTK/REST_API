const {'v4' : uuidv4} = require('uuid');

let users = [];

const getUsers = (req  ,res) => {
	console.log(users);
	res.json(users);
};

const createUser = (req , res) => {
	const new_obj = req.body;
	const userId = uuidv4();
	users.push({...new_obj , id : userId});
	console.log(users);
	res.send(`New user has been created: ${req.body.name}`);
};

const getUser = (req , res) => {
	const { id } = req.params;
	const wanted_user = users.find((user) => user.id === id);
	res.json(wanted_user);
};


const deleteUser = (req , res) => {
	const { id } = req.params;
	users = users.filter((user) =>  user.id !== id);
	res.send(`User with ID: ${id} has been deleted successfully!`);
};

const updateUser = (req , res) => {
	const {id} = req.params;
	const {name , age , job} = req.body;
	console.log(req.body);
	const wanted_user = users.find((user) =>  user.id === id);

	console.log(wanted_user);
	console.log(id);

	if(name)
		wanted_user.name = name;

	if(age)
		wanted_user.age = age;

	if(job)
		wanted_user.job = job;


	res.send(`User with ID: ${id} has been modified successfully!`);

};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getUser = getUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
