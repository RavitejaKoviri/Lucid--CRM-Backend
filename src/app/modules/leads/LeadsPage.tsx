import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { LeadsListWrapper } from './leads-list/LeadsList'
// import { UsersList } from './users-list/UsersList'

// const leadsBreadcrumbs: Array<PageLink> = [
//   {
//     title: '',
//     path: 'list',
//     isSeparator: false,
//     isActive: false,
//   },
//   {
//     title: '',
//     path: '',
//     isSeparator: true,
//     isActive: false,
//   },
// ]

const LeadsPage = () => {
  return (

    <>
      <Routes>
        <Route element={<Outlet />}>

          <Route
            path='list'
            element={
              <>
                {/* <PageTitle breadcrumbs={leadsBreadcrumbs}>Leads</PageTitle> */}
                <PageTitle>Leads</PageTitle>

                <LeadsListWrapper />
              </>
            }
          />
          {/* <Route
            path='contacts'
            element={
              <>
                <PageTitle breadcrumbs={leadsBreadcrumbs}>Contacts</PageTitle>
                <UsersList />
              </>
            }
          /> */}
          <Route index element={<Navigate to='list' />} />
        </Route>
      </Routes>
    </>

  )
}

export default LeadsPage
