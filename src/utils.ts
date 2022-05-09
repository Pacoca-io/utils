import BigNumber from 'bignumber.js'

export const toDecimal = (num: number, decimals: number) => (new BigNumber(num)).div(Math.pow(10, decimals))

