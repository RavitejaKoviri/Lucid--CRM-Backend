import { Column } from 'react-table'
import { ContactInfoCell } from './ContactInfoCell'
import { ContactLastLoginCell } from './ContactLastLoginCell'
import { ContactTwoStepsCell } from './ContactTwoStepsCell'
import { ContactActionsCell } from './ContactActionsCell'
import { ContactSelectionCell } from './ContactSelectionCell'
import { ContactCustomHeader } from './ContactCustomHeader'
import { ContactSelectionHeader } from './ContactSelectionHeader'
import { User } from '../../core/_models'

const contactsColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <ContactSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <ContactSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='username' className='min-w-125px' />,
  //   id: 'username',
  //   Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <ContactCustomHeader tableProps={props} title='username' className='min-w-125px' />,
    accessor: 'username',
  },
  {
    Header: (props) => <ContactCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    accessor: 'email',
  },
  {
    Header: (props) => <ContactCustomHeader tableProps={props} title='mobile' className='min-w-125px' />,
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
      <ContactCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <ContactActionsCell id={props.data[props.row.index].id} />,
  },
]

export { contactsColumns }
