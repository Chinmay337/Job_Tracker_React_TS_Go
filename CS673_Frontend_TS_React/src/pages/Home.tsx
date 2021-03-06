import React, {useEffect} from 'react'
import { StyledCardsContainer } from '../styles/styles'
import HomePageHeader from '../components/home/HomePageHeader'
import { useAuth0 } from '@auth0/auth0-react'
import {useAppDispatch, useAppSelector} from '../redux/app/hooks'
import { setUserToken } from '../redux/slices/model/user'
import JobCardList from '../components/job/JobCardList'


export const Home = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const dispatch = useAppDispatch()
  const userToken = useAppSelector(state => state.user.token)
  
  useEffect(()=> {
    if (isAuthenticated && user) {
    const getClaims = async () => {
      const claims = await getAccessTokenSilently()
      
      dispatch(setUserToken(claims))
    }
    getClaims()}
  }, [isAuthenticated, dispatch])
  
  
  
   
  return (
    <StyledCardsContainer >
      {userToken.length != 0  && (
        <>
          <HomePageHeader />
          <br />
          <br />
          <br />
          <JobCardList/>
        </>
      )}
    </StyledCardsContainer>
  )

}