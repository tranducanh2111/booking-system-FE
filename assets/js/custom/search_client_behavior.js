// Handle button clicks
document.getElementById('continueAsGuestBtn').addEventListener('click', function() {
    window.location.href = 'search_client.html'; // Redirect to search_client.html for sign in
});

document.getElementById('signInBtn').addEventListener('click', function() {
    window.location.href = 'search_client.html?guest=true'; // Redirect to search_client.html for guest
});