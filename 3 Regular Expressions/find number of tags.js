// Find number of tags using regular expression
const fs = require('fs')
const fileName = 'data.html'
const str = fs.readFileSync(fileName).toString()
const pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
const myarray = str.match(pattern)
const len = myarray.length
console.log(len);


/* 
 /: The first forward slash starts the regular expression.
 <: This matches the opening angle bracket character.
 (: This starts a capture group.
 \"[^\"]*\": This matches any text within double quotes.
 |: This separates alternative options for matching.
 '[^']*': This matches any text within single quotes.
 |: This separates alternative options for matching.
 [^'\">]: This matches any text that is not a single quote, double quote, or angle bracket.
 )*: This ends the capture group and allows it to repeat zero or more times.
 >: This matches the closing angle bracket character.
 /: The second forward slash ends the regular expression. */