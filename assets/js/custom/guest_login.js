// Function to hide all elements with class 'patient-detail' (in case client logged in)
function hidePatientDetails() {
    // Select all elements with class 'patient-detail'
    var patientDetails = document.querySelectorAll('.patient-detail');
    
    // Loop through each element and hide it
    patientDetails.forEach(function(element) {
        element.style.display = 'none'; // Hide the element
    });
}

// Call the function when the document is ready (check if client is logged in as guest)
document.addEventListener('DOMContentLoaded', function() {
    // Check if 'guest=true' is in the URL query string
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('guest') && urlParams.get('guest') === 'false') {
        // If guest=true, hide patient details
        hidePatientDetails();
    }
});


// Handle URL parameters for logged in client
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const addPatient = getParameterByName('addPatient');
const clientName = getParameterByName('clientName');

if (addPatient === 'true') {
    document.querySelectorAll('.client-detail').forEach(element => {
        element.style.display = 'none';
    });

    if (clientName) {
        document.getElementById('greeting').innerText = `Welcome, ${clientName}!`;
    }
}