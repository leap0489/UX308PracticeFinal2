import {hello, feetToAcre} from './functions.js';

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

export {Question1, Question1Real}