import { Column } from 'react-table'
import { CdrInfoCell } from './CdrInfoCell'
import { CdrLastLoginCell } from './CdrLastLoginCell'
import { CdrTwoStepsCell } from './CdrTwoStepsCell'
import { CdrActionsCell } from './CdrActionsCell'
import { CdrSelectionCell } from './CdrSelectionCell'
import { CdrCustomHeader } from './CdrCustomHeader'
import { CdrSelectionHeader } from './CdrSelectionHeader'
import { Lead } from '../../core/_models'

const LeadsColumns: ReadonlyArray<Column<Lead>> = [
  {
    Header: (props) => <CdrSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <CdrSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <LeadCustomHeader tableProps={props} title='leadEmail' className='min-w-125px' />,
  //   id: 'leadEmail',
  //   Cell: ({ ...props }) => <LeadInfoCell lead={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <CdrCustomHeader tableProps={props} title='FirstName' className='min-w-125px' />,
    accessor: 'leadFirstName',
  },
  {
    Header: (props) => <CdrCustomHeader tableProps={props} title='LastName' className='min-w-125px' />,
    accessor: 'leadLastName',
  },
  {
    Header: (props) => <CdrCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    accessor: 'leadEmail',
  },
  {
    Header: (props) => <CdrCustomHeader tableProps={props} title='Company' className='min-w-125px' />,
    accessor: 'leadCompanyName',
  },
  {
    Header: (props) => <CdrCustomHeader tableProps={props} title='AnnualRevenue' className='min-w-125px' />,
    accessor: 'leadAnnualRevenueContribution',
  },
  {
    Header: (props) => <CdrCustomHeader tableProps={props} title='Industry' className='min-w-125px' />,
    accessor: 'leadIndustry',
  },
  {
    Header: (props) => <CdrCustomHeader tableProps={props} title='Phonenumber' className='min-w-125px' />,
    accessor: 'leadPhonenumber',
  },
  {
    Header: (props) => (
      <CdrCustomHeader tableProps={props} title='campaignSource' className='min-w-125px' />
    ),
    id: 'campaignSource',
    Cell: ({ ...props }) => <CdrLastLoginCell campaignSource={props.data[props.row.index].campaignName} />,
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
      <CdrCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <CdrActionsCell id={props.data[props.row.index].id} />,
  },
]

export { LeadsColumns }
