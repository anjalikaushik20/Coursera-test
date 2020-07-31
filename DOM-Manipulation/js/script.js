//DOM Manipulation
//DOM: Document Object Model

//Lecture 53 Part 1
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

//Add eventlistener to the document when the script tag is to be kept inside head
document.addEventListener("DOMContentLoaded",
  function (event) {
    console.log(event);
    //Lecture 53 Part 2
    //Lecture 54: Event Handling
    function sayHello() {
      this.textContent = "Said it!";
      var nm = document.getElementById("name").value;
      var msg = "<h2>Hello " + nm +" !</h2>";

      // document.getElementById("content").textContent = msg;

      document.getElementById("content").innerHTML = msg;

      if (nm === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & loving it!";

        // document.querySelector("#title").textContent = title;
        document.querySelector("h1").textContent = title;
      }
    }

    //Unobstrusive event binding
    document.querySelector("button").addEventListener("click", sayHello);

    // document.querySelector("button").onclick = sayHello;

    document.querySelector("body").addEventListener("mousemove",
      function(event){
        if (event.shiftKey === true) {
          console.log("X: " + event.clientX);
          console.log("Y: " + event.clientY);
        }
      }
    );

  }
);
