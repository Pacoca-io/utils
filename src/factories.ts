import { AVAX, BSC, ETH, FTM, POLY } from './chains'

export const PANCAKE_FACTORY = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'.toLowerCase()
export const APE_FACTORY = '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6'.toLowerCase()
export const SOLIDEX_FACTORY = '0x3fAaB499b519fdC5819e3D7ed0C26111904cbc28'.toLowerCase()
export const BISWAP_FACTORY = '0x858E3312ed3A876947EA49d572A7C42DE08af7EE'.toLowerCase()
export const CAFE_FACTORY = '0x3e708FdbE3ADA63fc94F8F61811196f1302137AD'.toLowerCase()
export const BABY_FACTORY = '0x86407bea2078ea5f5eb5a52b2caa963bc1f889da'.toLowerCase()

export const factories = {
	[ETH]: [
		// '0x1F98431c8aD98523631AE4a59f267346ea31F984', // Uniswap
		'0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // Uni v2
		'0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac', // Sushi
	].map(factory => factory.toLowerCase()),
	[BSC]: [
		PANCAKE_FACTORY,
		APE_FACTORY,
		CAFE_FACTORY,
		BISWAP_FACTORY,
		BABY_FACTORY,
	].map(factory => factory.toLowerCase()),
	[POLY]: [
		'0xa98ea6356A316b44Bf710D5f9b6b4eA0081409Ef', // Walter
		'0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32', // QuickSwap
		'0xc35DADB65012eC5796536bD9864eD8773aBc74C4', // Sushi
		'0xCf083Be4164828f00cAE704EC15a36D711491284', // Ape
	].map(factory => factory.toLowerCase()),
	[AVAX]: [
		'0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10', // Trader Joe
		'0xefa94DE7a4656D787667C749f7E1223D71E9FD88', // Pangolin
		'0xe0C1bb6DF4851feEEdc3E14Bd509FEAF428f7655', // Lydia
	].map(factory => factory.toLowerCase()),
	[FTM]: [
		'0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3', // Spooky
		'0xEF45d134b73241eDa7703fa787148D9C9F4950b0', // Spirit
		'0x7d82F56ea0820A9d42b01C3C28F1997721732218', // DarkKnight
		'0xc831a5cbfb4ac2da5ed5b194385dfd9bf5bfcba7', // Wigo
		SOLIDEX_FACTORY,
	].map(factory => factory.toLowerCase()),
}


