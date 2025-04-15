import {hello, feetToAcre, airQuality, yeeha, gymCost, countCoin, lawnTime} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question1Real(){
    return <section>
1. Write a function that converts square feet to acres
    <h2>results</h2>
    <p>feetToAcre(20000) == "{feetToAcre(20000)}"</p>
    <p>feetToAcre(40000) == "{feetToAcre(40000)}"</p>
    <p>feetToAcre(80000) == "{feetToAcre(80000)}"</p>
    </section>
}

function Question2(){
    return <section>
2. convert air quality given an index 
    <h2>results</h2>
    <p>airQuality(13) == "{airQuality(13)}"</p>
    <p>airQuality(53) == "{airQuality(53)}"</p>
    <p>airQuality(113) == "{airQuality(113)}"</p>
    <p>airQuality(173) == "{airQuality(173)}"</p>
    <p>airQuality(230) == "{airQuality(260)}"</p>
    <p>airQuality(700) == "{airQuality(700)}"</p>
    </section>
}

function Question3(){
    return <section>
3. Integer shit yee ha
        <h2>results</h2>
        <p>yeeha(9) == "{yeeha(9)}"</p>
        <p>yeeha(21) == "{yeeha(21)}"</p>
        <p>yeeha(28) == "{yeeha(28)}"</p>
        <p>yeeha(13) == "{yeeha(13)}"</p>
    </section>
}

function Question4(){
    return <section>
    4. Gym question
            <h2>results</h2>
            <p>gymCost(0,30) == "{gymCost(0,30)}"</p>
            <p>gymCost(1,30) == "{gymCost(1,30)}"</p>
            <p>gymCost(2,30) == "{gymCost(2,30)}"</p>
            <p>gymCost(3,30) == "{gymCost(3,30)}"</p>
        </section>
}

function Question5(){
    return <section>
    5. Coin question
            <h2>results</h2>
            <p>countCoin(3,4,5,6,6) == "{countCoin(3,4,5,6,6)}"</p>
        </section>
}

function Question6(){
    return <section>
    6. Lawn question
            <h2>results</h2>
            <p>lawnTime(4,5,2) == "{lawnTime(4,5,2)}"</p>
        </section>
}

export {Question1, Question1Real, Question2, Question3, Question4, Question5, Question6}