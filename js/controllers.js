
angular.module('starter.controllers', ['ngSanitize'])

    .controller("LoginCtrl", ["$scope",  "$ionicPopup", "$state",   "$timeout", "$http",
        function($scope,    $ionicPopup, $state, $timeout,   $http  ) {

            $scope.data = {};

            $scope.login = function() {

                $state.go( 'tab.edit', {}, { reload : true } )



            }
        }
    ])

    .controller('RegisterCtrl', function($scope, registerService){

    })

    .controller("tabsCtrl", ["$scope",   '$sce','$state' ,
    function($scope,   $sce, $state) {

            $scope.signout = function() {


                $state.go( 'login', {}, { reload : true } )

            }

        }
    ])


    .controller('EditCtrl', function($scope, ItemsSrvc,  $ionicPopup){

        //optional assign to a button with same verb
        //$scope.edit = function(){
        ItemsSrvc.getItems()
            .then(function(data){
                $scope.itemsData = data;


            }, function(response){
                $ionicPopup.alert({
                    title: 'Oops!',
                    template: response
                })
            });
        //}
    })


;//angular.module

