const isPalindrome = (string) => {
    const formattedString = string.split(' ').join('').toLowerCase();
    return formattedString === formattedString.split('').reverse().join('');
  };

export {isPalindrome};