import { useQuery } from 'react-query'
import { SourceEditModalForm } from './SourceEditModalForm'
import { isNotEmpty, QUERIES } from '../../../../../_metronic/helpers'
import { useListView } from '../core/ListViewProvider'
import { getUserById } from '../core/_requests'

const SourceEditModalFormWrapper = () => {
  const { itemIdForUpdate, setItemIdForUpdate } = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getUserById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  // if (!itemIdForUpdate) {
  //   return <LeadEditModalForm isUserLoading={isLoading} lead={{ id: undefined }} />
  // }

  if (!isLoading && !error && user) {
    return <SourceEditModalForm isUserLoading={isLoading} lead={user} />
  }

  return null
}

export { SourceEditModalFormWrapper }
