// reduce method

const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, curval) => {
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
}, 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
]

const priceToPay = shoppingCart.reduce ( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);


