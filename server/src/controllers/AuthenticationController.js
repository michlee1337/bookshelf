module.exports = {
	register (req,res) {
		res.send({
			message: `Have fun ${req.body.email}`
		})
	}
}