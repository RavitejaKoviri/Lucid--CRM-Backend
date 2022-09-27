import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersList} from './users-list/UsersList'

const userContactsBreadcrumbs: Array<PageLink> = [
  {
    title: 'User Contacts',
    path: '/apps/user-contacts/users',
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

const UserContactsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users'
          element={
            <>
              <PageTitle breadcrumbs={userContactsBreadcrumbs}>Users list</PageTitle>
              <UsersList />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/user-contacts/users' />} />
    </Routes>
  )
}

export default UserContactsPage
