import TRANSACTION_TYPES from "utils/constants/transaction-types"

const getAccountControlType = (type) => {
  switch (type) {
    case TRANSACTION_TYPES.SUBTYPE_ACCOUNT_CONTROL_EFFECTIVE_BALANCE_LEASING:
      return 'EFFECTIVE BALANCE LEASING';
    case TRANSACTION_TYPES.SUBTYPE_ACCOUNT_CONTROL_PHASING_ONLY:
      return 'CONTROL PHASING ONLY';
    default:
      return 'EFFECTIVE BALANCE LEASING';
  }
}

export default getAccountControlType