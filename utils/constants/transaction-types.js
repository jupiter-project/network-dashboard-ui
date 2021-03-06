
const TRANSACTION_TYPES = {
  TYPE_PAYMENT: 0,
  TYPE_MESSAGING: 1, TYPE_COLORED_COINS: 2,
  TYPE_DIGITAL_GOODS: 3,
  TYPE_ACCOUNT_CONTROL: 4,
  TYPE_MONETARY_SYSTEM: 5,
  TYPE_DATA: 6,
  TYPE_SHUFFLING: 7,
  TYPE_DATA_FS: 8,
  SUBTYPE_PAYMENT_ORDINARY_PAYMENT: 0,
  SUBTYPE_MESSAGING_ARBITRARY_MESSAGE: 0,
  SUBTYPE_MESSAGING_ALIAS_ASSIGNMENT: 1,
  SUBTYPE_MESSAGING_POLL_CREATION: 2,
  SUBTYPE_MESSAGING_VOTE_CASTING: 3,
  SUBTYPE_MESSAGING_HUB_ANNOUNCEMENT: 4,
  SUBTYPE_MESSAGING_ACCOUNT_INFO: 5,
  SUBTYPE_MESSAGING_ALIAS_SELL: 6,
  SUBTYPE_MESSAGING_ALIAS_BUY: 7,
  SUBTYPE_MESSAGING_ALIAS_DELETE: 8,
  SUBTYPE_MESSAGING_PHASING_VOTE_CASTING: 9,
  SUBTYPE_MESSAGING_ACCOUNT_PROPERTY: 10,
  SUBTYPE_MESSAGING_ACCOUNT_PROPERTY_DELETE: 11,
  SUBTYPE_MESSAGING_METIS_ACCOUNT_INFO: 12,
  SUBTYPE_MESSAGING_METIS_CHANNEL_INVITATION: 13,
  SUBTYPE_MESSAGING_METIS_CHANNEL_MEMBER: 14,
  SUBTYPE_MESSAGING_METIS_ARBITRARY_MESSAGE: 15,
  SUBTYPE_COLORED_COINS_ASSET_ISSUANCE: 0,
  SUBTYPE_COLORED_COINS_ASSET_TRANSFER: 1,
  SUBTYPE_COLORED_COINS_ASK_ORDER_PLACEMENT: 2,
  SUBTYPE_COLORED_COINS_BID_ORDER_PLACEMENT: 3,
  SUBTYPE_COLORED_COINS_ASK_ORDER_CANCELLATION: 4,
  SUBTYPE_COLORED_COINS_BID_ORDER_CANCELLATION: 5,
  SUBTYPE_COLORED_COINS_DIVIDEND_PAYMENT: 6,
  SUBTYPE_COLORED_COINS_ASSET_DELETE: 7,
  SUBTYPE_DIGITAL_GOODS_LISTING: 0,
  SUBTYPE_DIGITAL_GOODS_DELISTING: 1,
  SUBTYPE_DIGITAL_GOODS_PRICE_CHANGE: 2,
  SUBTYPE_DIGITAL_GOODS_QUANTITY_CHANGE: 3,
  SUBTYPE_DIGITAL_GOODS_PURCHASE: 4,
  SUBTYPE_DIGITAL_GOODS_DELIVERY: 5,
  SUBTYPE_DIGITAL_GOODS_FEEDBACK: 6,
  SUBTYPE_DIGITAL_GOODS_REFUND: 7,
  SUBTYPE_ACCOUNT_CONTROL_EFFECTIVE_BALANCE_LEASING: 0,
  SUBTYPE_ACCOUNT_CONTROL_PHASING_ONLY: 1,
  SUBTYPE_DATA_TAGGED_DATA_UPLOAD: 0,
  SUBTYPE_DATA_TAGGED_DATA_EXTEND: 1,
  SUBTYPE_DATA_FS_METADATA: 0,
  SUBTYPE_DATA_FS_BINARY: 1,
}

export default TRANSACTION_TYPES