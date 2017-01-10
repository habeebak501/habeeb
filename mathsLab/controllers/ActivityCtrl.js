/*Creating a Module of ScienceLab*/
var app = angular.module("MyApp");
/*Defining the Controller of Properties of Magnets*/
app.controller("ActivityController", function($scope, $http, $rootScope) {
    $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function() {
    $scope.centerAnchor = !$scope.centerAnchor
    }
    $scope.droppedObjects1 = [];
    /*Drag and Drop the Images*/
    $scope.onDropComplete1 = function(data, evt) {
        $scope.data = data;
        document.getElementById("btn").disabled = false;
        document.getElementById("btn1").disabled = false;
        document.getElementById("btn2").disabled = false;
        var index = $scope.droppedObjects1.indexOf(data);
        $scope.droppedObjects1 = [];
        if (index == -1)
        $scope.droppedObjects1.push(data);
    }
    $scope.states = [' ','magents', 'non Magnets', 'magnetic Substance'];
    $scope.currentState = ' ';
       console.log($scope.currentState);
    var q = document.getElementById("que1");
    $scope.submit = function(event, data) {
    $scope.isDisabled = false;
    var q = document.getElementById("que1");
    if (event == 'magents' && data.title == 'bar 1 is') {
            q.style.display = "block";
            document.getElementById("btn6").disabled = true;
        } else if(event=='magnetic Substance' && data.title == 'bar 2 is' ){
            q.style.display = "block";
          }
          else if(event=='non Magnets'&& data.title =='bar 3 is'){
            q.style.display = "block";
          }
          else{
             var q = document.getElementById("que2");
             q.style.display = "block";
             document.getElementById("btn6").disabled = true;
             document.getElementById("btn4").disabled = false;
             document.getElementById("btn5").disabled = false;
        }
    }
/*Getting the Data from Json using restApi*/
    $http.get("queAns.json").then(function(data) {
           console.log(data);
            $scope.text = data.data.questions;
            $scope.imgs = data.data.images;
            $scope.img1 = data.data.images1;
            $scope.Quiz=data.data.quiz;
            console.log($scope.Quiz);
        })
        /*Refresh the Image Container*/
    $scope.Refresh = function() {
            $scope.droppedObjects1 = [];
            $scope.count='';
            document.getElementById("btn").disabled = true;
            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = true;
            document.getElementById("btn3").disabled = true;
            var img = document.getElementById('sub1');
            img.removeAttribute("class");
            img.style.left =  0;
            img.style.backgroundColor = "#CCCCCC";
        }
        /*Reset Models and Selection box*/
    $scope.TryAgain = function() {
            $scope.currentState = '';
            document.getElementById("btn").disabled = true;
            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = true;
            document.getElementById("btn6").disabled = false;
            document.getElementById("btn5").disabled = true;
            document.getElementById("btn4").disabled = true;
            var Q = document.getElementById('que2');
            Q.style.display = "none";
        }
        /*Selection box*/
    $scope.Question = function(data) {
            $scope.element = data.title;
            document.getElementById("btn").disabled = true;
            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = true;
            document.getElementById("btn3").disabled = true;
            var Q = document.getElementById('Que');
            Q.style.display = "block";
        }
        /*Rotating the Image*/
    $scope.Flip = function(data) {
            console.log(data);
            var max = 0;
            $scope.count = max + 1;
            console.log($scope.count);
            console.log("rotate");
            var img = document.getElementById('sub1');
            console.log(img);
            img.setAttribute("class", "rotated-image");
        }
        /*Animating the Image*/
    $scope.Animate = function(count, data) {
        console.log(count);
        console.log((10/100)*window.innerWidth);
        console.log(data.name);
        document.getElementById("btn").disabled = false;
        document.getElementById("btn3").disabled = false;
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
        var element = document.getElementById('sub1');
        var R = (10/100)*window.innerWidth;
        if (count == 1 && data.name == 'magnets') {
            element.style.left = R + 'px' ;
            element.style.backgroundColor = "#FFFFFF";
        } else if (count == 1 && data.name == 'megnetic substance') {
            element.style.left = -R + 'px';
        } else if (count == 1 && data.name == 'non magnets') {
            var R = 0;
            element.style.left = R + 'px';
            element.style.backgroundColor = "#CCCCCC";
        } else if (count == 0 && data.name == 'magnets') {
            element.style.left = -R + 'px';
            element.style.backgroundColor = "#FFFFFF";
        } else if (count == 0 && data.name == 'non magnets') {
            var R = 0;
            element.style.left = R + 'px';
            element.style.backgroundColor = "#CCCCCC";
        } else {
            element.style.left = -R + 'px';
            element.style.backgroundColor = "#FFFFFF";
        }
    }
    /*Showing the Answer on SelectionBox*/
    $scope.ShowAnswer=function(data){
      document.getElementById("btn4").disabled =true;
      document.getElementById("btn5").disabled = false;
          $scope.currentState='';
          $scope.answer =data.name;
          console.log($scope.currentState);
          var Q = document.getElementById('que2');
          Q.style.display = "none";
    }
})
