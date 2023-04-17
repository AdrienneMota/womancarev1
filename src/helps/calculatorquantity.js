export default function calculatorquantity(products) {
    const quantitytotal = products.reduce( (acc, item) => acc + item.quantity, 0 )
    return quantitytotal 
}

