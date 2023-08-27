// Strip all comments inculding whitespace before the comment. Comments are denoted by the 'markers' array a comment will end when
// the next special character takes place

// Input: "apples, plums % and bananas\npears\noranges !applesauce"
// Argutments: ["%", "!"]
// Result:"apples, plums\npears\noranges"

// Notice how 'plums' does not have a space before the '\'

function solution(input, markers) {
  let result = '';
  const specialChars = [ 
    '[', '`', '!', '@',  '#', '$', '%',
    '^', '&', '*', '(',  ')', '_', '+',
    '-', '=', '[', ']',  '{', '}', ';',
    "'", ':', '"', '\\', '|', ',', '.',
    '<', '>', '/', '?',  '~', ']', '/'
    ]
  let bool = true;
  for (let i = 0; i < input.length; i++) {
    let currChar = input[i];
    if (!markers.includes(currChar)) result += currChar
  }
  return result
};