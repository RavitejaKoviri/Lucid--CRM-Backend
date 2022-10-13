import { Column } from 'react-table'
import { BrandsInfoCell } from './BrandsInfoCell'
import { BrandsLastLoginCell } from './BrandsLastLoginCell'
import { BrandsTwoStepsCell } from './BrandsTwoStepsCell'
import { BrandsActionsCell } from './BrandsActionsCell'
import { BrandsSelectionCell } from './BrandsSelectionCell'
import { BrandsCustomHeader } from './BrandsCustomHeader'
import { BrandsSelectionHeader } from './BrandsSelectionHeader'
import { Lead } from '../../core/_models'

const BrandsColumns: ReadonlyArray<Column<Lead>> = [
  {
    Header: (props) => <BrandsSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <BrandsSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <BrandsCustomHeader tableProps={props} title='Brand Name' className='min-w-125px' />,
    accessor: 'brandName',
  },
  // {
  //   Header: (props) => <BrandsCustomHeader tableProps={props} title='company' className='min-w-125px' />,
  //   accessor: 'company',
  // },
  {
    Header: (props) => (
      <BrandsCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <BrandsActionsCell id={props.data[props.row.index].id} />,
  },
]

export { BrandsColumns }
