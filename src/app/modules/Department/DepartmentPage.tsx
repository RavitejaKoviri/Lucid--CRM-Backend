import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { DepartmentListWrapper } from './Department-list/DepartmentList'
// import { UsersList } from './Brand-list/UsersList'

const DepartmentBreadcrumbs: Array<PageLink> = [
  {
    title: '',
    path: 'department',
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

const DepartmentPage = () => {
  return (

    <>
      <Routes>
        <Route element={<Outlet />}>

          <Route
            path='department'
            element={
              <>
                {/* <PageTitle breadcrumbs={leadsBreadcrumbs}>Leads</PageTitle> */}
                <PageTitle>Department</PageTitle>

                <DepartmentListWrapper />
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
          <Route index element={<Navigate to='department' />} />
        </Route>
      </Routes>
    </>

  )
}

export default DepartmentPage
