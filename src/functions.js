function hello(name){
    return(`hello ${name}`);
}

function feetToAcre (feet){
    const Acre = (feet/43560);
    return Acre;
}

function airQuality (index) {
    let description;
    if (index >= 0 && index <= 50){
        description = "Good";
    } else if (index >=51 && index <= 100){
        description = "Moderate";
    }else if (index >=101 && index <= 150){
        description = "Unhealthy for Sensitive Groups";
    }else if (index >=151 && index <= 200){
        description = "Unhealthy";
    }else if (index >=201 && index <= 300){
        description = "Very Unhealthy";
    }else if (index >=300){
        description = "Hazardous";
    }
    return description;
}

function yeeha (integer) {
    let response;
    if (integer % 3 === 0 && integer % 7 === 0){
        response = "Yee Ha"
    }else if(integer % 3 === 0){
        response = "Yee";
    }else if (integer % 7 === 0){
        response = "Ha";
    }else if(integer % 3 !== 0 && integer % 7 !== 0){
        response = "Nada"
    }
    return response;
}

function gymCost (friends, currentCost){
    let discountCost;
    if (friends == 0){
        discountCost = currentCost;
    }else if (friends == 1){
        discountCost = 0.95 * currentCost;
    }else if (friends == 2){
        discountCost = 0.90 * currentCost;
    }else if (friends >= 3){
        discountCost = 0.85 * currentCost;
    }
    return discountCost;
}

function countCoin (nickels,dimes,quarters,loonies,toonies){
    let nickelValue = nickels * 0.05;
    let dimeValue = dimes * 0.10;
    let quarterValue = quarters * 0.25;
    let loonieValue = loonies * 1;
    let toonieValue = toonies * 2;
    let totalValue = nickelValue + dimeValue + quarterValue + loonieValue + toonieValue;

    return totalValue;
}

function lawnTime (width, length, rate){
    let time = (width * length) / rate;
    return time;
}

export {hello, feetToAcre, airQuality, yeeha, gymCost, countCoin, lawnTime}