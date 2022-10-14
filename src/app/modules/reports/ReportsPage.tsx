import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import { BookingsReport } from './pages/BookingsReport'
import { ContactsReport } from './pages/ContactsReport'
import { DealsReport } from './pages/DealsReport'
import {LeadsReport} from './pages/LeadsReport'
import {Settings} from './pages/settings/Settings'
import { TargetsReport } from './pages/TargetsReport'
import { TasksReport } from './pages/TasksReport'
import { TicketsReport } from './pages/TicketsReport'
import {Reports} from './Reports'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Reports',
    path: '/reports',
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

const ReportsPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Reports />
            <Outlet />
          </>
        }
      >
        <Route
          path='leads'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Leads</PageTitle>
              <LeadsReport />
            </>
          }
        />
        <Route
          path='contacts'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Contacts</PageTitle>
              <ContactsReport />
            </>
          }
        />
        <Route
          path='bookings'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Bookings</PageTitle>
              <BookingsReport />
            </>
          }
        />
        <Route
          path='deals'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Deals</PageTitle>
              <DealsReport />
            </>
          }
        />
        <Route
          path='targets'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Targets</PageTitle>
              <TargetsReport />
            </>
          }
        />
        <Route
          path='tickets'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Tickets</PageTitle>
              <TicketsReport />
            </>
          }
        />
        <Route
          path='tasks'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Tasks</PageTitle>
              <TasksReport />
            </>
          }
        />
        <Route index element={<Navigate to='/reports/leads' />} />
      </Route>
    </Routes>
  )
}

export default ReportsPage
