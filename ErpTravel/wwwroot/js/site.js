// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.getElementById("travelForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    // Collect form data
    const formData = {
        destination: document.getElementById("destination").value,
        priceRange: document.getElementById("priceRange").value,
        vehicle: document.getElementById("vehicle").value,
        roomType: document.getElementById("roomType").value,
        extraBed: document.getElementById("extraBed").value,
        numberPeople: document.getElementById("numberPeople").value
    };

    // You can now send this data to the backend via an API call
    console.log("Form Data Submitted: ", formData);

    // Example API call
    // fetch('/api/travelDetails', {
    //    method: 'POST',
    //    headers: { 'Content-Type': 'application/json' },
    //    body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => console.log(data));
});
