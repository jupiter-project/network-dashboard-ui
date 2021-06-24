import TRANSACTION_TYPES from "utils/constants/transaction-types"

const getColoredCoinType = (type) => {
  switch (type) {
    case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_ASSET_ISSUANCE:
      return 'ASSET ISSUANCE';
    case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_ASSET_TRANSFER:
      return 'ASSET TRANSFER';
    case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_ASK_ORDER_PLACEMENT:
      return 'ASK ORDER PLACEMENT';
    case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_BID_ORDER_PLACEMENT:
      return 'BID ORDER PLACEMENT';
    case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_ASK_ORDER_CANCELLATION:
      return 'ASK ORDER CANCELLATION';
    case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_BID_ORDER_CANCELLATION:
      return 'BID ORDER CANCELLATION';
    case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_DIVIDEND_PAYMENT:
      return 'DIVIDEND PAYMENT';
    case TRANSACTION_TYPES.SUBTYPE_COLORED_COINS_ASSET_DELETE:
      return 'ASSET DELETE';
    default:
      return 'ASSET ISSUANCE';
  }
}

export default getColoredCoinType