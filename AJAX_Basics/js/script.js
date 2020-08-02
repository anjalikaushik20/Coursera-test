//Event Handling

document.addEventListener("DOMContentLoaded",
  function (event) {

    //Unobtrusive event Binding
    document.querySelector("button").addEventListener("click", function () {
      var self = this;
      var name = "";

      //call server to get the same
      $ajaxUtils.sendGetRequest("/data/name.json",
        function (res) {
          var msg = res.firstName + " " + res.lastName
          if (res.likesBlueColor) {
            msg += "Likes Blue Color!";
          }
          else {
            msg += "Does not like Blue color";
          }

          msg += " and uses";
          msg += res.numberOfDisplays;
          msg += " displays for Coding.";

          document.querySelector("#content").innerHTML = "<h2" + msg + "</h2>";
          //var name = request.responseText;
          //console.log(self.name);
          //document.querySelector("#content").innerHTML = "<h2>Hello! " + name + "!</h2>";
        }
      );
    });
  }
);
