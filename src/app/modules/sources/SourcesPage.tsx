import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { SourcesListWrapper } from './sources-list/SourcesList'
// import { SourcesListWrapper } from './Sources-list/SourcesList'
// import { UsersList } from './users-list/UsersList'

const leadsBreadcrumbs: Array<PageLink> = [
  {
    title: '',
    path: 'source',
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

const SourcesPage = () => {
  return (

    <>
      <Routes>
        <Route element={<Outlet />}>

          <Route
            path='source'
            element={
              <>
                {/* <PageTitle breadcrumbs={leadsBreadcrumbs}>Leads</PageTitle> */}
                <PageTitle>Sources</PageTitle>

                <SourcesListWrapper />
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
          <Route index element={<Navigate to='source' />} />
        </Route>
      </Routes>
    </>

  )
}

export default SourcesPage
