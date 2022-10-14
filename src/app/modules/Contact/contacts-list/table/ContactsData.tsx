/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card3 } from '../../../../../_metronic/partials/content/cards/Card3'
import { getAllContacts } from '../_redux/contactAction'
import ContactContext from './columns/context';


export function ContactsData() {
  const Contacts = useSelector(
    (state: any) => state?.ContactData?.Contacts
  );
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllContacts(token))
  }, [])
  console.log(Contacts, "Contacts")
  const { searchTerm } = useContext(ContactContext);
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          My Contacts
          <span className='fs-6 text-gray-400 fw-bold ms-1'>(59)</span>
        </h3>

        <div className='d-flex my-2'>
          <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className='form-select form-select-white form-select-sm w-125px'
            defaultValue='Online'
          >
            <option value='Online'>Online</option>
            <option value='Pending'>Pending</option>
            <option value='Declined'>Declined</option>
            <option value='Accepted'>Accepted</option>
          </select>
        </div>
      </div>

      <div className='row g-6 g-xl-4'>
        {Contacts?.filter((val: any) => {
          if (searchTerm === "") {
            return val;
          }
          if (val?.contactJobTitle?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
            return val;
          }
          if (val?.contactName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
            return val;
          }
          if (val?.contactCompanyName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
            return val;
          }
        }).map((item: any) => (
          <div className='col-md-6 col-xxl-4'>
            <Card3
              avatar='/media/avatars/300-6.jpg'
              name={item?.contactTitle + ". " + item?.contactName}
              job={item?.contactJobTitle}
              avgEarnings={item?.contactCompanyName}
              totalEarnings={item?.contactCountry}
              id={item?.id}
            />
          </div>
        ))}

      </div>


      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
