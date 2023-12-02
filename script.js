function spin() {
    // Example arrays for each slot
    let whoArray = ["A dog", "A cat", "A teacher", "A bird", "A firefighter", "A dancer", 
    "A doctor", "A pirate", "An astronaut", "A chef", "A student", "A singer", 
    "A farmer", "A fisherman", "A painter", "A police officer", "A scientist", 
    "A superhero", "A wizard", "A knight", "A detective", "A robot", "A dragon", 
    "A queen", "A king", "A princess", "A prince", "A giant", "A fairy", "A ghost", "Mike", "Space Monkey"];
    let whatArray = ["is running", "is sleeping", "is eating", "is singing", "is jumping", 
    "is dancing", "is cooking", "is reading", "is writing", "is painting", 
    "is flying", "is swimming", "is driving", "is shopping", "is laughing", 
    "is crying", "is building", "is fishing", "is gardening", "is playing soccer", 
    "is playing basketball", "is surfing", "is skiing", "is hiking", "is cycling", 
    "is skateboarding", "is playing chess", "is playing the piano", "is taking photos", "is watching TV"];
let whereArray = ["in the park", "at home", "in school", "at the beach", "in the forest", 
    "on the moon", "in the museum", "at the zoo", "in the garden", "at the supermarket", 
    "in the city", "in the mountains", "by the river", "in the desert", "on a boat", 
    "at the playground", "in a castle", "on a plane", "in the library", "at the restaurant", 
    "in a cave", "at the farm", "in a jungle", "at the pool", "in a studio", 
    "on a stage", "in a laboratory", "at the bus station", "in an art gallery", "at a concert"];
    let whenArray = ["in the morning", "at noon", "in the evening", "at night", "at sunrise", 
    "at sunset", "during the storm", "on a windy day", "in the summer", "in the winter", 
    "at Christmas", "on Halloween", "on New Year's Day", "during the festival", "on a rainy day", 
    "on a snowy day", "in the spring", "in the fall", "on the weekend", "on a holiday", 
    "at lunchtime", "at bedtime", "during the concert", "while camping", "during the game", 
    "at dawn", "at dusk", "on a hot day", "on a cold day", "during the parade"];

    // Random selection for each slot
    document.getElementById("who").innerHTML = whoArray[Math.floor(Math.random() * whoArray.length)];
    document.getElementById("what").innerHTML = whatArray[Math.floor(Math.random() * whatArray.length)];
    document.getElementById("where").innerHTML = whereArray[Math.floor(Math.random() * whereArray.length)];
    document.getElementById("when").innerHTML = whenArray[Math.floor(Math.random() * whenArray.length)];
}
