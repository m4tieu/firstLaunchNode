var express = require('express');
var appli = express()

appli.get(
	'/',
	function(request, response){
		response.sendFile( __dirname + '/view/index.html');
	}
);
appli.get(
	'/user',
	function(request, response){
		var retour = {
			nom : "becerra",
			prenom : "mathieu"
			};
		response.json(retour);
	}
);

appli.listen(3000,function(){
console.log("J'écoute rien du tout")
});
