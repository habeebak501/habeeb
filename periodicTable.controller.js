(function() {
  'use strict';

  var app = angular.module('nextTools');
  app.controller('PeriodicTableController', PeriodicTableController);

  /** @ngInject */
  function PeriodicTableController($scope, $location, $http, $mdSidenav) {
    var vm = this;
    $scope.pageTitle = 'Periodic Table';
    $scope.btnDisabled=true;

    // sideNav For Legends
    $scope.openLeftMenu = function() {
      $mdSidenav('right').toggle();
    };
    $scope.goBack = function() {
      $location.path('/home')
    }
  //   window.onload = function() {
  //   document.getElementById('sample').className = 'disabledbutton';
  // };
      //  $('#sample').addClass('disabledbutton');
// document.getElementById('sample').className = 'disabledbutton';
// $(function() {
//   $('#sample').addClass('disabledbutton');
// });
// $( "#sample" ).addClass(function( index, currentClass ) {
//   var addedClass;
//   if ( currentClass === "otherNonMetals" ) {
//     addedClass = "disabledbutton";
//   }
//
//   return addedClass;
// });
var getJson=function(){
$http.get("data/periodicTable.json").then(function(response) {
$scope.elementAtoms = response.data.atoms;
})
}
           getJson();
$scope.metals = function(data, str) {
  console.log(str);
  for (var i in data) {
    $("#" + data[i].symbol).removeClass('enablebutton');
    $("#" + data[i].symbol).addClass('disabledbutton');
    switch (str) {
      case "metals":
        if (data[i].category == 'otherNonMetals') {
          $(function() {
            $("#" + data[i].symbol).removeClass('disabledbutton');
              $("#" + data[i].symbol).addClass('enablebutton');
          });
        }
        break;
      case "alkaliMetals":
        if (data[i].category == 'alkaliMetals') {
          $(function() {
            $("#" + data[i].symbol).removeClass('disabledbutton');
              $("#" + data[i].symbol).addClass('enablebutton');
          });
        }
        break;
      case "alcaliEarth":
        if (data[i].category == 'alkaliEarthMetals') {
          $(function() {
            $("#" + data[i].symbol).removeClass('disabledbutton');
            $("#" + data[i].symbol).addClass('enablebutton');
          });
        }
        break;
      case "lathanoids":
        if (data[i].category == 'lathanoids') {
          $(function() {
            $("#" + data[i].symbol).removeClass('disabledbutton');
              $("#" + data[i].symbol).addClass('enablebutton');
          });
        }
        break;
      case "actionoids":
        if (data[i].category == 'actionoids') {
          $(function() {
            $("#" + data[i].symbol).removeClass('disabledbutton');
              $("#" + data[i].symbol).addClass('enablebutton');
          });
        }
        break;
      case "methaliods":
        if (data[i].category == 'methaliods') {
          $(function() {
            $("#" + data[i].symbol).removeClass('disabledbutton');
              $("#" + data[i].symbol).addClass('enablebutton');
          });
        }
        break;
      case "halogens":
        if (data[i].category == 'halogens') {
          $(function() {
            $("#" + data[i].symbol).removeClass('disabledbutton');
              $("#" + data[i].symbol).addClass('enablebutton');
          });
        }
        break;
      case "nobleGases":
        if (data[i].category == 'nobleGases') {
          $(function() {
            $("#" + data[i].symbol).removeClass('disabledbutton');
              $("#" + data[i].symbol).addClass('enablebutton');
          });
        }
        break;
      case "transitionMetals":
        if (data[i].category == 'transitionMetals') {
          $(function() {
            $("#" + data[i].symbol).removeClass('disabledbutton');
              $("#" + data[i].symbol).addClass('enablebutton');
          });
        }
        break;
      case "postTransitionMetals":
        if (data[i].category == 'postTransitionMetals') {
          $(function() {
            $("#" + data[i].symbol).removeClass('disabledbutton');
              $("#" + data[i].symbol).addClass('enablebutton');
          });
        }
        break;
    }
  }
}
      $scope.showDetails = function(data) {
        // $scope.eleArrayConfig=[];
        //  $("#123").html( ' ');
        //  $("#456").html( ' ');
        //  $("#789").html( ' ');
        //  $("#501").html( ' ');
        $scope.atomicName = data.name;
        $scope.atomicNumber = data.atomicNumber;
        $scope.atomicSymbol = data.symbol;
        $scope.atomicBp = data.boilingPoint;
        $scope.atomicMp = data.meltingPoint;
        $scope.atomicDiscovery = data.discovery;
        $scope.atomicWeight = data.weight;
        $scope.atomicIonizationEnergy = data.ionizationEnergy;
        $scope.atomicDensity = data.density;
        var stringConfig = data.electronicConfiguration;
        $scope.atomicElectronConfiguration = stringConfig.replace(/,/g, " ");
              $scope.eleconfig=data.electronsArray;
              var element=data.electronsArray;
              console.log(element);
                console.log(Object.keys(element[0]));
                for(var i=1;i<=7;i++){
                      console.log("s: "+element[0][i][0].s);
                      if(element[0][i][0].s==1){
                        console.log("upperline");
                      }
                      if(element[0][i][0].s==2){
                        console.log("upperline");
                        console.log("lowerline");
                      }
              }
              for(var j=2;j<=7;j++){
                console.log("p: "+element[0][j][1].p);
                var check= true;
                var counter=0;
                var number=element[0][j][1].p;
                console.log("number:" +number);
                       for(var m=1;m<=number;m++ ){
                           if(check==true){
                             console.log(check);
                             if(counter<3){
                               console.log("upperline");
                               counter++;
                             }
                             else{
                               check= false;
                               console.log(check);
                               counter=0;
                             }
                           }
                            //  else{
                               if(check==false){
                                  console.log(check);
                               if(counter<3){
                                 console.log("lowerline");
                                 counter++;
                            //  }
                           }
                         }
              }
            }
                   for(var k=3;k<=6;k++){
                     console.log("d: "+element[0][k][2].d);
                     var check1= true;
                     var counter1=0;
                     var number=element[0][k][2].d;
                     console.log("number:" +number);
                            for(var m=1;m<=number;m++ ){
                                if(check1==true){
                                  console.log(check1);
                                  if(counter1<5){
                                    console.log("upperline");
                                    counter1++;
                                  }
                                  else{
                                    check1= false;
                                    console.log(check1);
                                    counter1=0;
                                  }
                                }
                                    if(check1==false){
                                       console.log(check1);
                                    if(counter1<5){
                                      console.log("lowerline");
                                      counter1++;
                                }
                              }
                   }
                   }
                for(var l=4;l<=5;l++){
                  console.log("f: "+element[0][l][3].f);
                }







      //         for(var i=0;i<$scope.eleconfig.length;i++){
      //                     var number=element[i].number;
      //                       var id=element[i].id;
      //                     console.log(number);
      //                     console.log(id);
      //                     var str=id.slice(1);
      //                     console.log(str);
      //                        switch(str){
      //                          case 's':
      //                          for(var j=1;j<=number;j++){
      //                              if(j%2==0){
      //                                console.log("lowerline");
      //                                  $("#123").append('&#65516;');
      //                              }
      //                               else{
      //                                 console.log("upperline");
      //                                 $("#123").append('&#65514;');
      //                               }
      //                             }
      //                             break;
      //                           case 'p':
      //                           for(var j=1;j<=number;j++){
      //                                   if(j>3){
      //                                     console.log("lowerline");
      //                                      $("#456").append( '&#65516;');
      //                                   }
      //                                   else{
      //                                     console.log("upperline");
      //                                       $("#456").append( '&#65514;');
      //                                   }
      //                                 }
      //                                   break;
      //                             case 'd':
      //                             for(var j=1;j<=number;j++){
      //                                    if(j>5){
      //                                        console.log("lowerline");
      //                                        $("#789").append( '&#65516;');
      //                                    }
      //                                    else{
      //                                      console.log("upperline");
      //                                        $("#789").append( '&#65514;');
      //                                    }
      //                                  }
      //                                    break;
      //                             case 'f':
      //                                     for(var j=1;j<=number;j++){
      //                                       if(j>7){
      //                                         console.log("lowerline");
      //                                         $("#501").append( '&#65516;');
      //                                       }
      //                                       else{
      //                                         console.log("upperline");
      //                                          $("#501").append( '&#65514;');
      //                                       }
      //                                     }
      //                                     break;
      //
      //
      //       }
      // }
    }
  }
  })();
