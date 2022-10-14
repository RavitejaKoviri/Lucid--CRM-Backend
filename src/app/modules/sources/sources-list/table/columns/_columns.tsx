import { Column } from 'react-table'
import { SourceInfoCell } from './SourceInfoCell'
import { SourceLastLoginCell } from './SourceLastLoginCell'
import { SourceTwoStepsCell } from './SourceTwoStepsCell'
import { SourceActionsCell } from './SourceActionsCell'
import { SourceSelectionCell } from './SourceSelectionCell'
import { SourceCustomHeader } from './SourceCustomHeader'
import { SourceSelectionHeader } from './SourceSelectionHeader'
import { Lead } from '../../core/_models'

const LeadsColumns: ReadonlyArray<Column<Lead>> = [
  {
    Header: (props) => <SourceSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <SourceSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <LeadCustomHeader tableProps={props} title='leadEmail' className='min-w-125px' />,
  //   id: 'leadEmail',
  //   Cell: ({ ...props }) => <LeadInfoCell lead={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <SourceCustomHeader tableProps={props} title='SourceName' className='min-w-125px' />,
    accessor: 'SourceName',
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
      <SourceCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <SourceActionsCell id={props.data[props.row.index].id} />,
  },
]

export { LeadsColumns }
