export function calculateTotal(items) {
    let total = 0;

    for (const item of items) {
        total += item.price * item.quantity;
    }

    return total;
}

export function isEligibleForDiscount(total) {
    return total >= 1000;
}

export function getItem(items, index) {
    if (index >= items.length) {
        return null;
    }

    return items[index];
}