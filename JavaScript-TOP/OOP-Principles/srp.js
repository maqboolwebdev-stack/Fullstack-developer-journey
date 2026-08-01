import logMessage from "./logger.js";
class CalorieTracker {
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(caloriesCount) {
        this.currentCalories += caloriesCount;
        if(this.currentCalories > this.maxCalories) {
            logMessage('Max calories exceeded');
        }
    }
}

const caloriesTracker = new CalorieTracker(2000);
caloriesTracker.trackCalories(400);
caloriesTracker.trackCalories(800);
caloriesTracker.trackCalories(1200);