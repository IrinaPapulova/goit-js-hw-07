 
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
 
categories.forEach(function (category, index) {
  const h2 = category.querySelector("h2");
  const elements = category.querySelectorAll("li");
   console.log(`Category: ${h2.textContent}`);
  console.log(`Elements: ${elements.length}`);
});


