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
  const TaskPage = lazy(() => import('../modules/task/TasksPage'))
  const BookingsPage = lazy(() => import('../modules/booking/BookingsPage'))
  const ContactPage = lazy(() => import('../modules/Contact/ContactsPage'))


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
          path='leads/tasks'
          element={
            <SuspensedView>
              <TaskPage />
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
