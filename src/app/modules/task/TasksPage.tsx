import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { TasksListWrapper } from './tasks-list/TaskList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Tasks',
    path: 'tasks',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const TasksPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='tasks'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Task</PageTitle>
              {/* <h1>hhhhh</h1> */}
              <TasksListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='tasks' />} />
    </Routes>
  )
}

export default TasksPage
