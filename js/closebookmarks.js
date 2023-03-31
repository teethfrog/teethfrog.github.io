const topElement = document.getElementById("top");
const bookmarkCategories = document.querySelectorAll(".bookmarkcategory");
const bookmarks = document.getElementById("bookmarks");


topElement.addEventListener("click", function() {

if(bookmarkCategories[0].style.height === "23em") {
    bookmarkCategories.forEach(function(bookmarkCategory) {
      bookmarkCategory.style.height = "0em";
      bookmarks.style.visibility = "hidden";
    });
  } else {  
    bookmarkCategories.forEach(function(bookmarkCategory) {
      bookmarkCategory.style.height = "23em";
      bookmarks.style.visibility = "visible";
    });
}
});