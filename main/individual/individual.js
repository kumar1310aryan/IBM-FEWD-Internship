document.addEventListener('DOMContentLoaded', function () {
    // Sample data for recent donations and pending requests
    const recentDonations = [
        { id: 1, eventName: 'Birthday Party', donationDate: '2024-07-24', quantity: '20 servings', foodType: 'Vegetarian' },
        { id: 2, eventName: 'Wedding Reception', donationDate: '2024-07-23', quantity: '50 servings', foodType: 'Non-Vegetarian' }
    ];

    const pendingRequests = [
        { id: 1, requestDate: '2024-07-25', organization: 'Local Shelter', description: 'Need for 100 meals' },
        { id: 2, requestDate: '2024-07-26', organization: 'Community Center', description: 'Need for prepared meals' }
    ];

    const recentDonationsContainer = document.getElementById('recent-donations');
    const pendingRequestsContainer = document.getElementById('pending-requests');

    // Populate recent donations
    recentDonations.forEach(donation => {
        const donationElement = document.createElement('div');
        donationElement.classList.add('card');
        donationElement.innerHTML = `<p>Event: ${donation.eventName}</p><p>Date: ${donation.donationDate}</p><p>Quantity: ${donation.quantity}</p><p>Type: ${donation.foodType}</p>`;
        recentDonationsContainer.appendChild(donationElement);
    });

    // Populate pending requests
    pendingRequests.forEach(request => {
        const requestElement = document.createElement('div');
        requestElement.classList.add('card');
        requestElement.innerHTML = `<p>Date: ${request.requestDate}</p><p>Organization: ${request.organization}</p><p>Description: ${request.description}</p>`;
        pendingRequestsContainer.appendChild(requestElement);
    });

    // Handle form submission
    const form = document.getElementById('donation-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Logic to handle form submission goes here
        alert('Thank you for your donation!');
        form.reset(); // Reset the form fields
    });
});
