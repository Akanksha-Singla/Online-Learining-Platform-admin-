
// console.log("you can do it");
// const navElementItems = ["Dashboard ","Courses" , "Insturctors","Students" ,"Reports" ,"Settings"];

// const nav = document.createElement("nav");

// const navElement = navElementItems.map((element)=>{
//     const a = document.createElement("a");
//      a.setAttribute("href",`./${element}.html`);
//      a.innerText = element;
//      console.log(a); 
//   return a;
  
// })
// const navContainer = document.getElementById("navContainer")

//  nav.setAttribute("class","sidebar");
// nav.append(...navElement);
// navContainer.append(nav);


$(document).ready(function() {
  const navElementItems = ["Dashboard", "Courses", "Insturctors", "Students", "Reports", "Settings"];

  const $nav = $("<nav>").addClass("sidebar");

  const $navElements = navElementItems.map(function(element) {
      const $a = $("<a>").attr("href", `./${element}.html`).text(element);
      console.log($a);
      return $a;
  });

  $("#navContainer").append($nav.append($navElements));
});
