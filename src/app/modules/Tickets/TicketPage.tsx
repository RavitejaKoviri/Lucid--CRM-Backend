import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { TicketListWrapper } from './Ticket-list/TicketList'

const TicketsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Ticket Management',
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

const TicketPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='ticket'
          element={
            <>
              <PageTitle breadcrumbs={TicketsBreadcrumbs}>Ticket list</PageTitle>
              <TicketListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='ticket' />} />
    </Routes>
  )
}

export default TicketPage
