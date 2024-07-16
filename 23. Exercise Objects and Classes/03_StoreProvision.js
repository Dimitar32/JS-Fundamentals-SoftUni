class Product{
    constructor(nme, quantity) {
        this.nme = nme;
        this.quantity = quantity;
    }

    printProduct() {
        console.log(`${this.nme} -> ${this.quantity}`);
    }
}

function storeProvision(arr1, arr2) {
    let products = [];
    
    for (let i = 0; i < arr1.length; i += 2) {
        let p = new Product(arr1[i], arr1[i + 1]);
        products.push(p);
    }
    
    for (let p of products) {
        console.log(p.nme + " " + p.quantity)
    }

    for (let i = 0; i < arr2.length; i += 2) {
        for (let p2 of products) {
            if (String(products[i].nme) == String(arr2[i])) {
                products[i].quantity += Number(arr2[i + 1]);
            } else {
                let p1 = new Product(arr1[i], arr1[i + 1]);
                products.push(p1);
            }
        }
    }

    for (let p of products) {
        console.log(p.nme + " " + p.quantity)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', 
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 
    'Tomatoes', '70', 'Bananas', '30'
    ]);