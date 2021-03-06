class AppError extends Error {
	constructor(message, statusCode) {
		super(message);

		this.statusCode = statusCode || 500;
		this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

		// when the new object is created & a constructor function is called...
		// then that function call is not gonna appear in the stack trace & will not pollute it
		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = AppError;
