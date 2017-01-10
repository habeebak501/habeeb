/**
 * You must include the dependency on 'ngMaterial'
 */
var app = angular.module('nextTools', ['ngMaterial', 'ngAnimate', 'ngDraggable']);
app.controller('NextCtrl', barGraph);

function barGraph($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $http) {
    var vm = this;
    $scope.pageTitle = 'Next Tools';
    $scope.page2Title = 'Unit Converter';
    $scope.page3Title = 'World Map';
    $scope.page2DGraph = '2D Graph Plotter';


    // fab speed dail
    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];
    this.isOpen = false;
    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-scale';
    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'up';
    this.userUnittwo = '';

    // carousel
    $(document).ready(function() {
        $('.carousel.carousel-slider').carousel({
            full_width: true
        });
    });
    // nicescroll
    $(document).ready(function() {
        //$(".scroll").niceScroll();
    });
    // toggleSidenav
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    // toggle nav bar
    $scope.menu = [{
        link: '',
        title: '2D Graph plotter',
        icon: 'dashboard'
    }, {
        link: '',
        title: 'Unit  Converter',
        icon: 'group'
    }, {
        link: '',
        title: 'Area Explorer',
        icon: 'message'
    }];
    $scope.admin = [{
        link: '',
        title: 'chemistry',
        icon: 'delete'
    }, {
        link: '',
        title: 'Social',
        icon: 'settings'
    }];

    //  maths card list
    $scope.mathslists = [{
        title: 'Drawing',
        img: 'assets/images/colors.png'
    }, {
        title: 'Clock',
        img: 'assets/images/map.png'
    }, {
        title: 'World Time',
        img: 'assets/images/compass.png'
    }, {
        title: 'Abacus',
        img: 'assets/images/clipboard.png'
    }, {
        title: 'Multiplication Table',
        img: 'assets/images/settings.png'
    }, {
        title: 'Drawing',
        img: 'assets/images/colors.png'
    }];

    //  chemistry card list
    $scope.chemistrys = [{
        title: 'Periodic Table',
        img: 'assets/images/map.png'
    }, {
        title: 'pH of Acids and Bases',
        img: 'assets/images/settings.png'
    }, {
        title: 'Balancing Equations',
        img: 'assets/images/compass.png'
    }];

    // socials card list

    $scope.socials = [{
        title: 'Next Maps',
        img: 'assets/images/map.png'
    }, {
        title: 'iMaps',
        img: 'assets/images/compass.png'
    }]

    // Primary cards list
    $scope.Primarys = [{
        title: 'How to Draw',
        img: 'assets/images/map.png'
    }, {
        title: 'Clock',
        img: 'assets/images/time.png'
    }, {
        title: 'World Time',
        img: 'assets/images/compass.png'
    }, {
        title: 'Abacus',
        img: 'assets/images/news.png'
    }, {
        title: 'Multiplication Table',
        img: 'assets/images/calendar.png'
    }]

    // unit Converter
    $scope.units = [{
        option: 'cm'
    }, {
        option: 'km'
    }, {
        option: 'mm'
    }, {
        option: 'dm'
    }];

    // $scope.showUnitTitle = function(unit, index) {
    //      unit &&console.log(unit, index);
    //      return unit ? unit.option;
    //    }


    $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };

    // md-dailog
    $scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'infoDialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };

    function DialogController($scope, $mdDialog) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }

    // carousel dialog
    $scope.showCarousal = function(ev) {
        $mdDialog.show({
            controller: CarouselController,
            templateUrl: 'onboarding.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };

    function CarouselController($scope, $mdDialog) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }
    //barGraph

    var shape_check=1;
    var color_check=2;
    $scope.barShape = [];
    $scope.barColor = [];
    $http.get('data.json').then(function(response) {
        console.log(response);
        var shapes = response.data.shape;
        var colors = response.data.color;
        for (i in shapes) {
            $scope.barShape.push({
                'id': shapes[i].id,
                'name': shapes[i].name,
                'color': shapes[i].color
            })
        }
        for (i in colors) {
            $scope.barColor.push({
                'id': colors[i].id,
                'name': colors[i].name,
                'color': colors[i].color
            })
        }
        console.log($scope.barShape);
        console.log($scope.barColor);
        $scope.changeShape = function(name) {
      //     var getRandomColor = function () {
      //      return {
      //            color: '#' + Math.floor(Math.random()*16777215).toString(16)
      //        }
      //  };
            $scope.name = name;
            $scope.dragShape = [];
            $scope.barGraphShape = [];
            $scope.userShape = [];
            var arr;
            $scope.drag_shape = 0;
            $scope.Reset = function() {
                $scope.changeShape($scope.name);
            }
            if ($scope.name == shape_check) {
                arr = getUniqueShape($scope.barShape.length);
                $scope.userShape = arr;
                for (i in $scope.barShape) {
                    var random = randomIntFromInterval(0, 3);
                    $scope.dragShape.push($scope.userShape[random]);
                }
            }
            if ($scope.name == color_check) {
                arr = getUniqueColor($scope.barColor.length);
                $scope.userShape = arr;
                  for (i in $scope.barShape) {
               var random = randomIntFromInterval(0, 3);
        // if ($scope.barShape[i].color == $scope.userShape[random].color)
            $scope.dragShape.push($scope.userShape[random]);
    }
    // if ($scope.dragShape.length == 20) {
    //     break;
    // }
  }
            function randomIntFromInterval(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            $scope.droppedObjects1 = [];
            $scope.totalShapeCount = 0;
            $scope.barDragCount_1 = 0;
            $scope.barDragCount_2 = 0;
            $scope.barDragCount_3 = 0;
            $scope.barDragCount_4 = 0;
            $scope.onDropComplete = function(id, color, data, evt) {
                for (i in $scope.userShape) {
                    $scope.barGraphShape.push({
                        'id': $scope.userShape[i].id,
                        'color': $scope.userShape[i].color
                    })
                }
                if ($scope.name == shape_check) {
                    if (id == data.id && id == $scope.barGraphShape[0].id) {
                      $scope.dropped_objects(data);
                        $scope.barDragCount_1++;
                    }
                    if (id == data.id && id == $scope.barGraphShape[1].id) {
                      $scope.dropped_objects(data);
                        $scope.barDragCount_2++;
                    }
                    if (id == data.id && id == $scope.barGraphShape[2].id) {
                      $scope.dropped_objects(data);
                        $scope.barDragCount_3++;
                    }
                    if (id == data.id && id == $scope.barGraphShape[3].id) {
                      $scope.dropped_objects(data);
                        $scope.barDragCount_4++;
                    }
                    $scope.totalShapeCount = $scope.barDragCount_1 + $scope.barDragCount_2 + $scope.barDragCount_3 + $scope.barDragCount_4;
                }
                if ($scope.name == color_check) {
                    if (color == data.color && color == $scope.barGraphShape[0].color) {
                      $scope.dropped_objects(data);
                        $scope.barDragCount_1++;
                    }
                    if (color == data.color && color == $scope.barGraphShape[1].color) {
                      $scope.dropped_objects(data);
                        $scope.barDragCount_2++;
                    }
                    if (color == data.color && color == $scope.barGraphShape[2].color) {
                                  $scope.dropped_objects(data);
                        $scope.barDragCount_3++;
                    }
                    if (color == data.color && color == $scope.barGraphShape[3].color) {
                      $scope.dropped_objects(data);
                        $scope.barDragCount_4++;
                    }
                           $scope.totalShapeCount = $scope.barDragCount_1 + $scope.barDragCount_2 + $scope.barDragCount_3 + $scope.barDragCount_4;
                }
            }
            function getUniqueShape(count) {
                var tmp = $scope.barShape.slice($scope.barShape);
                var ret = [];
                var flag = true;
                for (var i = 0; i < count; i++) {
                    var index = Math.floor(Math.random() * tmp.length);
                    var removed = tmp.splice(index, 1);
                    for (var j = 0; j < ret.length; j++) {
                        if (ret[j].color == removed[0].color) {
                            flag = false;
                            break;
                        } else {
                            flag = true;
                        }
                    }
                    if (flag) {
                        if (ret.length < 4) {
                            ret.push(removed[0]);
                        }
                    }
                }
                return ret;
            }
            function getUniqueColor(count) {
                var tmp = $scope.barColor.slice($scope.barColor);
                var ret = [];
                for (var i = 0; i < 4; i++) {
                    var index = Math.floor(Math.random() * tmp.length);
                    var removed = tmp.splice(index, 1);
                    ret.push(removed[0]);
                }
                return ret;
            }
        }
        $scope.changeShape(shape_check);
    });
    $scope.dropped_objects=function(data){
      $scope.droppedObjects1.push(data);
      var rmindex = $scope.dragShape.indexOf(data);
      $scope.dragShape.splice(rmindex, 1);
    }
};
var dragObj;

function down(event) {
    if(~event.target.className.search(/shapes/)) {
        dragObj = makeObj(event);
        dragObj.element.style.zIndex="100";
        document.addEventListener("mousemove", freeMovement, false);
    }
}

function freeMovement(event) {
    //Prevents redundantly adding the same event handler repeatedly
    if (typeof(dragObj.element.mouseup) == "undefined")
        document.addEventListener("mouseup", drop, false);

    dragObj.element.style.left = Math.max(dragObj.minBoundX, Math.min(event.clientX - dragObj.posX, dragObj.maxBoundX)) + "px";
    dragObj.element.style.top = Math.max(dragObj.minBoundY, Math.min(event.clientY - dragObj.posY, dragObj.maxBoundY)) + "px";
}

function drop() {
    dragObj.element.style.zIndex="1";

    document.removeEventListener("mousemove", freeMovement, false);
    document.removeEventListener("mouseup", drop, false);
}

function makeBoundlessObj(e) {
    var obj = new Object();
    obj.element = e;

    obj.boundX = e.parentNode.offsetWidth - e.offsetWidth;
    obj.boundY = e.parentNode.offsetHeight - e.offsetHeight;

    obj.posX = event.clientX - e.offsetLeft;
    obj.posY = event.clientY - e.offsetTop;

    return obj;
}

function makeObj(event) {
    var obj = new Object(),
    e = event.target; // just make it shorter because we use it everywhere

    obj.element = e;

    // parentNode is our bounding box
    // the minimum boundary is based on the top left corner of our container
    obj.minBoundX = e.parentNode.offsetLeft;
    obj.minBoundY = e.parentNode.offsetTop;

    // the maximum is the bottom right corner of the container
    // or.. the top left (x,y) + the height and width (h,y) - the size of the square
    obj.maxBoundX = obj.minBoundX + e.parentNode.offsetWidth - e.offsetWidth;
    obj.maxBoundY = obj.minBoundY + e.parentNode.offsetHeight - e.offsetHeight;


    obj.posX = event.clientX - e.offsetLeft;
    obj.posY = event.clientY - e.offsetTop;

    setHelperBoxPos(obj);

    return obj;
}

function setHelperBoxPos(obj) {
    var minBox = document.getElementById('min');
    minBox.style.left = obj.minBoundX + 'px';
    minBox.style.top = obj.minBoundY + 'px';

    var maxBox = document.getElementById('max');
    maxBox.style.left = obj.maxBoundX + 'px';
    maxBox.style.top = obj.maxBoundY + 'px';
}

document.addEventListener("mousedown", down, false);



// theme config
app.config(function($mdThemingProvider) {
    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
        .primaryPalette('customBlue', {
            'default': '500',
            'hue-1': '50'
        })
        .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});
