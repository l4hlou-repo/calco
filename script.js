document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const resultElement = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const activitySelect = document.getElementById("activity");
        const durationInput = document.getElementById("duration");

        const activity = activitySelect.value;
        const duration = parseFloat(durationInput.value);

        const activityMet = {
            "running": 8.0,
            "cycling": 5.0,
            "swimming": 7.0
        };

        const metValue = activityMet[activity] || 1.0;
        const caloriesBurned = metValue * duration * 3.5 * 70 / 200;  // Assuming a 70kg person

        resultElement.textContent = `Calories burned: ${caloriesBurned.toFixed(2)} kcal`;

        // Clear inputs
        activitySelect.value = "";
        durationInput.value = "";
    });
});
