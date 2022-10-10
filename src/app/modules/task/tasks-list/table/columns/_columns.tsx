import { Column } from 'react-table'
import { TaskInfoCell } from './TaskInfoCell'
import { TaskLastLoginCell } from './TaskLastLoginCell'
import { TaskTwoStepsCell } from './TaskTwoStepsCell'
import { TaskActionsCell } from './TaskActionsCell'
import { TaskSelectionCell } from './TaskSelectionCell'
import { TaskCustomHeader } from './TaskCustomHeader'
import { TaskSelectionHeader } from './TaskSelectionHeader'
import { User } from '../../core/_models'

const TasksColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <TaskSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <TaskSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='username' className='min-w-125px' />,
  //   id: 'username',
  //   Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <TaskCustomHeader tableProps={props} title='username' className='min-w-125px' />,
    accessor: 'username',
  },
  {
    Header: (props) => <TaskCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    accessor: 'email',
  },
  {
    Header: (props) => <TaskCustomHeader tableProps={props} title='mobile' className='min-w-125px' />,
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
      <TaskCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <TaskActionsCell id={props.data[props.row.index].id} />,
  },
]

export { TasksColumns }
