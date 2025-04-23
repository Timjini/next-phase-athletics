export class PaymentConfirmationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "PaymentConfirmationError";
    }
  }