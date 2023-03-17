// There are two ways for creating an regular expression :

// 1 By regular expression literals 
const reg1 = /ab*/
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.

// 2 By calling the construtor function
const reg2 = new RegExp('ab*');
//It will match a , ab, abb , abbbbbb , abbbbbbb and so on.
//But will not match b, bc, abc,aba , etc.
