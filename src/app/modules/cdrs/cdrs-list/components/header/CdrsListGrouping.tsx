import { useQueryClient, useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { QUERIES } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { deleteSelectedUsers } from '../../core/_requests'
import { deleteSelectedLeads } from '../../_redux/cdrAction'

const CdrsListGrouping = () => {
  const dispatch = useDispatch();

  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const { selected, clearSelected } = useListView()
  const queryClient = useQueryClient()
  const { query } = useQueryResponse()

  const deleteSelectedItems = () =>
    dispatch(deleteSelectedLeads(selected, token))

  return (
    <div className='d-flex justify-content-end align-items-center'>
      <div className='fw-bolder me-5'>
        <span className='me-2'>{selected.length}</span> Selected
      </div>

      <button
        type='button'
        className='btn btn-danger'
        onClick={deleteSelectedItems}
      >
        Delete Selected
      </button>
    </div>
  )
}

export { CdrsListGrouping }
