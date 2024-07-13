export const formatNumber = (amount: number | string | null | undefined): string => {
    if (amount === null || amount === undefined) {
        return 'Non communiqué';
    }
    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    return amount.toLocaleString('en-EN').replace(/,/g, ' ');
};

export const formatPercentage = (amount: number | string | null | undefined): string => {
    if (amount === null || amount === undefined) {
        return 'Non communiqué';
    }
    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    return amount.toFixed(2) + ' %';
};

export const formatMoney = (amount: number | string | null | undefined): string => {
    if (amount === null || amount === undefined) {
        return 'Non communiqué';
    }
    if (typeof amount === 'string') {
        amount = parseFloat(amount);
    }
    return amount
        .toLocaleString('en-EN', { style: 'currency', currency: 'USD' })
        .replace(/,/g, ' ');
};
