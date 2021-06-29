
import { memo, useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CardWrapper from 'parts/CardWrapper'
import ValueItem from 'parts/ValueItem'
import ProductContent from 'parts/ProductContent'
import getJSONParse from 'utils/helpers/getJSONParse'
import { NQT_WEIGHT } from 'utils/constants/common'

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
    <CardWrapper title={`NFT: ${item.description}`}>
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
        label='Generator'
        value={item.accountRS}
      />
      <ValueItem
        label='Price'
        value={`${item.priceNQT / NQT_WEIGHT} JUP`}
      />
      <ValueItem
        label='Asset'
        value={item.asset}
      />
    </CardWrapper>
  )
};

export default memo(NFTDetail);