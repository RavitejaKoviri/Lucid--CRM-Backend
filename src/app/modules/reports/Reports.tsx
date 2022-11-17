/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useLocation} from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRolePermissionsByUserId } from '../../pages/dashboard/_redux/dashboardAction'

const Reports: React.FC = () => {
  const location = useLocation()
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser=useSelector((state:any)=>state?.Dashboard?.RolePermissionsById)

  return (
    <div className='card mb-5 mb-xl-5'>
      <div className='card-body pt-0 pb-0'>
   

        <div className='d-flex overflow-auto h-55px'>
         {user?.isSuperAdmin===true? 
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
        
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/leads' && 'active')
                }
                to='/reports/leads'
              >
                Leads
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/contacts' && 'active')
                }
                to='/reports/contacts'
              >
                Contacts
              </Link>
            </li>
           
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/bookings' && 'active')
                }
                to='/reports/bookings'
              >
                Bookings
              </Link>
            </li>
       
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/deals' && 'active')
                }
                to='/reports/deals'
              >
                Deals
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/targets' && 'active')
                }
                to='/reports/targets'
              >
                Targets
              </Link>
            </li>
 
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/tickets' && 'active')
                }
                to='/reports/tickets'
              >
                Tickets
              </Link>
            </li>
        
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/tasks' && 'active')
                }
                to='/reports/tasks'
              >
                Tasks
              </Link>
            </li>
          </ul>:  <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
         {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Leads")?.length>0&&
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/leads' && 'active')
                }
                to='/reports/leads'
              >
                Leads
              </Link>
            </li>}
            {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Contacts")?.length>0&& 
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/contacts' && 'active')
                }
                to='/reports/contacts'
              >
                Contacts
              </Link>
            </li>}
             {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Bookings")?.length>0&&
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/bookings' && 'active')
                }
                to='/reports/bookings'
              >
                Bookings
              </Link>
            </li>}
            {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Deals")?.length>0&&
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/deals' && 'active')
                }
                to='/reports/deals'
              >
                Deals
              </Link>
            </li>}
            {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Targets")?.length>0&&
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/targets' && 'active')
                }
                to='/reports/targets'
              >
                Targets
              </Link>
            </li>}
            {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Tickets")?.length>0&&
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/tickets' && 'active')
                }
                to='/reports/tickets'
              >
                Tickets
              </Link>
            </li>}
            {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Tasks")?.length>0&&
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/reports/tasks' && 'active')
                }
                to='/reports/tasks'
              >
                Tasks
              </Link>
            </li>}
          </ul>}
       
        </div>
      </div>
    </div>
  )
}

export {Reports}
