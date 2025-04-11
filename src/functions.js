function hello(name){
    return(`hello ${name}`);
}

function feetToAcre (feet){
    const Acre = (feet/43560);
    return Acre;
}

export {hello, feetToAcre}