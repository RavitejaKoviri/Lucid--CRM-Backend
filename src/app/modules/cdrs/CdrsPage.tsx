import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { CdrsListWrapper } from './cdrs-list/CdrsList'
// import { UsersList } from './users-list/UsersList'

const leadsBreadcrumbs: Array<PageLink> = [
  {
    title: '',
    path: 'cdr',
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

const CdrsPage = () => {
  return (

    <>
      <Routes>
        <Route element={<Outlet />}>

          <Route
            path='cdr'
            element={
              <>
                {/* <PageTitle breadcrumbs={leadsBreadcrumbs}>Leads</PageTitle> */}
                <PageTitle>CDR</PageTitle>

                <CdrsListWrapper />
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
          <Route index element={<Navigate to='cdr' />} />
        </Route>
      </Routes>
    </>

  )
}

export default CdrsPage
