const User = require('./user.js')
const Product = require('./product.js')
const Mailer = require('./service/mailer.js')
const Database = require('./service/database.js')

class Exchange{
	constructor(receiver,product,startDate,endDate){
		this.receiver = receiver;
		this.product = product;
		this.owner = this.product.owner;
		this.startDate = new Date(startDate);
		this.endDate = new Date(endDate+'T23:59');
		this.Mailer = new Mailer();
		this.db = new Database();
	}

	save(){
		if(this.receiver.isValid() || this.product.isValid() && this.isValidDateInterval()){
			this.db.save(this)
		}
		if(!this.receiver.isValidAge()) this.Mailer.send(receiver)
	}

	isValidDateInterval(){
		const today = new Date();
		today.setDate(today.getDate() - 1)
		if(this.startDate < today || this.startDate > this.endDate) return false
		return true
	}
}

let receiver = new User('jerome.bueno@hotmail.fr','jerome','bueno','22');
let owner = new User('test.owner@hotmail.fr','test','owner','17');
let product = new Product('mail',owner)

let exchange = new Exchange(receiver,product,'2019-04-30','2019-04-30')
exchange.save()