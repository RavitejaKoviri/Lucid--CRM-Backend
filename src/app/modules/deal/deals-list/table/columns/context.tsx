import { createContext } from "react"

type DealContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iDealContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const DealContext = createContext<DealContextType>(iDealContextState)
export default DealContext