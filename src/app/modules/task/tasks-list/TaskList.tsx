import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { TasksListHeader } from './components/header/TasksListHeader'
import { TasksTable } from './table/TasksTable'
import { TaskEditModal } from './task-edit-modal/TaskEditModal'
import { KTCard } from '../../../../_metronic/helpers'

const TasksList = () => {
  const { itemIdForUpdate } = useListView()
  return (
    <>
      <KTCard>
        <TasksListHeader />
        <TasksTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <TaskEditModal />}
    </>
  )
}

const TasksListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <TasksList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { TasksListWrapper }
