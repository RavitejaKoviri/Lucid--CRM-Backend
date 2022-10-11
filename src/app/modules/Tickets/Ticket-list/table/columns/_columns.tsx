import { Column } from 'react-table'
import { TicketInfoCell } from './TicketInfoCell'
import { TicketLastLoginCell } from './TicketLastLoginCell'
import { TicketTwoStepsCell } from './TicketTwoStepsCell'
import { TicketActionsCell } from './TicketActionsCell'
import { TicketSelectionCell } from './TicketSelectionCell'
import { TicketCustomHeader } from './TicketCustomHeader'
import { TicketSelectionHeader } from './TicketSelectionHeader'
import { User } from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <TicketSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <TicketSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='username' className='min-w-125px' />,
  //   id: 'username',
  //   Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <TicketCustomHeader tableProps={props} title='username' className='min-w-125px' />,
    accessor: 'username',
  },
  {
    Header: (props) => <TicketCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    accessor: 'email',
  },
  {
    Header: (props) => <TicketCustomHeader tableProps={props} title='mobile' className='min-w-125px' />,
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
      <TicketCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <TicketActionsCell id={props.data[props.row.index].id} />,
  },
]

export { usersColumns }
