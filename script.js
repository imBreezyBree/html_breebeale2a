window.onload = function() {
  function toggleContent(content, button) {
    if (content.className == "open") {
      content.className = "";
      button.innerHTML = "Show More";
    } else {
      content.className = "open";
      button.innerHTML = "Show Less";
    }
  }

  var content1 = document.getElementById("content");
  var button1 = document.getElementById("show-more");
  button1.addEventListener("click", function() {
    toggleContent(content1, button1);
  });

  var content2 = document.getElementById("content2");
  var button2 = document.getElementById("show-more2");
  button2.addEventListener("click", function() {
    toggleContent(content2, button2);
  });

  var content3 = document.getElementById("content3");
  var button3 = document.getElementById("show-more3");
  button3.addEventListener("click", function() {
    toggleContent(content3, button3);
  });

  var content4 = document.getElementById("content4");
  var button4 = document.getElementById("show-more4");
  button4.addEventListener("click", function() {
    toggleContent(content4, button4);
  });
};
