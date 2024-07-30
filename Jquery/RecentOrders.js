$(document).ready(function() {
    console.log("order")
    const productDetails = [
        {
            productid: 1,
            name: "Javascript",
            payment: due,
            status: "active"
        },
        {
            productid: 2,
            name: "Python",
            payment: due,
            status: "active"
        },
        {
            productid: 2,
            name: "Web Development",
            payment: due,
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
            $("<td>").text(student.productid),
            $("<td>").text(student.name),
            $("<td>").text(student.payment),
            $("<td>").text(student.status)
        );
        $tbody.append($row);
    });

    $table.append($thead).append($tbody);
    $(".tableContainer").append($table);
});

