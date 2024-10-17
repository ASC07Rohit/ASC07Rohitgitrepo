// function updateAgeValue(value) {
//     document.getElementById('ageValue').textContent = value;
// }

// function submitForm(event) {
//     event.preventDefault();


//     const formData = {
//         name : document.getElementById('name').value,
//         password : document.getElementById('password').value,
//         age : document.getElementById('ageslider').value,
//         beverage: [],
//         gender :document.querySelector('input[name="gender"]:checked')?.value,
//         meal: document.querySelector('input[name="meal]:checked')?.value,
//         payment : document.getElementById('payment').value,
//         address : document.getElementById('address').value,
//     };

//     if(document.getElementById('tea').checked){
//         formData.beverage.push('Tea');
//     }

//     if(document.getElementById('coffee').checked){
//         formData.beverage.push('Coffee');
//     }

//     // get existing data from local storage
//     let existingData = JSON.parse(localStorage.getItem('formDataList')) || [];
//     existingData.push(formData);

    
//     // save all the data in locat storage
//     localStorage.setItem('formDataList',JSON.stringify(existingData));
//     alert('form saved successfully');


//     // const form = event.target;

//     // if (form.checkValidity()) {
//     //     alert("Form Submitted Successfully");
//     // } else {
//     //     alert("please fill out all req fields.");
//     // }

//     // formData.reset();
//     updateAgeValue(25);

//     displayStoreData();


// }

// function displayStoreData(){
//     // JSON.parse() to convert text into a JavaScript object
//     const saveData = JSON.parse(localStorage.getItem('formDataList'));
//     const dataList = document.getElementById('dataList');
//     dataList.innerHTML = '';

//     if(saveData){
//         const formDataList = JSON.parse(saveData);
//         formDataList.forEach((data,index)=>{
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${index + 1}</td>
//                 <td>${data.name}</td>
//                 <td>${data.password}</td>
//                 <td>${data.age}</td>
//                 <td>${data.beverage.join(', ')}</td>
//                 <td>${data.gender}</td>
//                 <td>${data.meal}</td>
//                 <td>${data.payment}</td>
//                 <td>${data.address}</td>
//             `;
//             dataList.appendChild(row);
//         });

//         // document.getElementById('name').value = formDataList.name;
//         // document.getElementById('password').value = formDataList.password;
//         // document.getElementById('ageslider').value = formDataList.age;
//         // document.getElementById('ageValue').innerHTML = formDataList.age;
//         // formData.beverage.forEach(beverage =>{
//         //     if(beverage === 'Tea') document.getElementById('tea').checked = true;
//         //     if(beverage === 'Coffee') document.getElementById('coffee').checked = true;
//         // });

//         // if(formData.gender) document.querySelector(`input[name = "gender"][value = "${formDataList.gender}"]`).checked = true;
//         // if(formData.meal) document.querySelector(`input[name = "meal"][value = "${formDataList.meal}"]`).checked = true;

//         // document.getElementById('payment').value = formDataList.payment;
//         // document.getElementById('address').value = formDataList.address;
//     }
//     window.onload = loadData;
// }




const form = document.getElementById("reg-form");
const storedDataElement = document.getElementById("storedData"); // Element to display data in the table
const displayName = document.getElementById("displayName"); // Element to display dynamic name input
const displayPassword = document.getElementById("displayPassword"); // Element to display dynamic password input

// Function to display stored data
const displayStoredData = () => {
    storedDataElement.innerHTML = ""; // Clear previous entries
    const formData = JSON.parse(localStorage.getItem("formData")) || []; // Retrieve stored data

    // Loop through the stored data and create table rows
    formData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.password}</td>
        `;
        storedDataElement.appendChild(row); // Append the row to the table body
    });
};

// Display stored data on page load
displayStoredData();

// Update the dynamic display when typing in the input fields
document.getElementById("name").addEventListener("input", (e) => {
    displayName.textContent = e.target.value; // Update the dynamic name display
});

document.getElementById("password").addEventListener("input", (e) => {
    displayPassword.textContent = e.target.value; // Update the dynamic password display
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (name && password) {
        const formData = JSON.parse(localStorage.getItem("formData")) || []; // Retrieve existing data
        formData.push({ name, password }); // Add new entry
        localStorage.setItem("formData", JSON.stringify(formData)); // Save updated data
        displayStoredData(); // Update displayed data
        form.reset(); // Clear the form fields
        displayName.textContent = ""; // Clear dynamic display after submission
        displayPassword.textContent = ""; // Clear dynamic display after submission
    } else {
        alert("Please fill all fields."); // Alert if fields are empty
    }
});



