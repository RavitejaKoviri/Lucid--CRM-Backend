import { Column } from 'react-table'
import { BrandsInfoCell } from './BrandsInfoCell'
import { BrandsLastLoginCell } from './BrandsLastLoginCell'
import { BrandsTwoStepsCell } from './BrandsTwoStepsCell'
import { BrandsActionsCell } from './BrandsActionsCell'
import { BrandsSelectionCell } from './BrandsSelectionCell'
import { BrandsCustomHeader } from './BrandsCustomHeader'
import { BrandsSelectionHeader } from './BrandsSelectionHeader'
import { Lead } from '../../core/_models'

const BrandsColumns: ReadonlyArray<Column<Lead>> = [
  {
    Header: (props) => <BrandsSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <BrandsSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <LeadCustomHeader tableProps={props} title='leadEmail' className='min-w-125px' />,
  //   id: 'leadEmail',
  //   Cell: ({ ...props }) => <LeadInfoCell lead={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <BrandsCustomHeader tableProps={props} title='FirstName' className='min-w-125px' />,
    accessor: 'leadFirstName',
  },
  {
    Header: (props) => <BrandsCustomHeader tableProps={props} title='LastName' className='min-w-125px' />,
    accessor: 'leadLastName',
  },
  {
    Header: (props) => <BrandsCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    accessor: 'leadEmail',
  },
  {
    Header: (props) => <BrandsCustomHeader tableProps={props} title='Company' className='min-w-125px' />,
    accessor: 'leadCompanyName',
  },
  {
    Header: (props) => <BrandsCustomHeader tableProps={props} title='AnnualRevenue' className='min-w-125px' />,
    accessor: 'leadAnnualRevenueContribution',
  },
  {
    Header: (props) => <BrandsCustomHeader tableProps={props} title='Industry' className='min-w-125px' />,
    accessor: 'leadIndustry',
  },
  {
    Header: (props) => <BrandsCustomHeader tableProps={props} title='Phonenumber' className='min-w-125px' />,
    accessor: 'leadPhonenumber',
  },
  {
    Header: (props) => (
      <BrandsCustomHeader tableProps={props} title='campaignSource' className='min-w-125px' />
    ),
    id: 'campaignSource',
    Cell: ({ ...props }) => <BrandsLastLoginCell campaignSource={props.data[props.row.index].campaignName} />,
  },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader tableProps={props} title='Owner' className='min-w-125px' />
  //   ),
  //   id: 'leadOwner',
  //   Cell: ({ ...props }) => <LeadLastLoginCell campaignSource={props.data[props.row.index].leadOwner} />,
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader tableProps={props} title='campaignSource' className='min-w-125px' />
  //   ),
  //   id: 'campaignSource',
  //   Cell: ({ ...props }) => <LeadLastLoginCell campaignSource={props.data[props.row.index].campaignName} />,
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader tableProps={props} title='campaignSource' className='min-w-125px' />
  //   ),
  //   id: 'campaignSource',
  //   Cell: ({ ...props }) => <LeadLastLoginCell campaignSource={props.data[props.row.index].campaignName} />,
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({ ...props }) => <LeadTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <BrandsCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <BrandsActionsCell id={props.data[props.row.index].id} />,
  },
]

export { BrandsColumns }
