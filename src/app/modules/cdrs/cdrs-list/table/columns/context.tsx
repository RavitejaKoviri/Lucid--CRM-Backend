import { createContext } from "react"

type LeadContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iLeadContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const CDRContext = createContext<LeadContextType>(iLeadContextState)
export default CDRContext