const siteNameNode  = document.getElementById("siteName");
const  adminEmailNode = document.getElementById("adminEmail");
const passwordNode = document.getElementById("password");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");


siteNameNode.addEventListener("blur", () => validate1());

const validate1 = function () {
  const siteName = siteNameNode.value;
  const pattern = "[A-Za-z]*";

  if (siteName == "") {
    error1.textContent = "Site Name Required";
    return false;
  } else if (siteName.length < 2) {
    error1.textContent = "please enter valid name";
    return false;
  } else if (!siteName.match(pattern)) {
    error1.textContent = "please enter valid characters";
    return false;
  } else {
    error1.textContent = "";
    return true;
  }
  console.log(siteName);
};

adminEmailNode.addEventListener("blur", () => validate2());
const validate2 = function () {
  const adminEmailPattern ="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$"
  const adminEmail = adminEmailNode.value;
  if (adminEmail == "") {
    error2.textContent = "adminEmail Required";
    return false;
  } else if (!adminEmail.match(adminEmailPattern)) {
    error2.textContent = "enter valid adminEmail";
    return false;
  } else {
    error2.textContent = "";
    return true;
  }
  console.log(adminEmail);
};

passwordNode.addEventListener("blur", () => validate3());
const validate3 = function () {
  const passwordPattern =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{6,12}$";
  const regExp = RegExp(passwordPattern);

  const password = passwordNode.value;
  if (password == "") {
    error3.textContent = "password Required";
    return false;
  }
  //password.match(passwordPatterb)
  else if (!regExp.test(password)) {
    error3.textContent = "please enter valid password";
    return false;
  } else {
    error3.textContent = "";
    return true;
  }
  console.log(password);
};

function validateAll() {
    
  return (
    validate1() && validate2() && validate3() 
  );
}
