import { useQueryClient, useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { QUERIES } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { deleteSelectedUsers } from '../../core/_requests'
import { deleteSelectedbooking } from '../../_redux/bookingAction'

const BookingsListGrouping = () => {
  const { selected, clearSelected } = useListView()
  const queryClient = useQueryClient()
  const { query } = useQueryResponse()
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGYwY2ViYmNhZmFkMTBkNjc2MjU5NiIsImlhdCI6MTY2NTQwMTE1OCwiZXhwIjoxNjY3OTkzMTU4fQ.F2z1tVzyk97WvI2Ee6cfqfyRiV8D4aO9UNoh7W_sVw0"

  // const deleteSelectedItems = useMutation(() => deleteSelectedUsers(selected), {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
  //     clearSelected()
  //   },
  // })
  const dispatch = useDispatch();
  const deleteSelectedItems = () =>
  dispatch(deleteSelectedbooking(selected, token))
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

export { BookingsListGrouping }
