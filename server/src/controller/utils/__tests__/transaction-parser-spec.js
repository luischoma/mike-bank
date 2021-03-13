import {
    parseTransaction,
  } from '../transaction-parser.js'

const transactionMock = {

}

describe('When parseTransaction is called', () => {
    describe('and date is present', () => {
      it('parses date to \'HH:mm:ss DD-MM-YYYY\' format ', () => {
        expect(parseTransaction(
          {
            id: 10,
            kind: 'WITHDRAWAL',
            author: 'João',
            amount: 100,
            date: "01-01-2001 12:22:22"
          }
        )).toEqual(
          {
            id: 10,
            kind: 'WITHDRAWAL',
            author: 'João',
            amount: 100,
            date: "12:22:22 01-01-2001"
          }
        )
      })
    })

    describe('and there is no date', () => {
      it('returns "Invalid Date" message', () => {
        expect(parseTransaction(
          {
            id: 10,
            kind: 'WITHDRAWAL',
            author: 'João',
            amount: 100,
            date: null
          }
        )).toEqual(
          {
            id: 10,
            kind: 'WITHDRAWAL',
            author: 'João',
            amount: 100,
            date: "Invalid date"
          }
        )
      })
    })
  })