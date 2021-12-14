import React, { useState } from 'react'

export default function Payments() {
  const [amount, setAmount] = useState("");
  const [bank, setBank] = useState("");




  return (
    <div>
      <div className='hbod'>
        <div className='hin'>
          <div>
            <Input
              onChange={(e) => setBank(e.target.value)}
              placeholder="enter amount"
              type="number"
            />
          </div>
          <div>
            <Input
              onChange={(e) => setAmount(e.target.value)}
              placeholder="enter amount"
              type="number"
            />
          </div>
          <div>
            <Input
              onChange={(e) => setAmount(e.target.value)}
              placeholder="enter amount"
              type="number"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
