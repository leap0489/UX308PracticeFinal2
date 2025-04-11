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

export {hello, feetToAcre, airQuality}