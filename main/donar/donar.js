document.addEventListener('DOMContentLoaded', function () {
    // Sample data for recent donations and pending requests
    const recentDonations = [
        { id: 1, donationDate: '2024-07-24', quantity: '50 meals', type: 'Food' },
        { id: 2, donationDate: '2024-07-23', quantity: '30 meals', type: 'Food' }
    ];

    const pendingRequests = [
        { id: 1, requestDate: '2024-07-25', organization: 'Food Bank', description: 'Need for 100 meals' },
        { id: 2, requestDate: '2024-07-26', organization: 'Homeless Shelter', description: 'Need for prepared meals' }
    ];

    const recentDonationsContainer = document.getElementById('recent-donations');
    const pendingRequestsContainer = document.getElementById('pending-requests');

    // Populate recent donations
    recentDonations.forEach(donation => {
        const donationElement = document.createElement('div');
        donationElement.classList.add('card');
        donationElement.innerHTML = `<p>Date: ${donation.donationDate}</p><p>Quantity: ${donation.quantity}</p><p>Type: ${donation.type}</p>`;
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
