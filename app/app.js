angular.module('textRPG', ['textRPG.services'])
  .controller('GameController', ['$scope', 'SceneService', '$sce', '$timeout', function($scope, SceneService, $sce, $timeout) {
    $scope.scenes = [];
    $scope.currentScene = null;
    $scope.videoUrl = '';
    $scope.backgroundMusicStarted=false;

    SceneService.getScenes().then(function(scenes) {
      $scope.scenes = scenes;
      $scope.currentScene = $scope.scenes[0];
    });

    $scope.playBackgroundMusic = function() {
        var backgroundMusic = document.getElementById('background-music');
        backgroundMusic.volume = 0.1; // Adjust the volume (0.0 to 1.0) 
        backgroundMusic.play();
      };
      
      $scope.pauseBackgroundMusic = function() {
        var backgroundMusic = document.getElementById('background-music');
        backgroundMusic.pause();
      };
      

    $scope.loadScene = function(sceneId) {
        // ... existing code ... ChatGPT set me up to play/perform different actions on the music depending on the scene. Cool
      
        if (!$scope.backgroundMusicStarted) {
          $scope.playBackgroundMusic();
          $scope.backgroundMusicStarted = true;
        }
      };
      

    $scope.chooseOption = function(choice) {
        // Hide the video when choosing an option without a videoId
          $scope.videoUrl = '';
      
        if (choice.nextSceneId) {
          $scope.currentScene = $scope.scenes.find(scene => scene.id === choice.nextSceneId);
          $scope.loadScene(choice.sceneId)

        } 
         if ($scope.currentScene.videoId) {
            $scope.isLoadingVideo = true;
            $timeout(function() {
                $scope.isLoadingVideo = false;
            }, 1000); // 1 seconds
            $scope.pauseBackgroundMusic();
          $scope.videoUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + choice.videoId);
        }
      };
      
  }]);