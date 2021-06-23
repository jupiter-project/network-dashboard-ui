
import { memo, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { OutlinedInput, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'

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
  const [query, setQuery] = useState('');

  const searchHandler = useCallback(() => {
    console.log(query)
  }, [query]);

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