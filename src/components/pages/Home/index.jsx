import React, { useContext } from 'react'
import { StoreContext } from '../../../providers/stores';
import { SET_LOADING } from '../../../providers/actions';

export default () => {
    const { auth, app } = useContext(StoreContext);
    const { token, dispatch, updatetoken } = auth
    const { isLoading, dispatch: appDispatch } = app

   React.useEffect(() => {
       console.log(isLoading)
   }, [isLoading])
    
    return (
        <div onClick={() => appDispatch({ type: SET_LOADING, isLoading: !isLoading })}>
            Hello {token}
        </div>
    )
}
