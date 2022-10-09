/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSubMain} from './AsideMenuItemWithSubMain'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()
  return (
    <>
      {/* <AsideMenuItem
        to='/dashboard'
        title="Home"
        fontIcon='bi-house fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      /> */}
      <AsideMenuItemWithSubMain
        to='/leads'
        title='CRM'
        // bsTitle='Leads'
        fontIcon='bi-gear'
      >
        <AsideMenuItem to='/leads/list' title='Leads' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/leads/bookings' title='Bookings' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/leads/contacts' title='Contacts' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/leads/deals' title='Deals' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/leads/tasks' title='Tasks' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/leads/tickets' title='Tickets' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='leads/targets' title='Targets' fontIcon='bi-layers fs-3' />

        {/* <AsideMenuItem
          to={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
          outside={true}
          title={`Changelog ${process.env.REACT_APP_VERSION}`}
          fontIcon='bi-card-text fs-3'
        /> */}
      </AsideMenuItemWithSubMain>
      <AsideMenuItemWithSubMain
          to='/campaigns'
        title="Campaigns"
        fontIcon='bi-house fs-2'
      >
        <AsideMenuItem to='/leads/email' title='Email Campaigns' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/leads/forms' title='Forms' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/leads/automation' title='Automation' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/leads/social' title='Social Media Campaigns' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='leads/landingPages' title='Landing Page Campaigns' fontIcon='bi-layers fs-3' />
      </AsideMenuItemWithSubMain>
     
       {/* <AsideMenuItem
        to='/forms'
        title="Forms"
        fontIcon='bi-card-text fs-3'
        // bsTitle={"Targets"}
        className='py-2'
      />
       <AsideMenuItem
        to='/automation'
        title="Automation"
        fontIcon='bi-house fs-2'
        // bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      /> */}
      
       <AsideMenuItem
        to='/reports'
        title="Reports"
        fontIcon='bi-house fs-2'
        // bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />
      <AsideMenuItemWithSubMain
        to='/inbox'
        title='Inbox'
        fontIcon='bi-file-text'
        bsTitle={"E-Mail"}
      >
       
        <AsideMenuItem
          to='/inbox/messages'
          title='Messages'
          bsTitle='Messages'
          fontIcon='bi-card-text fs-3'
        />
        <AsideMenuItem
          to='/inbox/compose'
          title='Compose'
          bsTitle='Compose'
          fontIcon='bi-card-text fs-3'
        />
        <AsideMenuItem
          to='/inbox/view-reply'
          title='View & Reply'
          bsTitle='View & Reply'
          fontIcon='bi-card-text fs-3'
        />
       
      </AsideMenuItemWithSubMain>
      <AsideMenuItemWithSubMain
        to='/settings'
        title='Settings'
        // bsTitle='Leads'
        fontIcon='bi-gear'
      >
        <AsideMenuItem to='/settings/sources' title='Sources' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/settings/brands' title='Brands' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/settings/departments' title='Departments' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/settings/team-members' title='Team Members' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/settings/roles' title='Tickets' fontIcon='bi-layers fs-3' />
        {/* <AsideMenuItem to='/settings/contacts' title='Targets' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/settings/contacts' title='Contacts' fontIcon='bi-layers fs-3' /> */}

       
      </AsideMenuItemWithSubMain>
      {/* settings should have sources config, team members  */}
      {/* <AsideMenuItem
        to='/editer'
        title="Editer"
        fontIcon='bi-card-text fs-3'
        bsTitle={"Editer"}
        className='py-2'
      /> */}

      <AsideMenuItemWithSubMain
        to='/crafted/pages'
        title='Crafted'
        fontIcon='bi-file-text'
        bsTitle='Crafted'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/profile/overview'
            title='Overview'
            bsTitle='Overview'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/projects'
            title='Projects'
            bsTitle='Projects'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            bsTitle='Campaigns'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            bsTitle='Documents'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
            bsTitle='Connections'
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
            bsTitle='Horizontal'
          />
          <AsideMenuItem
            to='/crafted/pages/wizards/vertical'
            title='Vertical'
            bsTitle='Vertical'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/accounts' title='Accounts' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/account/overview'
            title='Overview'
            hasBullet={true}
            bsTitle='Overview'
          />
          <AsideMenuItem
            to='/crafted/account/settings'
            title='Settings'
            hasBullet={true}
            bsTitle='Settings'
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/widgets' title='Widgets' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/widgets/lists'
            title='Lists'
            bsTitle='Lists'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/statistics'
            title='Statistics'
            bsTitle='Statistics'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/charts'
            title='Charts'
            bsTitle='Charts'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/mixed'
            title='Mixed'
            bsTitle='Mixed'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/tables'
            title='Tables'
            bsTitle='Tables'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/crafted/widgets/feeds'
            title='Feeds'
            bsTitle='Feeds'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/apps/chat' title='Chat' hasBullet={true}>
          <AsideMenuItem
            to='/apps/chat/private-chat'
            title='Private Chat'
            bsTitle='Private Chat'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/apps/chat/group-chat'
            title='Group Chart'
            bsTitle='Group Chart'
            hasBullet={true}
          />
          <AsideMenuItem
            to='/apps/chat/drawer-chat'
            title='Drawer Chart'
            bsTitle='Drawer Chart'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/error' title='Errors' hasBullet={true}>
          <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
          <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
        </AsideMenuItemWithSub>
        <AsideMenuItem
          to='/apps/user-management/users'
          title='User management'
          hasBullet={true}
          bsTitle='User management'
        />
      </AsideMenuItemWithSubMain>
    </>
  )
}
