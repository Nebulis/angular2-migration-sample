(function() {
  angular.module('Brewery').filter('NoteFilter', NoteFilter);

  function NoteFilter() {
    return function (value) {
      return value > 3 ? 'glyphicon glyphicon-heart' : '';
    };
  }
})();

