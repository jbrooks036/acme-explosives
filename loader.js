// this module loads the categories, types and products from their respective JSON files
// into their respective arrays, when a choice is selected from the menu  

var explosives = (function (explosives) {

  var categoriesArray = [];


  explosives.loadCategories = function (callback) {
    var categoriesLoader = XMLHttpRequest();

    categoriesLoader.addEventListener("load", function () {

      categoriesArray = JSON.parse(this.responseText).categories;

      console.log("categoriesArray = ", categoriesArray);
      callback(categoriesArray);
  
    });

    categoriesLoader.open("GET", "categories.json");
    categoriesLoader.send();
  };

  return explosives;

}) (explosives || {});
