// guest_login.js

// Function to hide all elements with class 'patient-detail'
function hidePatientDetails() {
    // Select all elements with class 'patient-detail'
    var patientDetails = document.querySelectorAll('.patient-detail');
    
    // Loop through each element and hide it
    patientDetails.forEach(function(element) {
        element.style.display = 'none'; // Hide the element
    });
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Check if 'guest=true' is in the URL query string
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('guest') && urlParams.get('guest') === 'false') {
        // If guest=true, hide patient details
        hidePatientDetails();
    }
});
