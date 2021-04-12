const models = require('../models')
const bcrypt = require ('bcrypt')
var salt = bcrypt.genSaltSync(10)

let User = models.User;
module.exports={
	async login(req, res){
		var {email, password} = req.body;
		try{
			
			const users = await User.findOne({ where: { email } });
			let match = bcrypt.compareSync(req.body.password,users.password);

			if(match){

				return res.send("Bem vindo! " +users.Name);
			}else{
				return res.send("Senha incorreta mano :(");
			}
			
		}catch(error){
			return res.send("Usuario inexistente :(  Erro (para programadores):" +error);
		}
		
	},

	async create(req, res){

		try{

			var {Name, email, password} = req.body;

			const users = await User.findOne({ where: { email } });
			if(users != null){
				return res.send("Esse email ja foi utilizado amigão ;) ");
			}
			else{
				
				let cryptPassword =  await bcrypt.hash(password, salt);
				var password = cryptPassword;


				const users = await User.create({Name, email, password});

				return res.send("Cadastrado com sucesso "+users.Name+" ;)");
			}

		}
		catch(error){
			return res.status(400).json({error:"Erro do brabo :( " + error});
		}


	}
}