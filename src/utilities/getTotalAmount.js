export const getTotalAmount = (items) => items.reduce((sum, { amount }) => sum + amount, 0);
