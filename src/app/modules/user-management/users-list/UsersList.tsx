import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { UsersListHeader } from './components/header/UsersListHeader'
import { UsersTable } from './table/UsersTable'
import { UserEditModal } from './user-edit-modal/UserEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import UserContext from './table/columns/context'
import { useState } from 'react'

const UsersList = () => {
  const { itemIdForUpdate } = useListView()
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <KTCard>
        <UserContext.Provider value={{ searchTerm, setSearchTerm }}>
          <UsersListHeader />
          <UsersTable />
        </UserContext.Provider>

      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  )
}

const UsersListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <UsersList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { UsersListWrapper }
