import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { TargetsWrapper } from '../pages/targets/Targets'
import { EditerPage } from '../pages/editer/EditerPage'
import { MenuTestPage } from '../pages/MenuTestPage'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import Adduser from '../modules/user-management/users-list/user-edit-modal/Adduser'
import LeadAdduser from '../modules/leads/leads-list/components/header/LeadAdduser'
import BookingAdduser from '../modules/booking/bookings-list/components/header/BookingAdduser'
import TargetAdduser from '../modules/Targets/Target-list/components/header/TargetAdduser'
import TicketAdduser from '../modules/Tickets/Ticket-list/components/header/TicketAddUser'
import ContactAdduser from '../modules/Contact/contacts-list/components/header/ContactAdduser'

import DealsAdduser from '../modules/deal/deals-list/components/header/DealsAdduser'


const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const InboxPage = lazy(() => import('../modules/apps/chat/InboxPage'))
  const UsersPage = lazy(() => import('../modules/user-management/UsersPage'))
  const LeadsPage = lazy(() => import('../modules/leads/LeadsPage'))
  const TargetPage = lazy(() => import('../modules/Targets/TargetPage'))
  const TasksPage = lazy(() => import('../modules/task/TasksPage'))
  const BookingsPage = lazy(() => import('../modules/booking/BookingsPage'))
  const ContactPage = lazy(() => import('../modules/Contact/ContactsPage'))
  const DealPage =lazy(() =>import('../modules/deal/DealsPage') )

  const TicketPage = lazy(() => import('../modules/Tickets/TicketPage'))
  
  

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* <Route path='targets' element={<TargetsWrapper />} /> */}
        <Route path='editer' element={<EditerPage />} />
        <Route path='apps/user-management/users/adduser' element={<Adduser />} />
        <Route path='leads/list/leadadduser' element={<LeadAdduser />} />
        <Route path='bookings/bookings/bookingadduser' element={<BookingAdduser/>} />
        <Route path='target/target/targetadduser' element={<TargetAdduser/>} />
        
        <Route path='deals/deals/dealsadduser' element={<DealsAdduser/>} />
        <Route path='ticket/ticket/ticketadduser' element={<TicketAdduser />} />
        <Route path='contacts/contacts/leadadduser' element={<ContactAdduser />} />


        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='contacts/*'
          element={
            <SuspensedView>
              <ContactPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='inbox/*'
          element={
            <SuspensedView>
              <InboxPage />
            </SuspensedView>
          }
        />
        
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
       
        <Route
          path='tasks/*'
          element={
            <SuspensedView>
              <TasksPage />
            </SuspensedView>
          }
        />
        <Route
          path='deals/*'
          element={
            <SuspensedView>
              <DealPage />
            </SuspensedView>
          }
        />
        <Route
          path='leads/*'
          element={
            <SuspensedView>
              <LeadsPage />
            </SuspensedView>
          }
        />
        <Route
          path='target/*'
          element={
            <SuspensedView>
              <TargetPage />
            </SuspensedView>
          }
        />
         <Route
          path='ticket/*'
          element={
            <SuspensedView>
              <TicketPage />
            </SuspensedView>
          }
        />

        <Route
          path='bookings/*'
          element={
            <SuspensedView>
              <BookingsPage />
            </SuspensedView>
          }
        />

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
