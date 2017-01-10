var app = angular.module("MyApp");
app.controller("ColorsController", function($scope, $http, $state) {
    $scope.Array = [];
    $http.get("data.json").then(function(response) {
        var result = response.data.images5;
        $scope.cr = response.data.images1;
        $scope.rect = response.data.images2;
        $scope.st = response.data.images3;
        $scope.tri = response.data.images4;
        for (i in result) {
            $scope.Array.push({
                'color': result[i].color,
                'img': result[i].img,
                'name': result[i].name
            })
        }
    })
    $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function() {
        $scope.centerAnchor = !$scope.centerAnchor
    }
    $scope.droppedObjects1 = [];
    $scope.droppedObjects2 = [];
    $scope.droppedObjects3 = [];
    $scope.droppedObjects4 = [];
    $scope.count = 0;
    /*Drag and Drop the Images*/
    $scope.onDropComplete1 = function(data, evt) {
        if (data.color == "red") {
            var index = $scope.droppedObjects1.indexOf(data);
            if (index == -1) {
                $scope.droppedObjects1.push(data);
                for (i in $scope.Array) {
                    if (data.name == $scope.Array[i].name) {
                        $scope.Array.splice(i, 1);
                        $scope.count++;
                    }
                    var canvas = document.getElementById('mycanvas');
                    var ctx = canvas.getContext('2d');
                    for (i = 0; i < $scope.count; i++) {
                        if ($scope.count < 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(5 + i * 14, 5);
                            ctx.lineTo(5 + i * 14, 50);
                            ctx.strokeStyle = "red";
                            ctx.stroke();
                        }
                        if ($scope.count == 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(5, 5);
                            ctx.lineTo(46, 50);
                            ctx.strokeStyle = "red";
                            ctx.stroke();
                        }
                        if ($scope.count > 5) {
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(70, 5);
                            ctx.lineTo(70, 50);
                            ctx.strokeStyle = "red";
                            ctx.stroke();
                        }
                    }
                }
            }
        }
    }
    $scope.count1 = 0;
    $scope.onDropComplete2 = function(data, evt) {
        if (data.color == "blue") {
            var index = $scope.droppedObjects2.indexOf(data);
            if (index == -1) {
                $scope.droppedObjects2.push(data);
                for (i in $scope.Array) {
                    if (data.name == $scope.Array[i].name) {
                        $scope.Array.splice(i, 1);
                        $scope.count1++;
                    }
                    var canvas = document.getElementById('mycanvas1');
                    var ctx = canvas.getContext('2d');
                    for (i = 0; i < $scope.count1; i++) {
                        if ($scope.count1 < 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(5 + i * 14, 5);
                            ctx.lineTo(5 + i * 14, 50);
                            ctx.strokeStyle = "blue";
                            ctx.stroke();
                        }
                        if ($scope.count1 == 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(5, 5);
                            ctx.lineTo(46, 50);
                            ctx.strokeStyle = "blue";
                            ctx.stroke();
                        }
                        if ($scope.count1 > 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(70, 5);
                            ctx.lineTo(70, 50);
                            ctx.strokeStyle = "blue";
                            ctx.stroke();
                        }
                    }
                }
            }
        }
    }
    $scope.count2 = 0;
    $scope.onDropComplete3 = function(data, evt) {

        if (data.color == "yellow") {
            var index = $scope.droppedObjects3.indexOf(data);
            if (index == -1) {
                $scope.droppedObjects3.push(data);
                for (i in $scope.Array) {
                    if (data.name == $scope.Array[i].name) {
                        $scope.Array.splice(i, 1);
                        $scope.count2++;
                    }
                    var canvas = document.getElementById('mycanvas2');
                    var ctx = canvas.getContext('2d');
                    for (i = 0; i < $scope.count2; i++) {
                        if ($scope.count2 < 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(5 + i * 14, 5);
                            ctx.lineTo(5 + i * 14, 50);
                            ctx.strokeStyle = "yellow";
                            ctx.stroke();
                        }
                        if ($scope.count2 == 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(5, 5);
                            ctx.lineTo(46, 50);
                            ctx.strokeStyle = "yellow";
                            ctx.stroke();
                        }
                        if ($scope.count2 > 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(70, 5);
                            ctx.lineTo(70, 50);
                            ctx.strokeStyle = "yellow";
                            ctx.stroke();
                        }
                    }
                }
            }
        }
    }
    $scope.count3 = 0;
    $scope.onDropComplete4 = function(data, evt) {

        if (data.color == "green") {
            var index = $scope.droppedObjects4.indexOf(data);
            if (index == -1) {
                $scope.droppedObjects4.push(data);
                for (i in $scope.Array) {
                    if (data.name == $scope.Array[i].name) {
                        $scope.Array.splice(i, 1);
                        $scope.count3++;
                    }
                    var canvas = document.getElementById('mycanvas3');
                    var ctx = canvas.getContext('2d');
                    for (i = 0; i < $scope.count3; i++) {
                        if ($scope.count3 < 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(5 + i * 14, 5);
                            ctx.lineTo(5 + i * 14, 50);
                            ctx.strokeStyle = "green";
                            ctx.stroke();
                        }
                        if ($scope.count3 == 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(5, 5);
                            ctx.lineTo(46, 50);
                            ctx.strokeStyle = "green";
                            ctx.stroke();
                        }
                        if ($scope.count3 > 5) {
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.moveTo(70, 5);
                            ctx.lineTo(70, 50);
                            ctx.strokeStyle = "green";
                            ctx.stroke();
                        }
                    }
                }
            }
        }
    }
});
