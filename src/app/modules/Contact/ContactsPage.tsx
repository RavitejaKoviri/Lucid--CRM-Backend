import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { ContactsListWrapper } from './contacts-list/ContactsList'

const contactsBreadcrumbs: Array<PageLink> = [
  {
    title: '',
    path: 'contacts',
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

const ContactsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='contacts'
          element={
            <>
              {/* <PageTitle breadcrumbs={contactsBreadcrumbs}>Contacts</PageTitle> */}
              <PageTitle >Contacts</PageTitle>

              <ContactsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='contacts' />} />
    </Routes>
  )
}

export default ContactsPage
