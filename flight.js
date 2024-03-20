function minimumPlanesRequired(airports) {
    // Check if the input array is valid
    if (!airports || airports.length === 0) return -1;

    // Initialize variables to track the number of planes needed and the current fuel available
    let planesNeeded = 0;
    let currentFuel = airports[0]; // Start with the fuel available at the first airport

    // Iterate through each airport from the second one
    for (let i = 1; i < airports.length; i++) {
        // Consume 1 unit of fuel to travel to the next airport
        currentFuel--;

        // If there's not enough fuel to reach the next airport, return -1
        if (currentFuel < 0) {
            return -1;
        }

        // If the current fuel is exactly 0, it means we need to hire another plane
        // Update the planesNeeded count and reset the currentFuel to the fuel available at the next airport
        if (currentFuel === 0) {
            planesNeeded++;
            currentFuel = airports[i];
        } 
        // If we're at the last airport, we need one more plane
        else if (i === airports.length - 1) {
            planesNeeded++;
        } 
        // Otherwise, update the currentFuel to the maximum of the current fuel and the fuel available at the next airport
        else {
            currentFuel = Math.max(currentFuel, airports[i]);
        }
    }

    // Return the minimum number of planes needed to reach the last airport
    return planesNeeded;
}
