import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {LeadsListWrapper} from './leads-list/LeadsList'

const leadsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Leads',
    path: '/apps/leads/list',
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

const LeadsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='list'
          element={
            <>
              <PageTitle breadcrumbs={leadsBreadcrumbs}>Leads</PageTitle>
              <LeadsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/leads/list' />} />
    </Routes>
  )
}

export default LeadsPage
