import React from 'react'

const Coin = ({setAmount}) => {
  return (
    <div className=" !absolute transform rotate-90 top-[33%] left-[-4%] !flex">
    <p
      className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
      onClick={() => setAmount(2)}
    >
      2
    </p>
    <p
      className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
      onClick={() => setAmount(5)}
    >
      5
    </p>
    <p
      className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
      onClick={() => setAmount(10)}
    >
      10
    </p>
    <p
      className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
      onClick={() => setAmount(50)}
    >
      50
    </p>
    <p
      className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
      onClick={() => setAmount(100)}
    >
      100
    </p>
    <p
      className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
      onClick={() => setAmount(500)}
    >
      500
    </p>
    <p
      className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
      onClick={() => setAmount(1000)}
    >
      1k
    </p>
    <p
      className="!bg-white !p-1 !border-2 !border-blue-700 !rounded-full !cursor-pointer"
      onClick={() => setAmount(3000)}
    >
      3k
    </p>
  </div>
  )
}

export default Coin
