import TRANSACTION_TYPES from "utils/constants/transaction-types"

const getMainType = (type) => {
  switch (type) {
    case TRANSACTION_TYPES.TYPE_PAYMENT:
      return 'PAYMENT';
    case TRANSACTION_TYPES.TYPE_MESSAGING:
      return 'MESSAGE';
    case TRANSACTION_TYPES.TYPE_COLORED_COINS:
      return 'COLORED COINS';
    case TRANSACTION_TYPES.TYPE_DIGITAL_GOODS:
      return 'DIGITAL GOODS';
    case TRANSACTION_TYPES.TYPE_ACCOUNT_CONTROL:
      return 'ACCOUNT CONTROL';
    case TRANSACTION_TYPES.TYPE_MONETARY_SYSTEM:
      return 'MONETARY SYSTEM';
    case TRANSACTION_TYPES.TYPE_DATA:
      return 'DATA';
    case TRANSACTION_TYPES.TYPE_SHUFFLING:
      return 'SHUFFLING';
    default:
      return 'PAYMENT';
  }
}

export default getMainType