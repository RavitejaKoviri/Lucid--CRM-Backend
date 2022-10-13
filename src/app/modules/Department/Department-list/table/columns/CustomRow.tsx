import clsx from 'clsx'
import { FC, useContext } from 'react'
import { Row } from 'react-table'
import { Lead } from '../../core/_models'
import UserContext from './context'

type Props = {
  row: Row<Lead>
}



const CustomRow: FC<Props> = ({ row }) => {
  const { searchTerm } = useContext(UserContext);
  return (

    <tr {...row.getRowProps()}>
      {row.cells.filter((val: any) => {
        if (searchTerm === "") {
          return val;
        }
        console.log(val, "val")
        if (val?.value?.toLowerCase()?.includes(searchTerm?.toLowerCase())) {
          console.log(val, "useC");
          return val;
        }
      }).map((cell) => {
        return (
          <td
            {...cell.getCellProps()}
            className={clsx({ 'text-end min-w-100px': cell.column.id === 'actions' })}
          >
            {cell.render('Cell')}
          </td>
        )
      })}
    </tr>
  )
}


export { CustomRow }
