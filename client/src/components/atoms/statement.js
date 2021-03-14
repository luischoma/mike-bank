import React from 'react'

import './statement.scss'


const MONEY_OUT = ['WITHDRAWAL', 'PAYMENT']

const fakeStatement = [
  {
    "id": 2,
    "kind": "WITHDRAWAL",
    "author": 1,
    "amount": 100,
    "date": "12:42:20 13-03-2021"
  },
  {
    "id": 3,
    "kind": "DEPOSIT",
    "author": 1,
    "amount": 100,
    "date": "14:30:18 13-03-2021"
  },
]

const ListBody = ({ statements }) => {
  const items = statements.map(({
    kind,
    id,
    date,
    author,
    amount
  }) => {
    const isTakingMoney = MONEY_OUT.includes(kind)

    const classNameWithModifier = `statement__row__item${isTakingMoney ? '--out' : '--in'}`

    return (
      <div className={`statement__row`} key={id}>
        <div className={`statement__row__item ${classNameWithModifier}`}>
          {date}
        </div>
        <div className={`statement__row__item ${classNameWithModifier}`}>
          {author}
        </div>
        <div className={`statement__row__item ${classNameWithModifier}`}>
          {`R$${amount}`}
        </div>
      </div>
    )
  })

  return items
}


export const Statement = ({ statements = fakeStatement }) => {
  return (
    <div className="statement">
      <ListBody statements={statements} />
    </div>
  )
}