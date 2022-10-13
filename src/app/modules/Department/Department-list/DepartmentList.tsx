import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { DepartmentListHeader } from './components/header/DepartmentListHeader'
import { DepartmentTable } from './table/DepartmentTable'
import { DepartmentEditModal } from './Department-edit-modal/DepartmentEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { useState } from 'react'
import UserContext from './table/columns/context'






const DepartmentList = () => {
  const { itemIdForUpdate } = useListView()

  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <KTCard>
        <UserContext.Provider value={{ searchTerm, setSearchTerm }}>
          <DepartmentListHeader />
          <DepartmentTable />
        </UserContext.Provider>

      </KTCard>
      {itemIdForUpdate !== undefined && <DepartmentEditModal />}
    </>
  )
}
const DepartmentListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <DepartmentList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { DepartmentListWrapper }
