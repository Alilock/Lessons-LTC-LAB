// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [pizzaStatus, setPizzaStatus] = useState("")


//   const [myPizza, setMyPizza] = useState('')

//   useEffect(() => {
//     checkPizzaStatus()
//   }, [])

//   const checkPizzaStatus = async () => {
//     setPizzaStatus('pending')
//     const pizza = await pizzaOrder()
//     setPizzaStatus("done")
//     setMyPizza(pizza)
//   }


//   const pizzaOrder = async () => {
//     return new Promise((resolve, reject) => {

//       const bool = true

//       if (bool) {
//         setTimeout(() => {
//           resolve("PizzaHazirdir")
//         }, 1000)
//       }
//       else {
//         setTimeout(() => {
//           reject("Pizza Yandi")
//         }, 1000)
//       }
//     })
//   }
//   if (pizzaStatus == 'pending') {
//     return <div>Pizza Hazirlanir</div>
//   }
//   return (
//     <div>
//       {myPizza}
//     </div>
//   )
// }

// export default App

import React from 'react'
import Contacts from './components/Contacts'

const App = () => {

  return (
    <div>
      <Contacts />
    </div>
  )
}

export default App

