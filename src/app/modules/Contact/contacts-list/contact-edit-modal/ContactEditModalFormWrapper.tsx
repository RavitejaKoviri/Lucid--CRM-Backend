import { useQuery } from 'react-query'
import { ContactEditModalForm } from './ContactEditModalForm'
import { isNotEmpty, QUERIES } from '../../../../../_metronic/helpers'
import { useListView } from '../core/ListViewProvider'
import { getUserById } from '../core/_requests'

const ContactEditModalFormWrapper = () => {
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

  if (!itemIdForUpdate) {
    return <ContactEditModalForm isUserLoading={isLoading} user={{ id: undefined }} />
  }

  if (!isLoading && !error && user) {
    return <ContactEditModalForm isUserLoading={isLoading} user={user} />
  }

  return null
}

export { ContactEditModalFormWrapper }
