import { Chain } from './chains'
import { debounce } from 'throttle-debounce'
import web3, { multiRpc } from './web3'

const MAX_SIZE = 500
const TIMEOUT = 100

export class BatchExecutor {
	chain: Chain
	counter: number
	batch: any
	id: number
	_debouncedExecute: () => void

	constructor({ chain }: { chain: Chain }) {
		this.id = 0
		this.chain = chain
		this._debouncedExecute = debounce(TIMEOUT, () => this._execute())
		this._reset()
	}

	_reset() {
		const chainRpcs = multiRpc[this.chain]

		const provider = chainRpcs
			? chainRpcs[this.id % chainRpcs.length]
			: web3[this.chain]

		this.batch = new provider.eth.BatchRequest()
		this.id = this.id + 1

		this.counter = 0
	}

	async _execute() {
		this.batch.execute()

		this._reset()
	}

	_scheduleExecution() {
		this.counter >= MAX_SIZE
			? this._execute()
			: this._debouncedExecute()
	}

	async call({ call }: any) {
		let resolvePromise: any
		let rejectPromise: any

		const promise = new Promise((resolve, reject) => {
			resolvePromise = resolve
			rejectPromise = reject
		})

		this.counter++
		this.batch.add(call.call.request(
			(err: any, res: any) => err
				? rejectPromise({
					chain: this.chain,
					address: call._parent._address,
					name: call._method.name,
					err,
				})
				: resolvePromise(res),
		))

		this._scheduleExecution()

		return await promise
	}
}

