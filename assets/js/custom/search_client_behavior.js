// Handle button clicks for sign in and continue as guest
document.getElementById('signInBtn').addEventListener('click', function() {
    window.location.href = 'search_client.html?guest=false'; // Redirect to search_client.html for sign in
});

document.getElementById('continueAsGuestBtn').addEventListener('click', function() {
    window.location.href = 'search_client.html?guest=true'; // Redirect to search_client.html for guest
});

