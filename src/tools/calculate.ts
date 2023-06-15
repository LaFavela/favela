export default function calculate(price: number) {
  if (price > 10 ** 12) {
    return (price / 10 ** 9).toFixed(0) + " M++";
  } else if (price > 10 ** 9) {
    return (price / 10 ** 9).toFixed(0) + " M";
  } else if (price > 10 ** 6) {
    return (price / 10 ** 6).toFixed(0) + " Jt";
  } else if (price > 10 ** 3) {
    return (price / 10 ** 3).toFixed(0) + " K";
  }
}
