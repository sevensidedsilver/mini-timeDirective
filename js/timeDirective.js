angular.module('app').directive('showTime', function(){
  return {
    restrict: 'E',
    template: '<div> The current time is {{time}} </div>',
    link: function(scope, element, attrs){
      var time = new Date()
      scope.time = time.toString()
    },


  }


})
