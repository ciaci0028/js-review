/*

Jargon!

.   - dot
()  - parenthese, parens
[]  - square brackets/braces 
{}  - curly brackets/braces
<>  - angle brackets
<   - less than
>   - greater than 
/   - slash, forward slash, whack
\   - back slash
!   - exclamation point, not operator, bang
#   - hashtag, pound, octothorp
*   - star, asterisk, splat
||  - or operator, pipes
&&  - and operator, amperstand
$   - bling, dollar sign, jQuery
NaN - Not a Number, bread

*/ 

/*

Primitive Data Types

    Strings         'taco'
    Numbers         18
    Boolean         true / false
    Undefined       undefined
    Null            null


Complex Data Types

    Arrays          [ 1, 2, 3 ], [ 'hello', 'world' ]
    Objects         { firstName: 'Sabrina', lastName: 'Ciaciura' }

*/


// Naming convention
// Always use camelCase
let firstName = 'Sabrina';
// snake_case
let last_name = 'Ciaciura';
// PasqalCase aka UpperCamelCase
let FavoriteColor = 'blue';
// kebab-case (in html)
// <div class + "first-name">Sabrina</div>
// SCREAMING_CASE

let person = {
    firstName: 'Sabrina',
    lastName: 'Ciaciura',
    age: 30
}


/*

Expressions 
- Statement / phrase
- Evaluates / resolves to a single value
- Can even be a function
- You can assign any expression to a variable
- Expression can be used inside another expression

A variable is like a container for a value, it can be reassigned

Operators
- Performs some operation on single or mulitple operands

++      Increment Operator
--      Decrement Operator
+=      Itself plus the new value
-=      Itself minus the new value
*=      Itself multiplied by the new value
/=      Itself dividied by the new value
%=      Modulus operator, gives remainder

"+"" operator does two things:
- Math, adds two numbers together
- Joins two strings together (concatenation)

"-"" operator only does math

Number function
Number( '5' )
>> 5
parseInt( gets rid of decimal )
parseFloat ( keeps decimal )

*/

// Anti-values
// Values that are not values
NaN;            // Not a Number, usually a type coercion
null;           // Intentionally nothing 
undefined;      // Accidentally nothing, function with no return value
// not defined  // An undeclared variable, error, not declared

/*

CONDITIONALS
- Putting something through a conditional creates a boolean
- Having a value makes it truthy
- Be as explicit as possible

*/

if ( someBoolean ) {
    // then, do this
}
else if ( someBoolean ) {
    // then do that
}
else {
    // Do this, if nothing else is truthy
}

// Conditional Operator
// - Always returns a boolean

if ( myNumber > 8 ) {
    // Do whatever...
    // Resolves to a boolean
}

/*

>       More than
<       Less than
>=      Greater than or equal to
<=      Lesser than or equal to
===     Triple equals (exactly equals)
==      Double equals (tries to coerce the values to be the same type, then compares)
!==     Not equals
!=      Not equals (coerces type)

*/


/*

ARRAYS & LOOPS

- An array is a list of things
- 90% of the time we loop through the arrays

*/

let beverages = [
    'Bubly',
    'Jasmine Tea',
    'Water',
    'Coffee',
];

/*

Kinds of loops:
- for
- for...of (99% of the time)
- for...in
- while

*/

for ( let beverage of array ) {
    console.log( `I am drinking ${ beverage }`  );
}

// Use this for looping but not an array

for ( let i = 0; i < beverages.length; i++ ) {
    let beverage = beverages[i];
    console.log( ` I am drinking ${ beverage }` );
}

// Displays index, not the actual value
for ( let i in beverages ) {
    let beverage = beverages[i];
    console.log( ` I am drinking ${ beverage }` );
}

// While loops
let forecast;
while (forecast.windSpeed > 50 ) {
    forecast = goAsk();
}

let isGameRunning = true;
while( isGameRunning ){
    nextTick();
}

$('#stopbuttom').on( 'click' , function() ) {
    isGameRunning = false;
}

/*

FUNCTIONS
- What do I need input and what do I need to output
- Aka arguments and return value
- Local versus global scope
- Wnat to avoid using global scope as much as possible to avoid confusion

*/

function generateSong( lyrics, notes ) {
    let song = `
    ${ lyrics }
    ${ notes }
    `;
    return song;
} 

let mySong = generateSong( 'hey hey hey', 'C F G' );
console.log( 'check out my song:', mySong );

// Function declaration
// This is hoisted, meaning it can be called before it is declared
function sum( n1, n2 ){
    return n1 + n2;
}

// Function expression
// Annonymous function and assign it to a variable
let sum = function( n1, n2 ) {
    return n1 + n2;
}

function sayHello() {
    console.log( 'hello' );
}

function twoTimes( fn ) {
    fn();
    fn();
}

twoTimes( sayHello );
// OR

// Common pattern in Javascript called "callback function"
twoTimes( function()  {
    console.log( 'hello' );
} );

// Built-in functions
Number( '5' ); // Converts string to number
parseFloat( '312.23' ); // Converts and keeps decimal
parseInt( '233.44' ); // Converts but discards decimal
String( 2343 ); // Converts to a string

// Object method
array.push();