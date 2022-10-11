import { Column } from 'react-table'
import { TargetInfoCell } from './TargetInfoCell'
import { TargetLastLoginCell } from './TargetLastLoginCell'
import { TargetTwoStepsCell } from './TargetTwoStepsCell'
import { TargetActionsCell } from './TargetActionsCell'
import { TargetSelectionCell } from './TargetSelectionCell'
import { TargetCustomHeader } from './TargetCustomHeader'
import { TargetSelectionHeader } from './TargetSelectionHeader'
import { User } from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <TargetSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <TargetSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='username' className='min-w-125px' />,
  //   id: 'username',
  //   Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <TargetCustomHeader tableProps={props} title='username' className='min-w-125px' />,
    accessor: 'username',
  },
  {
    Header: (props) => <TargetCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    accessor: 'email',
  },
  {
    Header: (props) => <TargetCustomHeader tableProps={props} title='mobile' className='min-w-125px' />,
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
      <TargetCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <TargetActionsCell id={props.data[props.row.index].id} />,
  },
]

export { usersColumns }
