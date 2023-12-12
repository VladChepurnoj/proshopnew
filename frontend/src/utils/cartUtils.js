export const addDecimals = (num) => {
	return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
	// Calculate the items price in whole number (pennies) to avoid issues with
	// floating point number calculations
	const itemsPrice = state.cartItems.reduce(
		(acc, item) => acc + (item.price * 100 * item.qty) / 100,
		0
	);
	state.itemsPrice = addDecimals(itemsPrice);

	// Calculate the shipping price
	const shippingPrice = itemsPrice > 100 ? 0 : 10;
	state.shippingPrice = addDecimals(shippingPrice);

	// Calculate the tax price
	const taxPrice = 0.15 * itemsPrice;
	state.taxPrice = addDecimals(taxPrice);

	const totalPrice = itemsPrice + shippingPrice + taxPrice;
	// Calculate the total price
	state.totalPrice = addDecimals(totalPrice);

	// Save the cart to localStorage
	localStorage.setItem("cart", JSON.stringify(state));

	return state;
};

// export const updateCart = (state) => {
// 	//calculate items price
// 	state.itemsPrice = addDecimals(
// 		state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
// 	);

// 	//calculate shipping price (if order is more 100$ then free, else 10$ shipping)
// 	state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

// 	//calculate tax price (15%)
// 	state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

// 	//calculate total price
// 	state.totalPrice = (
// 		Number(state.itemsPrice) +
// 		Number(state.shippingPrice) +
// 		Number(state.taxPrice)
// 	).toFixed(2);

// 	localStorage.setItem("cart", JSON.stringify(state));

// 	return state;
// };
