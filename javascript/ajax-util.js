Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@MS8080 
siddartha19
/
Coursera-HTML-CSS-and-JavaScript-for-Web-Developers
Public
Code
Issues
Pull requests
6
Actions
Projects
Wiki
Security
Insights
Coursera-HTML-CSS-and-JavaScript-for-Web-Developers/Assignments/module-5/js/ajax-utils.js /
@siddartha19
siddartha19 Add files via upload
Latest commit dca8fae on 30 Dec 2018
 History
 1 contributor
67 lines (53 sloc)  1.48 KB
   
(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (window.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (window.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = 
      function() { 
        handleResponse(request, 
                       responseHandler,
                       isJsonResponse); 
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler,
                        isJsonResponse) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {

    // Default to isJsonResponse = true
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


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
