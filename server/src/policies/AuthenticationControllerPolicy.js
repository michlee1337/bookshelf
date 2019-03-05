const Joi = require('joi')

module.exports = {
	register (req,res,next) {
		const schema = {
			email: Joi.string().email(),
			password: Joi.string().regex(
				new RegExp('^[a-zA-Z0-9]{8,32}$')
			)
		}
		const {error, value} = Joi.validate(req.body, schema)

		if (error) {
			switch (error.details[0].context.key) {
				case 'email':
					res.status(400).send({
						error: 'provide valid email'
					})
					break
				case 'password':
					res.status(400).send({
						error: `Password must:<br>1. Contain ONLY alphanumerics<br>2. Between 8 to 32 characters in length (inclusive)`
					})
					break
				default:
					res.status(400).send({
						error: 'idk, smtg went wrong'
					})
			}
		} else {
			next()
		}
	}
}