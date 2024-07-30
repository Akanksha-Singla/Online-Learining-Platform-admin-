$("<div>").addClass("card")

const cardElemets = ["Courses","Students" ,"Instructor","Reports"];

const $cardElement = cardElemets.map((ele)=>{
    $("<h1>").text(ele)

})