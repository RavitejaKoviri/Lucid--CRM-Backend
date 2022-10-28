import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { CompanyListHeader } from './components/header/CompanyListHeader'
import { CompanyTable } from './table/CompanyTable'
import { CompanyEditModal } from './lead-edit-modal/CompanyEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { useState } from 'react'
import UserContext from './table/columns/context'






const CompanyList = () => {
  const { itemIdForUpdate } = useListView()

  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <KTCard>
        <UserContext.Provider value={{ searchTerm, setSearchTerm }}>
          <CompanyListHeader />
          <CompanyTable />
        </UserContext.Provider>

      </KTCard>
      {itemIdForUpdate !== undefined && <CompanyEditModal />}
    </>
  )
}
const CompanyListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <CompanyList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { CompanyListWrapper }
