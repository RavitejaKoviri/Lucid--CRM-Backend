import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { ContactsListHeader } from './components/header/ContactsListHeader'
// import { ContactsTable } from './table/ContactsTable'
import { ContactEditModal } from './contact-edit-modal/ContactEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { ContactsData } from './table/ContactsData'
// import { ProfileHeader } from '../../profile/ProfileHeader'
import ContactContext from './table/columns/context'
import { useState } from 'react'

const ContactsList = () => {
  const { itemIdForUpdate } = useListView()
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <ContactContext.Provider value={{ searchTerm, setSearchTerm }}>
        <KTCard>
          <ContactsListHeader />
        </KTCard>
        <ContactsData />
      </ContactContext.Provider>

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
