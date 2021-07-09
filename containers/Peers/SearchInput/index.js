
import { memo, useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { OutlinedInput, Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 8,
    boxShadow: '0 2px 12px 0 #2774FE',
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

const SearchInput = ({
  onSearch
}) => {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  const searchHandler = useCallback(async () => {
    onSearch(query)
  }, [query, onSearch]);

  const closeHandler = useCallback(() => {
    onSearch('')
  }, [onSearch]);

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
        placeholder='Search in IP address/Platform'
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