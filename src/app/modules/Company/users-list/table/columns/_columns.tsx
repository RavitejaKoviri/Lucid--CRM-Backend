import {Column} from 'react-table'
import {CompanyInfoCell} from './CompanyInfoCell'
import {CompanyLastLoginCell} from './CompanyLastLoginCell'
import {CompanyTwoStepsCell} from './CompanyTwoStepsCell'
import {CompanyActionsCell} from './CompanyActionsCell'
import {CompanySelectionCell} from './CompanySelectionCell'
import {CompanyCustomHeader} from './CompanyCustomHeader'
import {CompanySelectionHeader} from './CompanySelectionHeader'
import {User} from '../../core/_models'

const CompanyColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <CompanySelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <CompanySelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <CompanyCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <CompanyInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <CompanyCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  {
    Header: (props) => (
      <CompanyCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
    ),
    id: 'last_login',
    Cell: ({...props}) => <CompanyLastLoginCell last_login={props.data[props.row.index].last_login} />,
  },
  {
    Header: (props) => (
      <CompanyCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
    ),
    id: 'two_steps',
    Cell: ({...props}) => <CompanyTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  },
  {
    Header: (props) => (
      <CompanyCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <CompanyCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <CompanyActionsCell id={props.data[props.row.index].id} />,
  },
]

export {CompanyColumns}
