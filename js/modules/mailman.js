webApp.service('Mailman', function($scope, $http) {

  id = null;

  var setId = function(id) {
      id = id;

      console.log(id);
  };

  var getId = function(){
    return id;
  }

  var getMail = function(){
    $http.get().then(function(){});
  }

  return Mailman;

});