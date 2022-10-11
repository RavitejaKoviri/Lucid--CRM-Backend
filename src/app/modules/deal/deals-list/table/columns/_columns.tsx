import { Column } from 'react-table'
import { DealInfoCell } from './DealInfoCell'
import { DealLastLoginCell } from './DealLastLoginCell'
import { DealTwoStepsCell } from './DealTwoStepsCell'
import { DealActionsCell } from './DealActionsCell'
import { DealSelectionCell } from './DealSelectionCell'
import { DealCustomHeader } from './DealCustomHeader'
import { DealSelectionHeader } from './DealSelectionHeader'
import { User } from '../../core/_models'

const DealsColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <DealSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <DealSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='username' className='min-w-125px' />,
  //   id: 'username',
  //   Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <DealCustomHeader tableProps={props} title='username' className='min-w-125px' />,
    accessor: 'username',
  },
  {
    Header: (props) => <DealCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    accessor: 'email',
  },
  {
    Header: (props) => <DealCustomHeader tableProps={props} title='mobile' className='min-w-125px' />,
    accessor: 'mobile',
  },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <DealCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <DealActionsCell id={props.data[props.row.index].id} />,
  },
]

export { DealsColumns }
