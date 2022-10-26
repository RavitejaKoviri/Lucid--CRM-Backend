import { createContext } from "react"

type SourceContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iSourceContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const SourceContext = createContext<SourceContextType>(iSourceContextState)
export default SourceContext