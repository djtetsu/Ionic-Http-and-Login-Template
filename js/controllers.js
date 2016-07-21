
//window.localStorage["session_id"] = '2108e-b416-475b-80a3-73f80e020122';
angular.module('starter.controllers', ['ngSanitize','firebase'])

    .controller("LoginCtrl", ["$scope",  "$ionicPopup", "$state",   "$timeout", "$http",
        function($scope,   $ionicPopup, $state, $timeout,   $http  ) {


            $scope.login = function() {
                //alert(username);
                //alert(password);

               //alert('here111');
                $state.go( 'tab.edit', {}, { reload : true } )


            }


        }
    ])


//------------------------------------------------------------------

    .controller("tabsCtrl", ["$scope",   '$sce','$state' ,
        function($scope,   $sce, $state) {


            $scope.signout = function() {

                $state.go( 'login', {}, { reload : true } )

            }

        }
    ])

//------------------------------------------------------------------

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

//------------------------------------------------------------------



;//angular.module

