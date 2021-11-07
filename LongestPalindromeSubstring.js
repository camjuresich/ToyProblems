const longestPalindrome = function(string) {
        //iterate over the string looking for middle characters in the palindrome;
        // keep track of the current longest palindrome in a variable
        // keep track of the indicies left and right 
        let currLongest = string[0];
        const findLongest = (left, right) => {
                while (string[left] === string[right] && left >= 0 && right < string.length) {
                        let length = right - left + 1;
                        if (currLongest.length <  length) {
                                currLongest = string.slice(left, right + 1);
                        }
                        left--;
                        right++;
                }
        }
        for (let i = 0; i < string.length; i++) {
                //for odd palindromes
                let left = i;
                let right = i;
                findLongest(left, right)
                //for even palindromes
                left = i;
                right = i+1;
                findLongest(left, right);

        }
        return currLongest;
}
