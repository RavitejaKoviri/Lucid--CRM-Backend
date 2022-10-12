import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { TargetListWrapper } from './Target-list/TargetList'

const TargetsBreadcrumbs: Array<PageLink> = [
  {
    title: '',
    path: 'target',
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

const TargetPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='target'
          element={
            <>
              <PageTitle>Target list</PageTitle>
              <TargetListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='target' />} />
    </Routes>
  )
}

export default TargetPage
