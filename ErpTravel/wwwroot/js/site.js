document.addEventListener('DOMContentLoaded', function () {
    const adultsInput = document.getElementById('adults');
    const childrenWithBedInput = document.getElementById('childrenWithBed');
    const childrenWithoutBedInput = document.getElementById('childrenWithoutBed');
    const vehicleDropdown = document.getElementById('vehicle');
    const itineraryDiv = document.getElementById('itinerary');
    const daysDropdown = document.getElementById('days');

    function updateVehicleOptions() {
        const adults = parseInt(adultsInput.value) || 0;
        const childrenWithBed = parseInt(childrenWithBedInput.value) || 0;
        const childrenWithoutBed = parseInt(childrenWithoutBedInput.value) || 0;
        const totalPeople = adults + childrenWithBed + childrenWithoutBed;

        // Save the user's current vehicle selection (if any)
        const selectedVehicle = vehicleDropdown.value;

        // Define a set of vehicle options
        const allVehicleOptions = `
            <option value="Car">Car</option>
            <option value="Van">Van</option>
            <option value="Bus">Bus</option>
            <option value="SUV">SUV</option>
            <option value="Mini Bus">Mini Bus</option>
        `;

        vehicleDropdown.innerHTML = allVehicleOptions;

        // Suggest a default vehicle based on the number of people
        if (totalPeople <= 4) {
            vehicleDropdown.value = "Car";
        } else if (totalPeople <= 7) {
            vehicleDropdown.value = "Van";
        } else {
            vehicleDropdown.value = "Bus";
        }

        // If the user had already selected a vehicle, keep their selection
        if (selectedVehicle) {
            vehicleDropdown.value = selectedVehicle;
        }
    }

    function updateItinerary() {
        const days = parseInt(daysDropdown.value);
        let itinerary = '';

        if (days === 2) {
            itinerary = `
                <h2>Itinerary for 2 Days 1 Night</h2>
                <p>Day 1: Marina Bay Sands, Gardens by the Bay (Ticket: $30)</p>
                <p>Day 2: Sentosa Island, Universal Studios (Ticket: $70)</p>
                <p>Hotel: 1 Night at Singapore Hotel</p>
            `;
        } else if (days === 3) {
            itinerary = `
                <h2>Itinerary for 3 Days 2 Nights</h2>
                <p>Day 1: Marina Bay Sands, Gardens by the Bay (Ticket: $30)</p>
                <p>Day 2: Sentosa Island, Universal Studios (Ticket: $70)</p>
                <p>Day 3: Singapore Zoo, Night Safari (Ticket: $50)</p>
                <p>Hotel: 2 Nights at Singapore Hotel</p>
            `;
        } else if (days === 4) {
            itinerary = `
                <h2>Itinerary for 4 Days 3 Nights</h2>
                <p>Day 1: Marina Bay Sands, Gardens by the Bay (Ticket: $30)</p>
                <p>Day 2: Sentosa Island, Universal Studios (Ticket: $70)</p>
                <p>Day 3: Singapore Zoo, Night Safari (Ticket: $50)</p>
                <p>Day 4: Jurong Bird Park, River Safari (Ticket: $40)</p>
                <p>Hotel: 3 Nights at Singapore Hotel</p>
            `;
        }

        itineraryDiv.innerHTML = itinerary;
    }

    adultsInput.addEventListener('input', updateVehicleOptions);
    childrenWithBedInput.addEventListener('input', updateVehicleOptions);
    childrenWithoutBedInput.addEventListener('input', updateVehicleOptions);
    daysDropdown.addEventListener('change', updateItinerary);
});
