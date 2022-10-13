import { createContext } from "react"

type TaskContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iTaskContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const TaskContext = createContext<TaskContextType>(iTaskContextState)
export default TaskContext