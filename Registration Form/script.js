const form = document.getElementById("reg-form");
const storedDataElement = document.getElementById("storedData"); // Element to display data in the table
const displayName = document.getElementById("displayName"); // Element to display dynamic name input
const displayPassword = document.getElementById("displayPassword");
const displayPayment = document.getElementById("displayPayment");
const displayGender = document.getElementById("displayGender");
const displayAddress = document.getElementById("displayAddress");

// Function to display stored data
const displayStoredData = () => {
  storedDataElement.innerHTML = "";
  const formData = JSON.parse(localStorage.getItem("formData")) || [];

  formData.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.password}</td>
            <td>${entry.gender}</td>
            <td>${entry.payment}</td>
            <td>${entry.address}</td>
            
        `;
    storedDataElement.appendChild(row);
  });
};

displayStoredData();

document.getElementById("name").addEventListener("input", (e) => {
  displayName.textContent = e.target.value;
});

document.getElementById("password").addEventListener("input", (e) => {
  displayPassword.textContent = e.target.value;
});

const genderInputs = document.querySelectorAll('input[name="gender"]');
genderInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    displayGender.textContent = e.target.value;
  });
});

document.getElementById("payment").addEventListener("input", (e) => {
  displayPayment.textContent = e.target.value;
});

document.getElementById("address").addEventListener("input", (e) => {
  displayAddress.textContent = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const payment = document.getElementById("payment").value;
  const address = document.getElementById("address").value;

  if (name && password && gender && payment && address) {
    const formData = JSON.parse(localStorage.getItem("formData")) || [];
    formData.push({ name, password, gender, payment, address });
    localStorage.setItem("formData", JSON.stringify(formData));
    displayStoredData();
    form.reset();
    displayName.textContent = "";
    displayPassword.textContent = "";
    displayGender.textContent = "";
    displayPayment.textContent = "";
    displayAddress.textContent = "";
  } else {
    alert("Please fill all fields.");
  }
});
