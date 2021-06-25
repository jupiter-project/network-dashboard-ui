import TRANSACTION_TYPES from "utils/constants/transaction-types"

const getMessagingType = (type) => {
  switch (type) {
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ARBITRARY_MESSAGE:
      return 'ARBITRARY MESSAGE';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ALIAS_ASSIGNMENT:
      return 'ALIAS ASSIGNMENT';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_POLL_CREATION:
      return 'POLL CREATION';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_VOTE_CASTING:
      return 'VOTE CASTING';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_HUB_ANNOUNCEMENT:
      return 'HUB ANNOUNCEMENT';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ACCOUNT_INFO:
      return 'ACCOUNT INFO';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ALIAS_SELL:
      return 'ALIAS SELL';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ALIAS_BUY:
      return 'ALIAS BUY';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ALIAS_DELETE:
      return 'ALIAS DELETE';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_PHASING_VOTE_CASTING:
      return 'PHASING VOTE CASTING';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ACCOUNT_PROPERTY:
      return 'ACCOUNT PROPERTY';
    case TRANSACTION_TYPES.SUBTYPE_MESSAGING_ACCOUNT_PROPERTY_DELETE:
      return 'ACCOUNT PROPERTY DELETE';
    default:
      return 'ARBITRARY MESSAGE';
  }
}

export default getMessagingType