document.addEventListener("DOMContentLoaded", function () {
  // Sample data for food requests and recent donations
  const foodRequests = [
    {
      id: 1,
      organization: "Food Bank",
      requestDate: "2024-07-25",
      description: "Large quantities of canned goods needed.",
    },
    {
      id: 2,
      organization: "Homeless Shelter",
      requestDate: "2024-07-26",
      description: "Prepared meals for 100 people.",
    },
  ];

  const recentDonations = [
    {
      id: 1,
      donor: "Restaurant A",
      donationDate: "2024-07-24",
      quantity: "50 meals",
    },
    {
      id: 2,
      donor: "Hotel B",
      donationDate: "2024-07-23",
      quantity: "30 meals",
    },
  ];

  const foodRequestsContainer = document.getElementById("food-requests");
  const recentDonationsContainer = document.getElementById("recent-donations");

  // Populate food requests
  foodRequests.forEach((request) => {
    const requestElement = document.createElement("div");
    requestElement.classList.add("card");
    requestElement.innerHTML = `<h3>${request.organization}</h3><p>Date: ${request.requestDate}</p><p>Description: ${request.description}</p>`;
    foodRequestsContainer.appendChild(requestElement);
  });

  // Populate recent donations
  recentDonations.forEach((donation) => {
    const donationElement = document.createElement("div");
    donationElement.classList.add("card");
    donationElement.innerHTML = `<h3>${donation.donor}</h3><p>Date: ${donation.donationDate}</p><p>Quantity: ${donation.quantity}</p>`;
    recentDonationsContainer.appendChild(donationElement);
  });
});
