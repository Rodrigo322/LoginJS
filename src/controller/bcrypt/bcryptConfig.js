const bcrypt = require ('bcrypt')



module.exports={
	async password(userPassword){
	var salt = bcrypt.genSaltSync(10)
	const cryptPassword = bcrypt.hashSync(userPassword, salt);

	return cryptPassword;
	}

}