/**
 * Created by marco on 02/01/2015.
 */
'use strict';
angular.module('restFeApp')
  .factory('MainSrvc', function ($resource) {

    return $resource('http://localhost:18080/RestBE/webresources/rest/patient/:id',{id:'@_id'}, {
      getData: {
        method:'GET',
        isArray: false
      },
      postData: {
        method:'POST'
      }
    });
  });
