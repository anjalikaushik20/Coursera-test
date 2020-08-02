//AJAX Basics
(
  function (global) {

    //setup a namespace for our utility
    var ajaxUtils = {};

    //Returns an HTTP request object
    function getRequestObject() {
      if (window.XMLHttpRequest) {
        return (new XMLHttpRequest());
      }
      else if (window.ActiveXObject) {
        return (new ActiveXObject("Microsoft.XMLHttpRequest"));
      }
      else {
        global.alert("AJAX is not supported!");
        return(null);
      }
    }

    //Makes an AJAX GET request to 'requestUrl'
    ajaxUtils.sendGetRequest =
    function (requestUrl, responseHandler, isJsonResponse) {
      var request = getRequestObject();
      request.onreadystatechanged =
      function () {
        handleResponse(request, responseHandler, isJsonResponse);
      };
      request.open("GET", requestUrl, true); //if 'false' is used this will become synchronous
      request.send(null); //for POST Only
    };

    function handleResponse(request, responseHandler, isJsonResponse) {
      if ((request.readyState == 4) && (request.status == 200)) {
        //responseHandler(request); without isJsonResponse
        if (isJsonResponse == undefined) {
          isJsonResponse = true;
        }

        if (isJsonResponse) {
          responseHandler(JSON.parse(request.responseText));
        }
        else {
          responseHandler(request.responseText);
        }
      }
    }

    //expose utility to the global getRequestObject
    global.$ajaxUtils = ajaxUtils;
  }
)(window);
