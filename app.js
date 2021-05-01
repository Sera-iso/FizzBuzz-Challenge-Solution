for (let i = 1; i <= 100; i++) {
   let multipleOf3 = i % 3;
   let multipleOf5 = i % 5;
     
   if (multipleOf3 == 0 && multipleOf5 == 0) {
      console.log("FizzBuzz"); 
   } // For multiple of 3 and 5, print FizzBuzz
   else if (multipleOf3 == 0) {
      console.log("Fizz");
   } // For multiple of 3, print Fizz
   else if (multipleOf5 == 0) {
      console.log("Buzz");
   } // For multiple of 5, print Buzz
   else {
      console.log(i);
   } // Print numbers from 1-100
}