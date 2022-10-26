import { createContext } from "react"

type DepartmentContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iDepartmentContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const DepartmentContext = createContext<DepartmentContextType>(iDepartmentContextState)
export default DepartmentContext