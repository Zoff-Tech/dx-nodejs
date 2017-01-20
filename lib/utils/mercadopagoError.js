var mercadopagoError = function mercadopagoError(message, cause, status, idempotencyId) {
  this.name = 'MercadoPagoError';
  this.message = message || 'Unknown Error';
  this.cause = cause || 'Unknown Cause';
  this.stack = (new Error()).stack;
  this.status = status || 500;
  this.idempotency = idempotencyId;
};

mercadopagoError.prototype = Object.create(Error.prototype);
mercadopagoError.prototype.constructor = mercadopagoError;

module.exports = mercadopagoError;