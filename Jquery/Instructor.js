$(document).ready(function() {
    const instructorsEnrolled = [
        {
            id: 1,
            name: "Teacher 1",
            email: "Teacher1.shyam@example.com",
            Courses: "Introduction to Python"
        },
        {
            id: 2,
            name: "Teacher 2",
            email: "Teacher2.shyam@example.com",
            Courses: "Data Science"
        },
        {
            id: 3,
            name: "Teacher 3",
            email: "Teacher3.shyam@example.com",
            Courses: "Web Development"
        }
    ];

    const $table = $("<table>");
    const $thead = $("<thead>").append(
        $("<tr>").append(
            $("<th>").text("ID"),
            $("<th>").text("Name"),
            $("<th>").text("Email"),
            $("<th>").text(" Courses")
        )
    );

    const $tbody = $("<tbody>");

    $.each(instructorsEnrolled, function(index, instructor) {
        const $row = $("<tr>").append(
            $("<td>").text(instructor.id),
            $("<td>").text(instructor.name),
            $("<td>").text(instructor.email),
            $("<td>").text(instructor.Courses)
        );
        $tbody.append($row);
    });

    $table.append($thead).append($tbody);
    $(".tableContainer").append($table);
});

