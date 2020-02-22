const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
	email: { 
		type: String, 
		unique: true, 
		lowercase: true,
		required: true
	},
	password: { 
		type: String,
		required: true
	}
});

// On Save Hook, encrytp password
userSchema.pre('save', function(next) {

	const user = this;

	bcrypt.genSalt(10, function(err, salt) {
		if (err) { return next(err); }

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) { return next(err); }

			user.password = hash;
			next();
		});
	});


});


userSchema.methods.comparePassword = function(candidatePassowrd, callback) {
	bcrypt.compare(candidatePassowrd, this.password, function(err, isMatch) {

		if (err) { return callback(err); }

		callback(null, isMatch);

	});
}

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;