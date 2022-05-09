import {
	APE_FACTORY,
	PANCAKE_FACTORY,
	BISWAP_FACTORY,
	BABY_FACTORY,
	CAFE_FACTORY,
} from './factories'
import { Chain, BSC } from './chains'

export const APE_ROUTER = '0xcf0febd3f17cef5b47b0cd257acf6025c5bff3b7'
export const BISWAP_ROUTER = '0x3a6d8ca21d1cf76f653a67577fa0d27453350dd8'
export const PANCAKE_ROUTER = '0x10ed43c718714eb63d5aa57b78b54704e256024e'
export const CAFE_ROUTER = '0x933daea3a5995fb94b14a7696a5f3ffd7b1e385a'
export const BABY_ROUTER = '0x325e343f1de602396e256b67efd1f61c3a6b38bd'

type RouterToFactory = {
  [key in Chain]?: {
    [key: string]: string
  }
}

export const routerToFactoryMap: RouterToFactory = {
	[BSC]: {
		[APE_ROUTER]: APE_FACTORY,
		[PANCAKE_ROUTER]: PANCAKE_FACTORY,
		[BISWAP_ROUTER]: BISWAP_FACTORY,
		[CAFE_ROUTER]: CAFE_FACTORY,
		[BABY_ROUTER]: BABY_FACTORY,
	},
}

