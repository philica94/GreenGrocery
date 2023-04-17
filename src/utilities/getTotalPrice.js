export const getTotalPrice = (items) => items.reduce((sum, { price, amount }) => sum + amount * price, 0).toFixed(2);
