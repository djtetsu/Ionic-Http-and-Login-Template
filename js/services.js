
angular.module('starter.services', [])


    .service('ItemsSrvc', function($http, $q, $state){

        this.getItems = function(){


            //gotoUrl = 'http://workspace.mobilewebsites.la/output.php';
            //in app.js we declare servername as 'http://workspace.mobilewebsites.la'
            //unfortunately to prevent cross-scripting attacks this won't work unless from that domain
            //but to see what tho output looks like visit
            // http://workspace.mobilewebsites.la/output.php

            gotoUrl = servername + '/output.php';


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


