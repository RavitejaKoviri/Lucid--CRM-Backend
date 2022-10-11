/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import { KTSVG,toAbsoluteUrl } from '../../../_metronic/helpers'
import { Header } from '../../../_metronic/layout/components/header/Header'
import { DefaultTitle } from '../../../_metronic/layout/components/header/page-title/DefaultTitle'
import { Topbar } from '../../../_metronic/layout/components/header/Topbar'
import { useLayout } from '../../../_metronic/layout/core'

export function HeaderWrapper2() {
  const {config, classes, attributes} = useLayout()
  const {header} = config

  return (
    <div
       style={{backgroundColor:'#34495E'}}
      id='kt_header'
      className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
      {...attributes.headerMenu}
    >
      <div
        className={clsx(
          classes.headerContainer.join(' '),
          'd-flex align-items-stretch justify-content-between'
        )}
      >
        <div className='d-flex align-items-center d-lg-none ms-n1 me-2' title='Show aside menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_aside_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/abstract/abs015.svg' className='svg-icon-1' />
          </div>
        </div>
        <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
          <Link to='/dashboard' className='d-lg-none'>
            <img alt='Logo' src={toAbsoluteUrl('/media/logos/demo6.svg')} className='h-30px' />
          </Link>
        </div>
        <div className={'d-flex align-items-stretch justify-content-between flex-lg-grow-1'}>
        <div className={'d-flex align-items-center justify-content-around flex-sm-grow-1'} style={{color:"#ffffff",marginRight:"15rem"}}>
            <div>Campaigns</div>
            <div>Contacts</div>
            <div>Automation</div>
        </div>
        <div className={'d-flex align-items-center justify-content-around flex-sm-grow-1'} style={{color:"#ffffff"}}>
            
            <div>All Tabs </div>
            <div>|</div>
        </div>
          <Topbar />
        </div>
      </div>
    </div>
  )
}
