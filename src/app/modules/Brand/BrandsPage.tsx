import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { BrandsListWrapper } from './Brands-list/BrandsList'
// import { UsersList } from './Brand-list/UsersList'

const BrandsBreadcrumbs: Array<PageLink> = [
  {
    title: '',
    path: 'brands',
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

const BrandsPage = () => {
  return (

    <>
      <Routes>
        <Route element={<Outlet />}>

          <Route
            path='brands'
            element={
              <>
                {/* <PageTitle breadcrumbs={leadsBreadcrumbs}>Leads</PageTitle> */}
                <PageTitle>Brands</PageTitle>

                <BrandsListWrapper />
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
          <Route index element={<Navigate to='brands' />} />
        </Route>
      </Routes>
    </>

  )
}

export default BrandsPage
