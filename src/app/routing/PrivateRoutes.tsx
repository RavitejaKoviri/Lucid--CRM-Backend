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

import DealsAdduser from '../modules/deal/deals-list/components/header/DealsAdduser'
import { Campaigns } from '../pages/campaigns/campaigns'
// import { EmailCampaigns } from '../pages/campaigns/emailCampaigns'
// import { SocialCampaigns } from '../pages/campaigns/socialCampaigns'
import { PageCampaigns } from '../pages/campaigns/pageCampaigns'
import { PostCampaigns } from '../pages/campaigns/postCampaingns'
import TaskAdduser from '../modules/task/tasks-list/components/header/TaskAdduser'
import ContactsAdduser from '../modules/Contact/contacts-list/components/header/ContactsAdduser'
import CampaignAdduser from '../modules/campaign/campaigns-list/components/header/CampaignAdduser'
import CampaignCreate from '../modules/campaign/campaigns-list/components/body/campaignCreate'
import SignupForm from '../modules/campaign/campaigns-list/components/body/components/signupForm'
import Templates from '../modules/campaign/campaigns-list/components/body/components/formTemplates'
import EmailCampaign from '../modules/campaign/campaigns-list/components/body/components/emailCampaign'
import CampaignAutomation from '../modules/campaign/campaigns-list/components/body/components/campaignAutomation'
import SocialCampaigns from '../modules/campaign/campaigns-list/components/body/components/socialCampaigns'
import SourceAdduser from '../modules/sources/sources-list/components/header/SourcesAdduser'

// import SourcesAdduser from '../modules/sources/sources-list/components/header/SourcesAdduser'

