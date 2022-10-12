import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { DealsListWrapper } from './deals-list/DealList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: '',
    path: 'deals',
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

const DealsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='deals'
          element={
            <>
              {/* <PageTitle breadcrumbs={usersBreadcrumbs}>Deal List</PageTitle> */}
              <PageTitle>Deal List</PageTitle>
              <DealsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='deals' />} />
    </Routes>
  )
}

export default DealsPage
