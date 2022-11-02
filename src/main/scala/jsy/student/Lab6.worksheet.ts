/*
 * CSCI 3155: Lab 6 TypeScript Worksheet
 *
 * This worksheet is a place to experiment with TypeScript expressions.
 */

// The new programming language feature introduced in Lab6 is regular expressions

// Kleene Star Behavior
console.log( /^a*$/.test("aa") )
console.log(/^a*$/.test("a"))
console.log(/^a*$/.test(""))