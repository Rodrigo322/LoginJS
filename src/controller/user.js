const models = require('../models')
const bcrypt = require('./bcrypt/bcryptConfig')

let User = models.User;
module.exports={
	async login(req, res){
		try{
			const {email, password} = req.body;

			const users = await User.findOne({where:{email, password}});
			return res.send("Ola "+users.Name)
		}catch(error){
			return res.status(400).json({error:"Usuario inexistente :( "});
		}
		
	},

	async create(req, res){


		try{

		const {Name, email, password} = req.body;
		
		const users = await User.findOne({ where: { email } });
		if(users != null){
			return res.send("Esse email ja foi utilizado amigão ;) ");
		}
		else{
			console.log(bcrypt.password(password));
			
			const users = await User.create({Name, email, password});

			return res.send("Cadastrado com sucesso "+users.Name+" ;)");
		}

}
catch(error){
	return res.status(400).json({error:"Erro do brabo :( "});
}


	}
}