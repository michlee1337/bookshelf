module.exports = {
	port: process.env.PORT || 8081,
	db : {
		database: process.env.DB_NAME || 'booktracker',
		user: process.env.DB_USER || 'booktracker',
		password: process.env.DB_PASS || 'booktracker',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'localhost',
			storage: './booktracker.sqlite'
		}
	}
}