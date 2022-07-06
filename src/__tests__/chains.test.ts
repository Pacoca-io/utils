import { availableChains } from '../index'

describe('available chains', () => {
	test('chain type', () => {
		availableChains.forEach(chain => {
			console.log('Chain', typeof chain)
			expect(typeof chain).toBe('number')
		})
	})
})
