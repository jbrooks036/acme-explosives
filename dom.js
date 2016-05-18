console.log("dom.js running!");

// var menuChoice = document.getElementById("category-menu");

$(document).ready(function () {
  var menuChoice = $("#category-menu");
  console.log("menuChoice = ", menuChoice);

  $.ajax({
    url: "categories.json"
  }).done(function(categories){
    console.log("categories after ajax call = ", categories);
  });
});

