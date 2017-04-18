sum1 =0;
sum2 =0;
sum3 = 0;
for (var i = 0; i < 1000; i++) {
  var disis = i % 3;
  var getinn = i % 5;
  if (disis === 0) {
    sum1 = sum1 + i;
  }
  if (getinn === 0){
sum2 = sum2 + i;
  }
}
sum3 = sum1 + sum2;
console.log(sum3);
sum1 = 0;
sum2 = 0;
sum3 = 0;
