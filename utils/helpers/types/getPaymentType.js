import TRANSACTION_TYPES from "utils/constants/transaction-types"

const getPaymentType = (type) => {
  switch (type) {
    case TRANSACTION_TYPES.SUBTYPE_PAYMENT_ORDINARY_PAYMENT:
      return 'ORDINARY PAYMENT';
    default:
      return 'ORDINARY PAYMENT';
  }
}

export default getPaymentType