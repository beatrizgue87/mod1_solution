(function() {

    'use strict'

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LuCheControl);

    LuCheControl.$inject = ['$scope'];

    function LuCheControl($scope) {

        $scope.items = "";
        $scope.message = "";
        $scope.colors = "";
        $scope.borders = "";

        $scope.itemsCounter = function() {

            var array = $scope.items.split(',');            
            var arrayLength = array.length;
            console.log(array);
            console.log(arrayLength);


            if ($scope.items == ""){

            	$scope.message = "Please enter data first";
                $scope.colors = "red";
                $scope.borders = "red";

            } 
            
        else{
          
          var j = 0;
          for (var i = 0; i < array.length; i++) {

              if (array[i] != 0){
                j++;
              }
          }
                          

            if(j <= 3) {

                $scope.message = "Enjoy!";
                $scope.colors = "#43A047";
                $scope.borders = "#43A047";

            } else {

                $scope.message = "Too Much!";
                $scope.colors = "#43A047";
                $scope.borders = "#43A047";

            }
        }

        };

    };


})();
