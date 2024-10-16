// const pizzaOrder = new Promise((resolve, reject) => {

//     const bool = false
//     if (bool) {
//         resolve("Pizza Hazirdir")
//     }
//     else {
//         reject("Pizza yandi")
//     }
// })

// pizzaOrder.then(msg => {
//     console.log(msg);
// }).catch(msg => {
//     console.log(msg);
// })
const pizzaOrder = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pizza Hazirdir")
        }, 1000)
    })
}

const main = async () => {
    const msg = await pizzaOrder()
    console.log('msg', msg);
}
main()



