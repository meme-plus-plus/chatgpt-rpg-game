angular.module('textRPG.services', [])
  .factory('SceneService', ['$http', function($http) {
    return {
      getScenes: function() {
        return $http.get('scenes.json').then(function(response) {
          return response.data;
        });
      },
    };
  }]);
