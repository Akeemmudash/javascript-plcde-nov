const formatNaira = (amount) =>
  amount.toLocaleString("en-NG", {
    minmumFractionDigits: 0,
    style: "currency",
    currency: "NGN",
  });

// for (let i = 1; i < 100; i = i + 1) {
//   console.log(`index: ${i}`);
// }
let savings = 0;
let day;
for (day = 1; day <= 365; day++) {
  savings = savings + 20_000;
}

console.log(formatNaira(savings));

let vehicleSavings = 0;
let i = 1;
while (i <= 365) {
  vehicleSavings = vehicleSavings + 10_000;
  i++;
}
console.log(formatNaira(vehicleSavings));

// prints
let number = 1;

while (number <= 100) {
  if (number % 2 == 0) {
    console.log(number);
  }
  number = number + 1;
}
