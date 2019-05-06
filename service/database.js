module.exports = class Database{
	constructor(database, host, user, password) {
		this.database = database;
		this.host = host;
		this.user = user;
		this.password = password;
  	}


  	save(exchange){
  		console.log('----- Save Exchange ------');
  		return (exchange)
  	}

}