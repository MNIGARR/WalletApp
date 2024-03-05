import React from 'react'

export default function CurrentWallet({wallet}) {
  return (
    <div>
        <h3>{wallet.name}</h3>      
        <h3>{wallet.curreny}</h3>      
        {/* <h3>{wallet.incomes}</h3>      
        <h3>{wallet.expenses}</h3>       */}
     </div>
  )
}
