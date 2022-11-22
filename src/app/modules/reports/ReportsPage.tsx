import React from 'react'
import { useSelector } from 'react-redux'
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
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser=useSelector((state:any)=>state?.Dashboard?.RolePermissionsById)
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
        {user?.isSuperAdmin===true?
        <Route index element={<Navigate to='/reports/leads' />} />:<>
        {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Leads")?.length>0&& 
        <Route index element={<Navigate to='/reports/leads' />}/>}
        {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Contacts")?.length>0&& 
        <Route index element={<Navigate to='/reports/contacts' />}/>}
        {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Bookings")?.length>0&& 
        <Route index element={<Navigate to='/reports/bookings' />}/>}
        {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Deals")?.length>0&& 
        <Route index element={<Navigate to='/reports/deals' />}/>}
        {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Targets")?.length>0&& 
        <Route index element={<Navigate to='/reports/targets' />}/>}
        {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Tickets")?.length>0&& 
        <Route index element={<Navigate to='/reports/tickets' />}/>}
        {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Tasks")?.length>0&& 
        <Route index element={<Navigate to='/reports/tasks' />}/>}
        </>
        }
      </Route>
    </Routes>
  )
}

export default ReportsPage
