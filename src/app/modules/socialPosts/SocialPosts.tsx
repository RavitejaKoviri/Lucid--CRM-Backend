import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import { FaceBookPosts } from './socialPosts-list/components/FaceBookPosts'
import { TwitterTweets } from './socialPosts-list/components/TwitterTweets'
import {Social} from './socialPosts-list/Social'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'SocialPosts',
    path: '/socialPosts',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const SocialPosts: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Social />
            <Outlet />
          </>
        }
      >
        <Route
          path='fbposts'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>FacebookPosts</PageTitle>
              <FaceBookPosts />
            </>
          }
        />
        <Route
          path='twitter'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Twitter Tweets</PageTitle>
              <TwitterTweets />
            </>
          }
        />
        <Route index element={<Navigate to='/socialPosts/fbposts' />} />
      </Route>
    </Routes>
  )
}

export default SocialPosts
