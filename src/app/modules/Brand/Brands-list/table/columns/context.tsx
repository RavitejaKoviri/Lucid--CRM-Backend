import { createContext } from "react"

type UserContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iUserContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const UserContext = createContext<UserContextType>(iUserContextState)
export default UserContext