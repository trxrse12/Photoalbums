// RSE comment >>> to avoid getting a stupid error message (Access deined for user root@localhost,
//	you have to use a more recent version of mysql node module, so modify the package.json to
//		mysql: "^2.15.0"

module.exports = {
	applicationPort 			: 80,
	database 					: function(){
	    if(process.env.ENVIRONMENT){
	        var opsworks = require('./../opsworks');
	        var opsWorksDB = opsworks.db;
	        var rdsConnection = {
	            host: opsWorksDB.host,
                port: opsWorksDB.port,
                database: opsWorksDB.database,
                user: opsWorksDB.username,
                password: opsWorksDB.password
            };
	        return rdsConnection;
        } else {
	        var local=require('./../config/local');
	        var localConnection = local.db;
	        return localConnection;
        }
    }

}