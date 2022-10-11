import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { BookingsListWrapper } from './bookings-list/BookingsList'

const bookingsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Booking Management',
    path: 'bookings',
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

const BookingsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='bookings'
          element={
            <>
              <PageTitle breadcrumbs={bookingsBreadcrumbs}>Bookings list</PageTitle>
              <BookingsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='bookings' />} />
    </Routes>
  )
}

export default BookingsPage
