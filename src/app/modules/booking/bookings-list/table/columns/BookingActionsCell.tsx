/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MenuComponent } from '../../../../../../_metronic/assets/ts/components'
import { ID, KTSVG, QUERIES } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import { deleteUser } from '../../core/_requests'
import { Deletebooking } from '../../_redux/bookingAction'

type Props = {
  id: ID
}

const BookingActionsCell: FC<Props> = ({ id }) => {
  console.log("edit check", id);
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGYwY2ViYmNhZmFkMTBkNjc2MjU5NiIsImlhdCI6MTY2NTQwMTE1OCwiZXhwIjoxNjY3OTkzMTU4fQ.F2z1tVzyk97WvI2Ee6cfqfyRiV8D4aO9UNoh7W_sVw0"
  const { setItemIdForUpdate } = useListView()
  const { query } = useQueryResponse()
  const queryClient = useQueryClient()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])
  const dispatch = useDispatch();
  const navigation = useNavigate()

  // const openEditModal = () => {
  //   console.log(id)
  //   setItemIdForUpdate(id)
  // }
  const openEditModal = () => {
    navigation('bookingadduser', { state: { id } })
  }
  // const deleteItem = useMutation(() => deleteUser(id), {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
  //   },
  // })
  const deleteItem = () =>
    dispatch(Deletebooking(id, token))

  return (
    <>
      <a
        href='#'
        className='btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={openEditModal}>
            Edit
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            onClick={deleteItem}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  )
}

export { BookingActionsCell }
