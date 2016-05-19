console.log("main.js running!");

// var menuChoice = document.getElementById("category-menu");

$(document).ready(function () {
  var menuChoice = $("#category-menu");
  console.log("menuChoice = ", menuChoice);

  $.ajax({
    url: "data/categories.json"
  }).done(function(categoriesObject){
    console.log("categoriesObject after ajax call = ", categoriesObject);
    var categories = categoriesObject.categories;
    console.log("categories after ajax call = ", categories);
  });
});

