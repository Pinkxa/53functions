function sum_numbers(number) {
	 //sum(10) = 55
	 var total = 0;
     for(var n = 1; n <= number; n++) {
     	total = total + n;
     }
     return total;
}