import { createContext } from "react"

type TicketsContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iTicketContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const TicketContext = createContext<TicketsContextType>(iTicketContextState)
export default TicketContext