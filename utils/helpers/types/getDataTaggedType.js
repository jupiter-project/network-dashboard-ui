import TRANSACTION_TYPES from "utils/constants/transaction-types"

const getDataTaggedType = (type) => {
  switch (type) {
    case TRANSACTION_TYPES.SUBTYPE_DATA_TAGGED_DATA_UPLOAD:
      return 'DATA UPLOAD';
    case TRANSACTION_TYPES.SUBTYPE_DATA_TAGGED_DATA_EXTEND:
      return 'DATA EXTEND';
    default:
      return 'DATA UPLOAD';
  }
}

export default getDataTaggedType