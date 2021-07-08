
import { memo, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import ProductContent from 'parts/ProductContent'
import getJSONParse from 'utils/helpers/getJSONParse'
import { NQT_WEIGHT } from 'utils/constants/common'
import LINKS from 'utils/constants/links'

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: 320,
    objectFit: 'contain',
    marginBottom: theme.spacing(3)
  },
}));

const NFTDetail = ({
  item
}) => {
  const classes = useStyles();

  const info = useMemo(() => getJSONParse(item?.message), [item]);

  return (
    <CardWrapper
      title={`NFT: ${item.description}`}
      link={LINKS.LEDA_NFT_DETAIL.HREF.replace('[asset]', item.asset)}
    >
      <ProductContent
        info={info}
        className={classes.image}
      />
      <ValueItem
        label='Name'
        value={item.description}
      />
      <ValueItem
        label='Description'
        value={info.description}
      />
      <ValueItem
        label='Type'
        value={item.type}
      />
      <ValueItem
        label='Generator'
        value={item.accountRS}
        link={LINKS.ACCOUNT.HREF.replace('[account]', item.account)}
      />
      <ValueItem
        label='Price'
        value={`${item.priceNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Quantity'
        value={info.quantityQNT}
      />
      <ValueItem
        label='Asset'
        value={item.asset}
        link={LINKS.ASSET.HREF.replace('[asset]', item.asset)}
      />
    </CardWrapper>
  )
};

export default memo(NFTDetail);