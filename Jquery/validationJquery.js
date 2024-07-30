$(document).ready(function() {
    // const $siteNameNode = $("#siteName");
    // const $adminEmailNode = $("#adminEmail");
    // const $passwordNode = $("#password");
    // const $error1 = $("#error1");
    // const $error2 = $("#error2");
    // const $error3 = $("#error3");

    $("#siteName").on("blur", validate1);

    function validate1() {
        const siteName = $("#siteName").val();
        const pattern = /^[A-Za-z]*$/;

        if (siteName === "") {
            $("#error1").text("Site Name Required");
            return false;
        } else if (siteName.length < 2) {
            $("#error1").text("Please enter a valid name");
            return false;
        } else if (!pattern.test(siteName)) {
            $("#error1").text("Please enter valid characters");
            return false;
        } else {
            $("#error1").text("");
            return true;
        }
    }

    $("#adminEmail").on("blur", validate2);

    function validate2() {
        const adminEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const adminEmail =  $("#adminEmail").val();
        if (adminEmail === "") {
            $("#error2").text("Admin Email Required");
            return false;
        } else if (!adminEmailPattern.test(adminEmail)) {
            $("#error2").text("Enter a valid Admin Email");
            return false;
        } else {
            $("#error2").text("");
            return true;
        }
    }

    $("#password").on("blur", validate3);

    function validate3() {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{6,12}$/;
        const password = $("#password").val();
        if (password === "") {
            $("#error3").text("Password Required");
            return false;
        } else if (!passwordPattern.test(password)) {
            $("#error3").text("Please enter a valid password");
            return false;
        } else {
            $("#error3").text("");
            return true;
        }
    }

    $("#formElement").submit(() => validateAll() );

    function validateAll() {
        return validate1() && validate2() && validate3();
    }
});
