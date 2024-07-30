$(document).ready(function() {
    const studentsEnrolled = [
        {
            id: 1,
            name: "Ram",
            email: "Ram.shyam@example.com",
            enrolledCourses: "Introduction to Python"
        },
        {
            id: 2,
            name: "Mohini",
            email: "Mohini.shyam@example.com",
            enrolledCourses: "Introduction to Python"
        },
        {
            id: 3,
            name: "Radha",
            email: "Radha.shyam@example.com",
            enrolledCourses: "Web Development"
        }
    ];

    const $table = $("<table>");
    const $thead = $("<thead>").append(
        $("<tr>").append(
            $("<th>").text("ID"),
            $("<th>").text("Name"),
            $("<th>").text("Email"),
            $("<th>").text("Enrolled Courses")
        )
    );

    const $tbody = $("<tbody>");

    $.each(studentsEnrolled, function(index, student) {
        const $row = $("<tr>").append(
            $("<td>").text(student.id),
            $("<td>").text(student.name),
            $("<td>").text(student.email),
            $("<td>").text(student.enrolledCourses)
        );
        $tbody.append($row);
    });

    $table.append($thead).append($tbody);
    $(".tableContainer").append($table);
});

