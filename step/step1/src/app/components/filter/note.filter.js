angular.module('Brewery').filter('NoteFilter', function(){
	return function(value){
		return value > 3 ? 'glyphicon glyphicon-heart' : '';
	};
})
