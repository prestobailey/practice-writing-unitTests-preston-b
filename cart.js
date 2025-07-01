function addItem(cart, item, quantity) {
  if (!item || typeof quantity !== 'number' || quantity <= 0) {
    return false;
  }
  const existing = cart.find(i => i.name === item);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ name: item, quantity });
  }
  return true;
}

  function removeItem(cart, item) {
  const index = cart.findIndex(i => i.name === item);
  if (index === -1) {
    return false;
  }
  cart.splice(index, 1);
  return true;
}

function getTotalItems(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

module.exports = { addItem, removeItem, getTotalItems };