const errors = {
	504: '504 Request Timeout.',
	400: 'Client provided incorrect parameters for the request.',
	403: 'Access denied, either because of missing/incorrect credentials or used API token does not grant access to the requested resource.',
	404: 'Resource was not found.',
	429: 'Request was throttled, because amount of requests was above the threshold defined for the used API token.',
	500: 'Unknown error happened when handling the request.',
	503: ' **Clash Royale** is in maintenance, please try again later!'
};

/**
 * Represents an error for Clash of Clans API
 * @param {string} code - Status code.
 * @param {...any} args - Arguments.
 * @extends {Error}
 */
module.exports = class extends Error {
	constructor(code, args) {
		const message = args && args.message ? args.message : errors[code];
		super(message);
		this.code = code;
		this.message = message;
		if (args && args.reason) this.reason = args.reason;
	}

	get name() {
		return `Error [${this.code}]`;
	}

	get status() {
		return this.code;
	}

	get message() {
		return this.message;
	}
};
