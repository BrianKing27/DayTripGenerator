'use strict'
let destinations = ['D.C.', 'Baltimore', 'New York City', 'Boston', 'Los Angeles', 'San Fransisco', 'Baja', 'Houston', 'Austin', 'San Antonio'];
let restuarants = ["Carrabba's Italian Grill", "Olive Garden", "Red Lobster", "Chili's", "Apple Bee's", "P.F. Chang's China Bistro"]
let transportation = ["Car rental", "Taxi", "Moped", "Bike", "Walking"]
let entertainment =["Zoo", "Museum", "Aquarium", "Hiking", "Ski/Snowboard", "Concert"]

function destination(){  // A random Destination
    let ranDest = Math.floor(Math.random() * 9) + 1;
    return destinations[ranDest];
};

function restuarant(){  // A random restuarant
    let ranRest = Math.floor(Math.random() * 5) + 1;
    return Restuarant[ranRest];
};

function transportation(){  // Random Transportation methods.
    let ranTran = Math.floor(Math.random() * 4) + 1;
    return transportation[ranTran];
};
 function entertainment(){  // Random Entertainment idea.
    let ranEnt = Math.floor(Math.random() * 5) + 1;
    return Entertainment[ranEnt];
};




alert(destination(), restuarant(), transportation(), entertainment());
