/* eslint-disable react/jsx-no-target-blank */
import { useIntl } from "react-intl";
import { AsideMenuItemWithSubMain } from "./AsideMenuItemWithSubMain";
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";
import { LEADS } from "../../../../app/modules/leads/leads-list/_redux/leadCrud";
import LeadsPage from "../../../../app/modules/leads/LeadsPage";
import { LeadsListWrapper } from "../../../../app/modules/leads/leads-list/LeadsList";
import LeadAdduser from "../../../../app/modules/leads/leads-list/components/header/LeadAdduser";
import { LeadsListToolbar } from "../../../../app/modules/leads/leads-list/components/header/LeadsListToolbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRolePermissionsByUserId } from "../../../../app/pages/dashboard/_redux/dashboardAction";

export function AsideMenuMain() {
  const intl = useIntl();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.auth?.user);
  const token = useSelector((state: any) => state?.auth?.authToken);
  const rolePermissionsByUser = useSelector(
    (state: any) => state?.Dashboard?.RolePermissionsById
  );
  // const roleFilter=rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Leads")
  useEffect(() => {
    dispatch(fetchRolePermissionsByUserId(user?.crmrole?.id, token));
  }, [dispatch]);
  console.log("rolePermissionsByUser", rolePermissionsByUser);
  console.log("user", user);
  // console.log("roleFilter",roleFilter);

  return (
    <>
      {user?.isSuperAdmin === true ? (
        <>
          <AsideMenuItemWithSubMain
            to="/leads"
            title="CRM"
            // bsTitle='Leads'
            fontIcon="bi-gear"
          >
            <AsideMenuItem
              to="/leads/list"
              title="Leads"
              fontIcon="bi-layers fs-3"
            />
            <AsideMenuItem
              to="contacts"
              title="Contacts"
              fontIcon="bi-layers fs-3"
            />
            <AsideMenuItem
              to="/bookings"
              title="Bookings"
              fontIcon="bi-layers fs-3"
            />
            <AsideMenuItem
              to="/deals"
              title="Deals"
              fontIcon="bi-layers fs-3"
            />

            {/* <AsideMenuItem to='/leads/tickets' title='Tickets' fontIcon='bi-layers fs-3' /> */}
            <AsideMenuItem
              to="/target"
              title="Targets"
              fontIcon="bi-layers fs-3"
            />
            <AsideMenuItem
              to="/ticket"
              title="Tickets"
              fontIcon="bi-layers fs-3"
            />
            <AsideMenuItem
              to="/tasks"
              title="Tasks"
              fontIcon="bi-layers fs-3"
            />

            {/* <AsideMenuItem
          to={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
          outside={true}
          title={`Changelog ${process.env.REACT_APP_VERSION}`}
          fontIcon='bi-card-text fs-3'
        /> */}
          </AsideMenuItemWithSubMain>

          <AsideMenuItem
            to="/campaigns"
            title=" Campaigns"
            fontIcon="bi-gear fs-3"
          />
          <AsideMenuItem to="/cdr" title="CDR" fontIcon="bi-gear fs-3" />
          {/* <AsideMenuItem
            to="/company"
            title="Company"
            fontIcon="bi bi-building"
            // bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
            className="py-2"
          /> */}
          <AsideMenuItem
            to="/reports"
            title="Reports"
            fontIcon="bi-house fs-2"
            // bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
            className="py-2"
          />
          <AsideMenuItemWithSubMain
            to="/settings"
            title="Settings"
            // bsTitle='Leads'
            fontIcon="bi-gear"
          >
            <AsideMenuItem
              to="/sources"
              title="Sources"
              fontIcon="bi-layers fs-3"
            />
            <AsideMenuItem
              to="/brands"
              title="Brands"
              fontIcon="bi-layers fs-3"
            />
            <AsideMenuItem
              to="/department"
              title="Departments"
              fontIcon="bi-layers fs-3"
            />

            <AsideMenuItem
              to="/team-members"
              title="Team Members"
              fontIcon="bi-layers fs-3"
            />
            {/* <AsideMenuItem to='/settings/roles' title='Tickets' fontIcon='bi-layers fs-3' /> */}
            {/* <AsideMenuItem to='/settings/contacts' title='Targets' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/settings/contacts' title='Contacts' fontIcon='bi-layers fs-3' /> */}
          </AsideMenuItemWithSubMain>
          {/* <AsideMenuItem
            to="/editor"
            title="Editor"
            fontIcon="bi-card-text fs-3"
            bsTitle={"Editer"}
            className="py-2"
          /> */}
          {/* <AsideMenuItemWithSubMain
            to="/crafted/pages"
            title="Crafted"
            fontIcon="bi-file-text"
            bsTitle="Crafted"
          >
            <AsideMenuItemWithSub
              to="/crafted/pages/profile"
              title="Profile"
              hasBullet={true}
            >
              <AsideMenuItem
                to="/crafted/pages/profile/overview"
                title="Overview"
                bsTitle="Overview"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/pages/profile/projects"
                title="Projects"
                bsTitle="Projects"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/pages/profile/campaigns"
                title="Campaigns"
                bsTitle="Campaigns"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/pages/profile/documents"
                title="Documents"
                bsTitle="Documents"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/pages/profile/connections"
                title="Connections"
                hasBullet={true}
                bsTitle="Connections"
              />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub
              to="/crafted/pages/wizards"
              title="Wizards"
              hasBullet={true}
            >
              <AsideMenuItem
                to="/crafted/pages/wizards/horizontal"
                title="Horizontal"
                hasBullet={true}
                bsTitle="Horizontal"
              />
              <AsideMenuItem
                to="/crafted/pages/wizards/vertical"
                title="Vertical"
                bsTitle="Vertical"
                hasBullet={true}
              />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub
              to="/crafted/accounts"
              title="Accounts"
              hasBullet={true}
            >
              <AsideMenuItem
                to="/crafted/account/overview"
                title="Overview"
                hasBullet={true}
                bsTitle="Overview"
              />
              <AsideMenuItem
                to="/crafted/account/settings"
                title="Settings"
                hasBullet={true}
                bsTitle="Settings"
              />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub
              to="/crafted/widgets"
              title="Widgets"
              hasBullet={true}
            >
              <AsideMenuItem
                to="/crafted/widgets/lists"
                title="Lists"
                bsTitle="Lists"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/widgets/statistics"
                title="Statistics"
                bsTitle="Statistics"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/widgets/charts"
                title="Charts"
                bsTitle="Charts"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/widgets/mixed"
                title="Mixed"
                bsTitle="Mixed"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/widgets/tables"
                title="Tables"
                bsTitle="Tables"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/widgets/feeds"
                title="Feeds"
                bsTitle="Feeds"
                hasBullet={true}
              />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub to="/apps/chat" title="Chat" hasBullet={true}>
              <AsideMenuItem
                to="/apps/chat/private-chat"
                title="Private Chat"
                bsTitle="Private Chat"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/apps/chat/group-chat"
                title="Group Chart"
                bsTitle="Group Chart"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/apps/chat/drawer-chat"
                title="Drawer Chart"
                bsTitle="Drawer Chart"
                hasBullet={true}
              />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub to="/error" title="Errors" hasBullet={true}>
              <AsideMenuItem
                to="/error/404"
                title="Error 404"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/error/500"
                title="Error 500"
                hasBullet={true}
              />
            </AsideMenuItemWithSub>
            <AsideMenuItem
              to="/apps/user-management/users"
              title="User management"
              hasBullet={true}
              bsTitle="User management"
            />
          </AsideMenuItemWithSubMain> */}
          <AsideMenuItemWithSubMain
            to="/Roles"
            title="Roles"
            fontIcon="bi-file-text"
            bsTitle="Crafted"
          >
            <AsideMenuItem
              to="/apps/user-management/roles/list"
              title="Roles List"
              bsTitle="Roles list"
              hasBullet={true}
            />
            {/* <AsideMenuItem
              to="/apps/user-management/roles/view"
              title="View Roles"
              bsTitle="View Roles"
              hasBullet={true}
            /> */}
            <AsideMenuItem
              to="/apps/user-management/roles/permissions"
              title="Roles Permissions"
              bsTitle="Roles Permissions"
              hasBullet={true}
            />
          </AsideMenuItemWithSubMain>
          {/* <AsideMenuItem
            to="/socialPosts"
            title="Social"
            fontIcon="bi-globe"
            // bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
            className="py-2"
          /> */}
        </>
      ) : (
        <>
          <AsideMenuItemWithSubMain
            to="/leads"
            title="CRM"
            // bsTitle='Leads'
            fontIcon="bi-gear"
          >
            {rolePermissionsByUser?.filter(
              (item: any) => item?.allmodule?.name === "Leads"
            )?.length > 0 && (
              <AsideMenuItem
                to="/leads/list"
                title="Leads"
                fontIcon="bi-layers fs-3"
              />
            )}
            {rolePermissionsByUser?.filter(
              (item: any) => item?.allmodule?.name === "Contacts"
            )?.length > 0 && (
              <AsideMenuItem
                to="contacts"
                title="Contacts"
                fontIcon="bi-layers fs-3"
              />
            )}
            {rolePermissionsByUser?.filter(
              (item: any) => item?.allmodule?.name === "Bookings"
            )?.length > 0 && (
              <AsideMenuItem
                to="/bookings"
                title="Bookings"
                fontIcon="bi-layers fs-3"
              />
            )}
            {rolePermissionsByUser?.filter(
              (item: any) => item?.allmodule?.name === "Deals"
            )?.length > 0 && (
              <AsideMenuItem
                to="/deals"
                title="Deals"
                fontIcon="bi-layers fs-3"
              />
            )}

            {/* <AsideMenuItem to='/leads/tickets' title='Tickets' fontIcon='bi-layers fs-3' /> */}
            {rolePermissionsByUser?.filter(
              (item: any) => item?.allmodule?.name === "Targets"
            )?.length > 0 && (
              <AsideMenuItem
                to="/target"
                title="Targets"
                fontIcon="bi-layers fs-3"
              />
            )}
            {rolePermissionsByUser?.filter(
              (item: any) => item?.allmodule?.name === "Tickets"
            )?.length > 0 && (
              <AsideMenuItem
                to="/ticket"
                title="Tickets"
                fontIcon="bi-layers fs-3"
              />
            )}
            {rolePermissionsByUser?.filter(
              (item: any) => item?.allmodule?.name === "Tasks"
            )?.length > 0 && (
              <AsideMenuItem
                to="/tasks"
                title="Tasks"
                fontIcon="bi-layers fs-3"
              />
            )}
          </AsideMenuItemWithSubMain>
          {rolePermissionsByUser?.filter(
            (item: any) => item?.allmodule?.name === "Campaigns"
          )?.length > 0 && (
            <AsideMenuItem
              to="/campaigns"
              title="Campaigns"
              fontIcon="bi-gear fs-3"
            />
          )}
          {rolePermissionsByUser?.filter(
            (item: any) => item?.allmodule?.name === "CDR"
          )?.length > 0 && (
            <AsideMenuItem to="/cdr" title="CDR" fontIcon="bi-gear fs-3" />
          )}
          {/* <AsideMenuItem
              to='/company'
              title="Company"
              fontIcon="bi bi-building"
              // bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
              className='py-2'
            /> */}

          <AsideMenuItem
            to="/reports"
            title="Reports"
            fontIcon="bi-house fs-2"
            // bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
            className="py-2"
          />
          <AsideMenuItemWithSubMain
            to="/settings"
            title="Settings"
            // bsTitle='Leads'
            fontIcon="bi-gear"
          >
            {rolePermissionsByUser?.filter(
              (item: any) => item?.allmodule?.name === "Sources"
            )?.length > 0 && (
              <AsideMenuItem
                to="/sources"
                title="Sources"
                fontIcon="bi-layers fs-3"
              />
            )}
            {rolePermissionsByUser?.filter(
              (item: any) => item?.allmodule?.name === "Brands"
            )?.length > 0 && (
              <AsideMenuItem
                to="/brands"
                title="Brands"
                fontIcon="bi-layers fs-3"
              />
            )}
            {rolePermissionsByUser?.filter(
              (item: any) => item?.allmodule?.name === "Departments"
            )?.length > 0 && (
              <AsideMenuItem
                to="/department"
                title="Departments"
                fontIcon="bi-layers fs-3"
              />
            )}
            {rolePermissionsByUser?.filter(
              (item: any) => item?.crmrole?.name === "Admin"
            )?.length > 0 && (
              <AsideMenuItem
                to="/team-members"
                title="Team Members"
                fontIcon="bi-layers fs-3"
              />
            )}
            {/* <AsideMenuItem to='/settings/roles' title='Tickets' fontIcon='bi-layers fs-3' /> */}
            {/* <AsideMenuItem to='/settings/contacts' title='Targets' fontIcon='bi-layers fs-3' />
        <AsideMenuItem to='/settings/contacts' title='Contacts' fontIcon='bi-layers fs-3' /> */}
          </AsideMenuItemWithSubMain>
          {/* <AsideMenuItem
            to="/editor"
            title="Editor"
            fontIcon="bi-card-text fs-3"
            bsTitle={"Editer"}
            className="py-2"
          /> */}
          {/* <AsideMenuItemWithSubMain
            to="/crafted/pages"
            title="Crafted"
            fontIcon="bi-file-text"
            bsTitle="Crafted"
          >
            <AsideMenuItemWithSub
              to="/crafted/pages/profile"
              title="Profile"
              hasBullet={true}
            >
              <AsideMenuItem
                to="/crafted/pages/profile/overview"
                title="Overview"
                bsTitle="Overview"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/pages/profile/projects"
                title="Projects"
                bsTitle="Projects"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/pages/profile/campaigns"
                title="Campaigns"
                bsTitle="Campaigns"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/pages/profile/documents"
                title="Documents"
                bsTitle="Documents"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/pages/profile/connections"
                title="Connections"
                hasBullet={true}
                bsTitle="Connections"
              />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub
              to="/crafted/pages/wizards"
              title="Wizards"
              hasBullet={true}
            >
              <AsideMenuItem
                to="/crafted/pages/wizards/horizontal"
                title="Horizontal"
                hasBullet={true}
                bsTitle="Horizontal"
              />
              <AsideMenuItem
                to="/crafted/pages/wizards/vertical"
                title="Vertical"
                bsTitle="Vertical"
                hasBullet={true}
              />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub
              to="/crafted/accounts"
              title="Accounts"
              hasBullet={true}
            >
              <AsideMenuItem
                to="/crafted/account/overview"
                title="Overview"
                hasBullet={true}
                bsTitle="Overview"
              />
              <AsideMenuItem
                to="/crafted/account/settings"
                title="Settings"
                hasBullet={true}
                bsTitle="Settings"
              />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub
              to="/crafted/widgets"
              title="Widgets"
              hasBullet={true}
            >
              <AsideMenuItem
                to="/crafted/widgets/lists"
                title="Lists"
                bsTitle="Lists"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/widgets/statistics"
                title="Statistics"
                bsTitle="Statistics"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/widgets/charts"
                title="Charts"
                bsTitle="Charts"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/widgets/mixed"
                title="Mixed"
                bsTitle="Mixed"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/widgets/tables"
                title="Tables"
                bsTitle="Tables"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/crafted/widgets/feeds"
                title="Feeds"
                bsTitle="Feeds"
                hasBullet={true}
              />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub to="/apps/chat" title="Chat" hasBullet={true}>
              <AsideMenuItem
                to="/apps/chat/private-chat"
                title="Private Chat"
                bsTitle="Private Chat"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/apps/chat/group-chat"
                title="Group Chart"
                bsTitle="Group Chart"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/apps/chat/drawer-chat"
                title="Drawer Chart"
                bsTitle="Drawer Chart"
                hasBullet={true}
              />
            </AsideMenuItemWithSub>

            <AsideMenuItemWithSub to="/error" title="Errors" hasBullet={true}>
              <AsideMenuItem
                to="/error/404"
                title="Error 404"
                hasBullet={true}
              />
              <AsideMenuItem
                to="/error/500"
                title="Error 500"
                hasBullet={true}
              />
            </AsideMenuItemWithSub>
            <AsideMenuItem
              to="/apps/user-management/users"
              title="User management"
              hasBullet={true}
              bsTitle="User management"
            />
          </AsideMenuItemWithSubMain> */}
          {rolePermissionsByUser?.filter(
            (item: any) => item?.crmrole?.name === "Admin"
          )?.length > 0 && (
            <AsideMenuItemWithSubMain
              to="/Roles"
              title="Roles"
              fontIcon="bi-file-text"
              bsTitle="Crafted"
            >
              <AsideMenuItem
                to="/apps/user-management/roles/list"
                title="Roles List"
                bsTitle="Roles list"
                hasBullet={true}
              />
              {/* <AsideMenuItem
              to="/apps/user-management/roles/view"
              title="View Roles"
              bsTitle="View Roles"
              hasBullet={true}
            /> */}
              <AsideMenuItem
                to="/apps/user-management/roles/permissions"
                title="Roles Permissions"
                bsTitle="Roles Permissions"
                hasBullet={true}
              />
            </AsideMenuItemWithSubMain>
          )}
          {/* <AsideMenuItem
            to="/socialPosts"
            title="Social"
            fontIcon="bi-globe"
            // bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
            className="py-2"
          /> */}
        </>
      )}
    </>
  );
}
