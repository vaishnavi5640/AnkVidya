function numberToWords(num) {

  if (!num) return "";

  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"
  ];


  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety"
  ];


  function twoDigits(n) {

    if (n < 20) {
      return ones[n];
    }

    return tens[Math.floor(n / 10)] + 
      (n % 10 ? " " + ones[n % 10] : "");

  }


  function threeDigits(n) {

    let result = "";

    if (n >= 100) {

      result += ones[Math.floor(n / 100)] + " Hundred ";

      n = n % 100;

    }


    if (n > 0) {

      result += twoDigits(n);

    }

    return result.trim();

  }



  let number = Number(num);


  if (number === 0) {
    return "Zero";
  }


  let result = "";


  let crore = Math.floor(number / 10000000);

  number %= 10000000;


  let lakh = Math.floor(number / 100000);

  number %= 100000;


  let thousand = Math.floor(number / 1000);

  number %= 1000;


  let hundred = number;



  if (crore) {

    result += threeDigits(crore) + " Crore ";

  }


  if (lakh) {

    result += threeDigits(lakh) + " Lakh ";

  }


  if (thousand) {

    result += threeDigits(thousand) + " Thousand ";

  }


  if (hundred) {

    result += threeDigits(hundred);

  }


  return result.trim();

}


export default numberToWords;