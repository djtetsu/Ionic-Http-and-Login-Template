
//window.localStorage["session_id"] = '2108e-b416-475b-80a3-73f80e020122';
angular.module('starter.services' )




    .service('ItemsSrvc', function($http, $q, $state){

        this.getItems = function(){


            //servers will not be able to return the data to here (protected from cross scripting)
            //to see how they should work you CAN visit
            //http://workspace.mobilewebsites.la/output.php
            //http://workspace.mobilewebsites.la/output.php?show=error

            gotoUrl = servernameOrig + '/output.php';



            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: gotoUrl
            }).then(function successCallback(response) {
                    console.log(response);
                    var str = ' ' + response;
                    if ( str.indexOf( 'Error') > 0) {

                        deferred.reject(response);

                    } else {

                        deferred.resolve(response.data.records);

                    }
                }, function errorCallback(response) {
                    console.log(response);
                    deferred.reject('There was a connection error');
                });

            return deferred.promise;

        }


    })



;//angular.module

