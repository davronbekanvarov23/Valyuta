export const calculateTotalByType = (data) => {
  return data.reduce((totals, item) => {
    if (totals[item.type]) {
      // If the type already exists, add to the total
      totals[item.type] += item.amount;
    } else {
      // Otherwise, initialize it
      totals[item.type] = item.amount;
    }
    return totals;
  }, {});
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 0,
    useGrouping: true,
  })
    .format(amount)
    .replace(/,/g, " ");
};
export const calculateSum = (data) => {
  const result = {
    income: 0,
    outcome: 0,
  };

  data.forEach((item) => {
    if (item.action === "kirim") {
      result.income += parseInt(item.amount);
    } else if (item.action === "chiqim") {
      result.outcome += parseInt(item.amount);
    }
  });

  return result;
};
