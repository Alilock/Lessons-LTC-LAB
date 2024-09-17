let basket = []

let product1 = {
    id: 1,
    name: "Nike",
    price: 200,
    count: 1
}
let product2 = {
    id: 2,
    name: "Adidas",
    price: 150,
    count: 1
}
let product3 = {
    id: 3,
    name: "Puma",
    price: 100,
    count: 1
}
let product4 = {
    id: 4,
    name: "Reebok",
    price: 120,
    count: 1
}
let product5 = {
    id: 5,
    name: "Vans",
    price: 80,
    count: 1
}

const arr = [1, 2, 3]

function addToBasket(product) {

    if (basket.length == 0) {
        basket.push(product)
    } else {
        basket.forEach(e => {
            if (e.id == product.id) {
                const newProduct = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    count: product.count += 1,
                }
                const newBasket = basket.filter(e => e.id != product.id)
                basket = [...newBasket, newProduct]
            }
            else {
                basket.push(product)
            }
        })
    }

}


function showBasket() {

    if (basket.length == 0) {
        console.log('Səbətiniz boşdur');
    }
    basket.forEach(e => {
        console.log(`Adı: ${e.name}, Qiymət: ${e.price} Say:${e.count}`);
    })
}

function calculateTotal() {
    const total = basket.reduce((t, v) => {
        return t += v.price * v.count
    }, 0)

    console.log(`Ümumi qiymət: ${total}`);

}

function removeFromBasket(id) {
    const newBasket = basket.filter(e => {
        return e.id != id
    })

    basket = newBasket
}