import AddDepartment from '../modules/Department/Department-list/components/header/AddDepartment'
import AddBrands from '../modules/Brand/Brands-list/components/header/AddBrands'
import CdrsPage from '../modules/cdrs/CdrsPage'
import CdrAdduser from '../modules/cdrs/cdrs-list/components/header/CdrAdduser'
// import CompanyPage from '../modules/Company/CompanyPage'
// import AddCompany from '../modules/Company/Company-list/components/header/AddCompany'
// import AddBrand from '../modules/Brand/Brands-list/components/header/AddBrand'
import ReportsPage from '../modules/reports/ReportsPage'
import RolesList from '../modules/Roles/rolesList.js'
import ViewRoles from '../modules/Roles/viewRoles'
import UserAdduser from '../modules/user-management/users-list/components/header/UserAddUser'
import EditTask from '../modules/task/tasks-list/components/header/EditTask'
import EditLead from '../modules/leads/leads-list/components/header/EditLead'
import Editcontact from '../modules/Contact/contacts-list/components/header/Editcontact'
import EditCampaign from '../modules/campaign/campaigns-list/components/header/Editcampaign'
import EditCdr from '../modules/cdrs/cdrs-list/components/header/EditCdr'
import EditCompany from '../modules/Company/Company-list/components/header/EditCompany'
import EditDeals from '../modules/deal/deals-list/components/header/EditDeals'
import EditTarget from '../modules/Targets/Target-list/components/header/EditTarget'
import EditTicket from '../modules/Tickets/Ticket-list/components/header/EditTicket'
import EditSource from '../modules/sources/sources-list/components/header/EditSources'
import EditBrands from '../modules/Brand/Brands-list/components/header/EditBrands'
import EditDepartment from '../modules/Department/Department-list/components/header/EditDepartment'



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
  const DealPage = lazy(() => import('../modules/deal/DealsPage'))

  const TicketPage = lazy(() => import('../modules/Tickets/TicketPage'))
  const CampaignPage = lazy(() => import('../modules/campaign/CampaignsPage'))

  const BrandsPage = lazy(() => import('../modules/Brand/BrandsPage'))
  const DepartmentPage = lazy(() => import('../modules/Department/DepartmentPage'))
  const SourcesPage = lazy(() => import('../modules/sources/SourcesPage'))
  const CompanyPage = lazy(() => import('../modules/Company/CompanyPage'))
  const AddCompany = lazy(() => import('../modules/Company/Company-list/components/header/AddCompany'))


  return (
    <Routes>
      <Route path='/leads/landingPages' element={<Campaigns />} />
      {/* <Route path='/leads/email' element={<EmailCampaigns />} /> */}
      {/* <Route path='/leads/social' element={<SocialCampaigns />} /> */}
      <Route path='/leads/social/pagecampaign' element={<PageCampaigns />} />
      <Route path='/leads/social/postcampaign' element={<PostCampaigns />} />
      {/* <Route path= '/Campaigns/Campaigns' element={<CampaignPage />} /> */}

      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* <Route path='targets' element={<TargetsWrapper />} /> */}
        <Route path='editor' element={<EditerPage />} />
        <Route path='team-members/team-members/adduser' element={<UserAdduser />} />
        <Route path='leads/list/leadadduser' element={<LeadAdduser />} />
        <Route path='leads/list/EditLead' element={<EditLead />} />
        <Route path='bookings/bookings/bookingadduser' element={<BookingAdduser />} />
        <Route path='target/target/targetadduser' element={<TargetAdduser />} />
        <Route path='target/target/EditTarget' element={<EditTarget />} />

        <Route path='brands/brands/addBrands' element={<AddBrands />} />
        <Route path='brands/brands/EditBrands' element={<EditBrands />} />

        <Route path='department/department/addDepartment' element={<AddDepartment />} />
        <Route path='department/department/EditDepartment' element={<EditDepartment />} />

        {/* <Route path='brand/brand/addBrand' element={<AddBrand />} /> */}

        <Route path='deals/deals/dealsadduser' element={<DealsAdduser />} />
        <Route path='deals/deals/EditDeal' element={<EditDeals />} />

        <Route path='ticket/ticket/ticketadduser' element={<TicketAdduser />} />
        <Route path='ticket/ticket/EditTicket' element={<EditTicket />} />

        <Route path='tasks/tasks/taskAdduser' element={<TaskAdduser />} />
        <Route path='tasks/tasks/EditTask' element={<EditTask />} />
        <Route path='campaigns/campaigns/campaignadduser' element={<CampaignAdduser />} />
        <Route path='campaigns/campaigns/EditCampaign' element={<EditCampaign />} />
        <Route path='campaigns/campaigns/campaigncreate' element={<CampaignCreate />} />
        <Route path='campaigns/campaigns/campaigncreate/signupform' element={<SignupForm />} />
        <Route path='campaigns/campaigns/campaigncreate/signupform/templates' element={<Templates />} />
        <Route path='campaigns/campaigns/campaigncreate/emailcampaign' element={<EmailCampaign />}/>
        <Route path='campaigns/campaigns/campaigncreate/campaignautomation' element={<CampaignAutomation />}/>
        <Route path='campaigns/campaigns/campaigncreate/socialcampaign' element={<SocialCampaigns />}/>

        <Route path='contacts/contacts/contactaddcontact' element={<ContactsAdduser />} />
        <Route path='contacts/contacts/Editcontact' element={<Editcontact />} />

        <Route path='sources/source/addsource' element={<SourceAdduser />} />
        <Route path='sources/source/EditSource' element={<EditSource />} />


        <Route path='cdr/cdr/cdradduser' element={<CdrAdduser />} />
        <Route path='cdr/cdr/cdradduser' element={<CdrAdduser />} />
        <Route path='cdr/cdr/EditCdr' element={<EditCdr />} />

        <Route path='/apps/user-management/roles/list' element={<RolesList />} />
        <Route path='/apps/user-management/roles/view' element={<ViewRoles />} />

        <Route path='/company' element={<CompanyPage />} />
        <Route path='/company/company/AddCompany' element={<AddCompany />} />
        <Route path='/company/company/EditCompany' element={<EditCompany />} />

        {/* <Route path='sourcesadduser' element={<SourcesPage/>}/> */}


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
          path='campaigns/*'
          element={
            <SuspensedView>
              <CampaignPage />
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
          path='team-members/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        /> */}

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

        <Route
          path='brands/*'
          element={
            <SuspensedView>
              <BrandsPage />
            </SuspensedView>
          }
        />

        <Route
          path='department/*'
          element={
            <SuspensedView>
              <DepartmentPage />
            </SuspensedView>
          }
        />
        <Route
          path='sources/*'
          element={
            <SuspensedView>
              <SourcesPage />
            </SuspensedView>
          } />

        <Route
          path='brands/*'
          element={
            <SuspensedView>
              <LeadsPage />
            </SuspensedView>
          }
        />
        <Route
          path='departments/*'
          element={
            <SuspensedView>
              <LeadsPage />
            </SuspensedView>
          }
        />
        <Route
          path='reports/*'
          element={
            <SuspensedView>
              <ReportsPage />
            </SuspensedView>
          }
        />
        <Route
          path='cdr/*'
          element={
            <SuspensedView>
              <CdrsPage />
            </SuspensedView>
          } />

        <Route
          path='company/*'
          element={
            <SuspensedView>
              <CompanyPage />
            </SuspensedView>
          } />
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
