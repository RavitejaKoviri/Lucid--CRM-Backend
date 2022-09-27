import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {Messages} from './components/Messages'
import {Compose} from './components/Compose'
import {Reply} from './components/Reply'

const chatBreadCrumbs: Array<PageLink> = [
  {
    title: 'Chat',
    path: '/apps/inbox/messages',
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

const InboxPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='messages'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Messages</PageTitle>
              <Messages />
            </>
          }
        />
        <Route
          path='compose'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>Compose</PageTitle>
              <Compose />
            </>
          }
        />
        <Route
          path='view-reply'
          element={
            <>
              <PageTitle breadcrumbs={chatBreadCrumbs}>View & Reply</PageTitle>
              <Reply />
            </>
          }
        />
        <Route index element={<Navigate to='/apps/inbox/messages' />} />
      </Route>
    </Routes>
  )
}

export default InboxPage
