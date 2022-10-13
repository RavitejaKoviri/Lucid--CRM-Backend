import { ListViewProvider, useListView } from './core/ListViewProvider'
import { QueryRequestProvider } from './core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
import { TasksListHeader } from './components/header/TasksListHeader'
// import { TasksTable } from './table/TasksTable'
import { TaskEditModal } from './task-edit-modal/TaskEditModal'
import { KTCard } from '../../../../_metronic/helpers'
import { TaskIndex } from './tasksUi/TaskIndex'
import TaskContext from './table/columns/context'
import { useState } from 'react'

const TasksList = () => {
  const { itemIdForUpdate } = useListView()
  const [searchTerm, setSearchTerm] = useState<string>('')
  return (
    <>
      <TaskContext.Provider value={{ searchTerm, setSearchTerm }}>
        <KTCard>
          <TasksListHeader />
          {/* <TasksTable /> */}
        </KTCard>
        <TaskIndex />
      </TaskContext.Provider>

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
