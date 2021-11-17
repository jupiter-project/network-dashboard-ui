
import { memo, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { OutlinedInput, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'

import * as jupiterAPI from 'services/api-jupiter'
import LINKS from 'utils/constants/links'
import usePopUp from 'utils/hooks/usePopUp'

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    border: `1px solid ${theme.palette.background.primary}`,
    borderRight: 0,
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.default,
    '& input': {
      padding: theme.spacing(2),
      '&::placeholder': {
        opacity: 1,
        fontStyle: 'italic'
      },
      '&:-ms-input-placeholder': {
        opacity: 1,
        fontStyle: 'italic'
      },
      '&::-ms-input-placeholder': {
        opacity: 1,
        fontStyle: 'italic'
      },
    },
  },
  adornedEnd: {
    paddingRight: theme.spacing(1)
  },
  closeIcon: {
    fontSize: 18,
    cursor: 'pointer'
  },
  button: {
    height: 52,
    minWidth: 52,
    padding: 0,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.primary,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }
}));

const SearchInput = () => {
  const classes = useStyles();
  const router = useRouter();
  const { setPopUp } = usePopUp()
  const [query, setQuery] = useState('');

  const searchHandler = useCallback(async () => {
    try {
      // check account
      let response = await jupiterAPI.getAccount(query);
      if (!response?.errorCode) {
        router.push(
          LINKS.ACCOUNT.HREF,
          LINKS.ACCOUNT.HREF.replace('[account]', response.account)
        )
        return;
      }

      // check asset
      response = await jupiterAPI.getAsset(query);
      if (!response?.errorCode) {
        router.push(
          LINKS.ASSET.HREF,
          LINKS.ASSET.HREF.replace('[asset]', response.asset)
        )
        return;
      }

      // check alias
      response = await jupiterAPI.getAliasByID(query);
      if (!response?.errorCode) {
        router.push(
          LINKS.ACCOUNT.HREF,
          LINKS.ACCOUNT.HREF.replace('[account]', response.account)
        )
        return;
      }

      response = await jupiterAPI.getAliasByName(query);
      if (!response?.errorCode) {
        router.push(
          LINKS.ACCOUNT.HREF,
          LINKS.ACCOUNT.HREF.replace('[account]', response.account)
        )
        return;
      }

      // check transaction
      response = await jupiterAPI.getTransaction(query);
      if (!response?.errorCode) {
        router.push(
          LINKS.TRANSACTION.HREF,
          LINKS.TRANSACTION.HREF.replace('[transaction]', response.transaction)
        )
        return;
      }

      setPopUp({
        text: 'There is no this kind of Data.'
      })
    } catch (error) {
      console.log(error)
    }
  }, [query, router, setPopUp]);

  const closeHandler = useCallback(() => {
    setQuery('')
  }, [setQuery]);

  return (
    <div className={classes.searchContainer}>
      <OutlinedInput
        className={classes.textField}
        classes={{
          adornedEnd: classes.adornedEnd
        }}
        endAdornment={
          <CloseIcon
            className={classes.closeIcon}
            onClick={closeHandler}
          />
        }
        placeholder='Search in tx/account/alias/asset Id'
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <Button
        variant='outlined'
        className={classes.button}
        onClick={searchHandler}
      >
        <SearchIcon />
      </Button>
    </div>
  )
}

export default memo(SearchInput);