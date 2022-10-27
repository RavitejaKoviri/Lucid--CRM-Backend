/* eslint-disable jsx-a11y/anchor-is-valid */
import { Pagination } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
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
  const companyId = useSelector(
    (state: any) => state?.auth?.user?.company?.id
  );
  const [perPage, setPerPage] = useState([]);
  const [contact, setContact] = useState([]);
  useEffect(() => {
    setContact(Contacts);
    setPerPage(Contacts.slice(0, 10));
  }, [Contacts])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllContacts(token, companyId))
  }, [])
  const pageHandler = (pageNumber: any) => {
    setPerPage(contact.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(contact.length / 10) + 1; i++) {
    pageNumbers.push(i);
  }
  console.log(Contacts, "Contacts")
  const { searchTerm } = useContext(ContactContext);
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          My Contacts
          <span className='fs-6 text-gray-400 fw-bold ms-1'>({Contacts?.length})</span>
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
        {perPage?.filter((val: any) => {
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
          if (val?.campaignSource?.campaignName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
            console.log(val,"source");
            
            return val;
          }
          if (val?.contactSource?.SourceName?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
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


      <div className='d-flex flex-end'>
        <Pagination
          // justifyContent="center"
          count={pageNumbers.length}
          onChange={(e, value) => pageHandler(value)}
          color="primary"
        />
      </div>
    </>
  )
}
