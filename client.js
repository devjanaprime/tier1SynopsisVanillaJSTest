let budget = 10000;
let items = [];

class Item{
    constructor( cost, name ){
        this.cost = cost;
        this.name = name;
    } //end constructor
} //end class

let addItem = () =>{
    console.log( 'in addItem' );
    items.push( 
        new Item( document.getElementById( 'costIn' ).value,
        document.getElementById( 'nameIn' ).value ) 
    ); //end new item
    document.getElementById( 'costIn' ).value = '';
    document.getElementById( 'nameIn' ).value = '';
    displayitems();
    calculateBudget();
} // end addItem

let calculateBudget = () =>{
    console.log( 'in calculateBudget' );
    // set initial budget
    let remainingBudget = budget;
    // loop through items and subtract each item's cost
    for( item of items ){
        remainingBudget -= item.cost;
    } // end for
    // display on DOM
    let el = document.getElementById( 'remainingBudgetOut' );
    el.innerHTML = remainingBudget.toFixed( 2 );
} // end calculateBudget

let displayitems = () =>{
    console.log( 'in displayItems' );
    let outputString = '';
    for( item of items ){
        outputString += '<li>' + item.name + ': $' + Number( item.cost ).toFixed( 2 ) + '</li>';
    } // end for
    // display on DOM
    let el = document.getElementById( 'itemsOut' );
    el.innerHTML = outputString;
} //end displayItems

document.addEventListener("DOMContentLoaded", ()=> {
    let el = document.getElementById( 'budgetOut' );
    el.innerHTML = budget.toFixed( 2 );
    calculateBudget();
});