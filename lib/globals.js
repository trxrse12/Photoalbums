// RSE comment >>> to avoid getting a stupid error message (Access deined for user root@localhost,
//	you have to use a more recent version of mysql node module, so modify the package.json to
//		mysql: "^2.15.0"

module.exports = {
	applicationPort 			: 80,
	database 					: 
	{
		host					: 'localhost',
  		database 				: 'photoalbums',
		user     				: 'root',
 		password 				: 'test1234'
	}
}