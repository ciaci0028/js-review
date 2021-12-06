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


