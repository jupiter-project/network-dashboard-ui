
import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  setAccountRS,
  setCurrentUser,
} from 'actions/auth'
import scrollToTop from 'utils/helpers/scrollToTop'
import { isServer } from 'utils/helpers/utility'

const InitProvider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const accountRS = isServer() ? '' : localStorage.accountRS;
    const currentUser = isServer() ? null : localStorage.currentUser;

    if (!!accountRS) {
      dispatch(setAccountRS(accountRS))
    }

    if (!!currentUser) {
      dispatch(setCurrentUser(JSON.parse(currentUser)))
    }
  }, [dispatch])

  useEffect(() => {
    scrollToTop()
  }, [])

  return <div />
};

export default memo(InitProvider);