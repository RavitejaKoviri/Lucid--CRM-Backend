import { Column } from 'react-table'
import { UserInfoCell } from './BookingInfoCell'
import { BookingLastLoginCell } from './BookingLastLoginCell'
import { BookingTwoStepsCell } from './BookingTwoStepsCell'
import { BookingActionsCell } from './BookingActionsCell'
import { BookingSelectionCell } from './BookingSelectionCell'
import { BookingCustomHeader } from './BookingCustomHeader'
import { BookingSelectionHeader } from './BookingSelectionHeader'
import { User } from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <BookingSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <BookingSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='username' className='min-w-125px' />,
  //   id: 'username',
  //   Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <BookingCustomHeader tableProps={props} title='username' className='min-w-125px' />,
    accessor: 'fullName',
  },
  {
    Header: (props) => <BookingCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    accessor: 'email',
  },
  {
    Header: (props) => <BookingCustomHeader tableProps={props} title='mobile' className='min-w-125px' />,
    accessor: 'mobileNumber',
  },
  {
    Header: (props) => <BookingCustomHeader tableProps={props} title='mobile' className='min-w-125px' />,
    accessor: 'gender',
  },
  {
    Header: (props) => <BookingCustomHeader tableProps={props} title='mobile' className='min-w-125px' />,
    accessor: 'address',
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
      <BookingCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <BookingActionsCell id={props.data[props.row.index].id} />,
  },
]

export { usersColumns }
