(function() {
  'use strict';

  var app = angular.module('nextTools');
  app.controller('ShapeSorterController', ShapeSorterController);

  /** @ngInject */
  function ShapeSorterController($scope, $mdSidenav, $mdDialog, $location, $http) {
    var vm = this;
    var originatorEv;
    vm.isOpen = true;
    $scope.pageTitle = 'Bar Graph Sorter';
    // fab speed dail
    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];
    this.isOpen = false;
    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-scale';
    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'up';
    // back to homePage
    $scope.goHome = function() {
        $location.path('/landing');
      }
      // droDown menu for unit Converter
    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
    // md-dailog
    $scope.thisCardData;
    $scope.showInfo = function(ev) {
      $scope.cardData = $scope.thisCardData;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'app/views/infoDialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
        locals: {
          card: $scope.cardData
        },
      });
    };
    //Getting Data from Json
    $http.get("data/home_page.json").then(function(response) {
      $scope.thisCardData = response.data.tabs[1].cards[0];
    });
    function DialogController($scope, $mdDialog, card) {
      $scope.card = card;
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }
    //RandomColor generate for Shapes
    var getRandomShapeColor = function() {
      return {
        color: '#' + Math.floor(Math.random() * 13777250).toString(16)
      }
    };
    $scope.barShape = [];
    $scope.barColor = [];
    var colorArray = [];
    var i;
    //Getting the Data from Json
    $http.get('data/barGraphSorter.json').then(function(response) {
      var shapes = response.data.shape;
      var colors = response.data.color;
      for (i in shapes) {
        $scope.barShape.push({
          'id': shapes[i].id,
          'name': shapes[i].name
        })
      }
      for (i in colors) {
        $scope.barColor.push({
          'id': colors[i].id,
          'name': colors[i].name
        })
        colorArray.push(colors[i].color)
      }
      function getRandomColor(i) {
        return {
          color: colorArray[i]
        }
      };
      //Click the Button change the shapes or colors
      $scope.changeShape = function(name) {
        $scope.nameCheck = name;
        $scope.dragShape = [];
        $scope.barGraphShape = [];
        $scope.userShape = [];
        var uniqueArray;
        $scope.drag_shape = 0;
        //Reset button is used to Reset the Data
        $scope.Reset = function() {
          $scope.changeShape($scope.nameCheck);
        }
        switch ($scope.nameCheck) {
          case constants.SHAPESORTER_BUTTON_SHAPE :
            uniqueArray = getUniqueNumber($scope.barShape.length);
            $scope.userShape = uniqueArray;
            for (i in $scope.barShape) {
              var random = randomIntFromInterval(0, 3);
              $scope.dragShape.push($scope.userShape[random]);
              $scope.dragShape[i].color = getRandomShapeColor();
            }
            break;
            case constants.SHAPESORTER_BUTTON_COLOR :
            for (i in $scope.barColor) {
              $scope.barColor[i].color = getRandomColor(i);
            }
            uniqueArray = getUniqueNumber($scope.barColor.length);
            $scope.userShape = uniqueArray;
            for (i in $scope.barShape) {
              var random = randomIntFromInterval(0, 3);
              $scope.dragShape.push($scope.userShape[random]);
            }
            break;
        }
        function randomIntFromInterval(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
        $scope.droppedObjects = [];
        $scope.totalShapeCount = 0;
        $scope.barDragCount1 = 0;
        $scope.barDragCount2 = 0;
        $scope.barDragCount3 = 0;
        $scope.barDragCount4 = 0;
        //onDropComplete function
        $scope.onDropComplete = function(id, color, data, evt) {
            for (i in $scope.userShape) {
              $scope.barGraphShape.push({
                'id': $scope.userShape[i].id,
                'color': $scope.userShape[i].color
              })
            }
            switch ($scope.nameCheck) {
                case constants.SHAPESORTER_BUTTON_SHAPE :
                if (id == data.id && id == $scope.barGraphShape[0].id) {
                  $scope.dropped_objects(data);
                  $scope.barDragCount1++;
                }
                if (id == data.id && id == $scope.barGraphShape[1].id) {
                  $scope.dropped_objects(data);
                  $scope.barDragCount2++;
                }
                if (id == data.id && id == $scope.barGraphShape[2].id) {
                  $scope.dropped_objects(data);
                  $scope.barDragCount3++;
                }
                if (id == data.id && id == $scope.barGraphShape[3].id) {
                  $scope.dropped_objects(data);
                  $scope.barDragCount4++;
                }
                $scope.totalShapeCount = $scope.barDragCount1 + $scope.barDragCount2 + $scope.barDragCount3 + $scope.barDragCount4;
                break;
                case constants.SHAPESORTER_BUTTON_COLOR :
                if (color == data.color && color == $scope.barGraphShape[0].color) {
                  $scope.dropped_objects(data);
                  $scope.barDragCount1++;
                }
                if (color == data.color && color == $scope.barGraphShape[1].color) {
                  $scope.dropped_objects(data);
                  $scope.barDragCount2++;
                }
                if (color == data.color && color == $scope.barGraphShape[2].color) {
                  $scope.dropped_objects(data);
                  $scope.barDragCount3++;
                }
                if (color == data.color && color == $scope.barGraphShape[3].color) {
                  $scope.dropped_objects(data);
                  $scope.barDragCount4++;
                }
                $scope.totalShapeCount = $scope.barDragCount1 + $scope.barDragCount2 + $scope.barDragCount3 + $scope.barDragCount4;
                break;
            }
          }
          //Random uniqueNumber Generating
        function getUniqueNumber(count) {
          switch ($scope.nameCheck) {
          case constants.SHAPESORTER_BUTTON_SHAPE :
              var tmp = $scope.barShape.slice($scope.barShape);
              break;
          case constants.SHAPESORTER_BUTTON_COLOR :
              var tmp = $scope.barColor.slice($scope.barColor);
              break;
          }
          var ret = [];
          for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * tmp.length);
            var removed = tmp.splice(index, 1);
            ret.push(removed[0]);
          }
          return ret;
        }
      }
      $scope.changeShape(constants.SHAPESORTER_BUTTON_SHAPE);
    });
    //Storing the Draggable Objects in droppesObject Array
    $scope.dropped_objects = function(data) {
      $scope.droppedObjects.push(data);
      var rmindex = $scope.dragShape.indexOf(data);
      $scope.dragShape.splice(rmindex, 1);
    }
  }
})();
