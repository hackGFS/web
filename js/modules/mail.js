angular.module('mailMan', ['baseRoute']).factory('Mail', function($http, baseRouter) {

  var Mail = function(id){

    this.id = id;

    this.url = baseRouter.route('mail/m/'+this.id);

    return this;

  }

  Mail.prototype.setId = function(id){

    this.id = id;

    this.url = baseRouter.route('mail/m/'+this.id);

  };

  Mail.prototype.getMail = function() {
    
    return $http.get(this.url);

  };

  Mail.prototype.delete = function() {

    return $http.delete(this.url);

  };

  Mail.prototype.search = function(q) {
    // body...
  };

  return Mail;

});