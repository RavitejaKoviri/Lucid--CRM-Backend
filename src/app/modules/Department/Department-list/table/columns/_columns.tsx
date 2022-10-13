import { Column } from 'react-table'
import { DepartmentInfoCell } from './DepartmentInfoCell'
import { DepartmentLastLoginCell } from './DepartmentLastLoginCell'
import { DepartmentTwoStepsCell } from './DepartmentTwoStepsCell'
import { DepartmentActionsCell } from './DepartmentActionsCell'
import { DepartmentSelectionCell } from './DepartmentSelectionCell'
import { DepartmentCustomHeader } from './DepartmentCustomHeader'
import { DepartmentSelectionHeader } from './DepartmentSelectionHeader'
import { Lead } from '../../core/_models'

const DepartmentColumns: ReadonlyArray<Column<Lead>> = [
  {
    Header: (props) => <DepartmentSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <DepartmentSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <DepartmentCustomHeader tableProps={props} title='departmentName' className='min-w-125px' />,
    accessor: 'departmentName',
  },
  // {
  //   Header: (props) => <DepartmentCustomHeader tableProps={props} title='company' className='min-w-125px' />,
  //   accessor: 'company',
  // },
  {
    Header: (props) => (
      <DepartmentCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <DepartmentActionsCell id={props.data[props.row.index].id} />,
  },
]

export { DepartmentColumns }
