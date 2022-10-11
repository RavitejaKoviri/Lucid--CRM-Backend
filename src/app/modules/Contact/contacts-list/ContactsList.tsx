import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { ContactsListHeader } from './components/header/ContactsListHeader'
import { ContactsTable } from './table/ContactsTable'
import { ContactEditModal } from './contact-edit-modal/ContactEditModal'
import { KTCard } from '../../../../_metronic/helpers'

const ContactsList = () => {
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <KTCard>
        <ContactsListHeader />
        <ContactsTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <ContactEditModal />}
    </>
  )
}

const ContactsListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ContactsList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { ContactsListWrapper }