class Course {
    constructor(name, id, price, discount, duration) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.discount = discount;
        this.duration = duration;
    }

    calculateFinalPrice() {
        return this.price - (this.price * this.discount / 100);
    }

    displayCourseDetails() {
        console.log(`Course Name: ${this.name}`);
        console.log(`Course ID: ${this.id}`);
        console.log(`Price: $${this.price}`);
        console.log(`Discount: ${this.discount}%`);
        console.log(`Duration: ${this.duration}`);
        console.log(`Final Price: $${this.calculateFinalPrice()}`);
    }
}

let courses = [
    new Course("Introduction to JavaScript", "JS101", 100, 20, "4 weeks"),
    new Course("Advanced Python", "PY201", 200, 15, "8 weeks")
];

const flexContainer = document.createElement("div");

// Appling CSS properties to the flex container
flexContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f8f9fa;
    padding: 20px;
    box-sizing: border-box;
`;

courses.forEach((course) => {
    const courseCard = document.createElement("div");

    // Set styles for the course card
    courseCard.style.cssText = `
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 500px;
`;
    const courseName = document.createElement("h1");
    courseName.innerText = course.name;
    courseName.style.margin = "10px 0";

    const courseId = document.createElement("p");
    courseId.innerText = `ID: ${course.id}`;
    courseId.style.margin = "5px 0";

    const coursePrice = document.createElement("p");
    coursePrice.innerText = `Price: $${course.price}`;
    coursePrice.style.margin = "5px 0";

    const courseDiscount = document.createElement("p");
    courseDiscount.innerText = `Discount: ${course.discount}%`;
    courseDiscount.style.margin = "5px 0";

    const courseDuration = document.createElement("p");
    courseDuration.innerText = `Duration: ${course.duration}`;
    courseDuration.style.margin = "5px 0";

    const courseFinalPrice = document.createElement("p");
    courseFinalPrice.innerText = `Final Price: $${course.calculateFinalPrice()}`;
    courseFinalPrice.style.margin = "5px 0";
    courseFinalPrice.style.fontWeight = "bold";

    // Append all elements to the course card
    courseCard.appendChild(courseName);
    courseCard.appendChild(courseId);
    courseCard.appendChild(coursePrice);
    courseCard.appendChild(courseDiscount);
    courseCard.appendChild(courseDuration);
    courseCard.appendChild(courseFinalPrice);

    // Append the course card to the flex container
    flexContainer.appendChild(courseCard);
});

// Append the flex container to the body
const courseContainer = document.getElementById("courseContainer")
courseContainer.appendChild(flexContainer);

console.log(courses);
