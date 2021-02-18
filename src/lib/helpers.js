export const calculateTotalPrice = (items) => {
    const prices = items.map((item) => item.price);
    return prices.reduce((sum, next) => next + sum).toFixed(2);
}

export default {
  calculateTotalPrice,
}
