//* for all the input
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const submitButton = document.getElementById("btn");

//* target the span element for error message
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const submitError = document.getElementById("submit-error");

//* validating for contact name
contactName.addEventListener("keyup", (e) => {
  e.preventDefault();
  const validateName = contactName.value;

  //* regular expression to validate contact name(https://regex101.com/)
  const namePattern = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

  if (validateName.length === 0) {
    nameError.innerText = "Fullname is required";
  } else if (!namePattern.test(validateName)) {
    nameError.innerText = "Write fullname";
  } else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
});

//* validating for email
contactEmail.addEventListener("keyup", (e) => {
  e.preventDefault();
  const validateEmail = contactEmail.value;

  //* regular expression to validate email
  const emailPattern = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*\.[a-z]{2,4}$/;

  if (validateEmail.length === 0) {
    emailError.innerText = "Email is required";
  } else if (!emailPattern.test(validateEmail)) {
    emailError.innerText = "Enter a valid email";
  } else {
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
});
