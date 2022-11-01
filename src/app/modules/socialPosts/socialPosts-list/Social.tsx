/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../_metronic/helpers'
import {PostModal} from "./components/postModel"

const Social: React.FC = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className='card mb-5 mb-xl-5'>
      <div className='card-body pt-0 pb-0'>
   

        <div className='d-flex overflow-auto h-55px justify-content-between align-items-center'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/socialPosts/fbposts' && 'active')
                }
                to='/socialPosts/fbposts'
              >
                FacebookPosts
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/socialPosts/twitter' && 'active')
                }
                to='/socialPosts/twitter'
              >
                Twitter
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/socialPosts/linkedin' && 'active')
                }
                to='/socialPosts/linkedin'
              >
                 LinkedIn
              </Link>
            </li>
          </ul>
          <div>
            {/* begin::Add user */}
            <button type='button' className='btn btn-primary' onClick={() => setModalShow(true)}>
                <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                Add Post
            </button>
            {/* end::Add user */}
          </div>
        </div>
      </div>
      <PostModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export {Social}
