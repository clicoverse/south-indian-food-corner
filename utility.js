let total = 0; //initial price value in the cart.
let itemCount = 0; // Initialize the item count
function buyThisNow(target) {
  let priceValue = (target.parentNode.parentNode.childNodes[5].childNodes[1].innerText.split(" "));
  let price = parseFloat(priceValue[1]);
  const invidualPriceCreateElement = document.createElement('p');
  invidualPriceCreateElement.innerText = '₹ ' + price; //price displayed for (individual) items in view cart modal.

  document.getElementById('individual-pdt-price').appendChild(invidualPriceCreateElement);
  total = parseFloat(total) + parseFloat(price);
  document.getElementById('subtotal').innerText = total; //price displayed on cart icon.
  document.getElementById('cart-value').innerText = total; //price displayed on cart modal.

  let productName = (target.parentNode.parentNode.childNodes[1].innerText);
  const li = document.createElement('li');
  li.innerText = productName;
  document.getElementById('product-details').appendChild(li); // individual product name display in view cart modal.

  // let products = document.getElementById('product-details').innerText;
  
  let itemCountElement = document.getElementById('item-counts');
  itemCountElement.textContent = itemCount;
  itemCount++; // Increment the item count
  document.getElementById('item-counts2').innerText = itemCount;
  // const existingItem = productName.find(item => item.name === productName);

  
  console.log(productName);

}

