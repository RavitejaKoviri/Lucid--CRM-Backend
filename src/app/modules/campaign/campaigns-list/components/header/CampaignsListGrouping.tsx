import { useQueryClient, useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { QUERIES } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { deleteSelectedUsers } from '../../core/_requests'
import { deleteSelectedCampaigns } from '../../_redux/campaignAction'

const CampaignsListGrouping = () => {
  const { selected, clearSelected } = useListView()
  const queryClient = useQueryClient()
  const { query } = useQueryResponse()

  // const deleteSelectedItems = useMutation(() => deleteSelectedUsers(selected), {
  //   // 💡 response of the mutation is passed to onSuccess
  //   onSuccess: () => {
  //     // ✅ update detail view directly
  //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
  //     clearSelected()
  //   },
  // })
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const dispatch=useDispatch();
  const deleteSelectedItems = () =>
  dispatch(deleteSelectedCampaigns(selected, token))
  return (
    <div className='d-flex justify-content-end align-items-center'>
      <div className='fw-bolder me-5'>
        <span className='me-2'>{selected.length}</span> Selected
      </div>

      <button
        type='button'
        className='btn btn-danger'
        onClick={deleteSelectedItems()}
      >
        Delete Selected
      </button>
    </div>
  )
}

export { CampaignsListGrouping }
