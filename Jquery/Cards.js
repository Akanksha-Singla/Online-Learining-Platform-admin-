
const cardContainer = $("#cardContainer");

const cardElemets = [{heading:"Courses",
    details:"Manage Course"
},
{heading:"products",
    details:"Manage products "
},
{heading:"Instructor",
    details:"Manage Instructor"
},
{heading:"Reports",
    details:"Manage Reports"
},
];


const cardElements = cardElemets.map((ele)=>{
    const card = $("<div>").addClass("card");
    const h1 =  $("<h1>").text(ele.heading);
    const p = $("<p>").text(ele.details);
    card.append(h1,p);
    return card;
})

cardContainer.append(cardElements);

const productDetails = [
    {
        productid: 101,
        name: "Javascript",
        payment: "due",
        status: "active"
    },
    {
        productid: 102,
        name: "Python",
        payment: "due",
        status: "active"
    },
    {
        productid: 103,
        name: "Web Development",
        payment: "due",
        status: "active"
    },
    {
        productid: 104,
        name: "Data Science",
        payment: "due",
        status: "active"
    },
    {
        productid: 105,
        name: "Java",
        payment: "due",
        status: "active"
    }
];

const $table = $("<table>");
const $thead = $("<thead>").append(
    $("<tr>").append(
        $("<th>").text("Product ID"),
        $("<th>").text("Name"),
        $("<th>").text("Payment"),
        $("<th>").text("Status")
    )
);

const $tbody = $("<tbody>");

$.each(productDetails, function(index, product) {
    const $row = $("<tr>").append(
        $("<td>").text(product.productid),
        $("<td>").text(product.name),
        $("<td>").text(product.payment),
        $("<td>").text(product.status)
    );
    $tbody.append($row);
});

$table.append($thead).append($tbody);
$(".tableContainer").append($table);


const asideCardElements = [
    { heading: "Recent Updates", details: "Latest news and updates about the platform." },
    { heading: "Sales Analytics", details: "Detailed analytics about sales and performance." }
];

const asideCardContainer = $("#asideCardContainer");

asideCardElements.forEach((ele) => {
    const card = $("<div>").addClass("card");
    const h1 = $("<h1>").text(ele.heading);
    const p = $("<p>").text(ele.details);
    card.append(h1, p);
    asideCardContainer.append(card);
});
