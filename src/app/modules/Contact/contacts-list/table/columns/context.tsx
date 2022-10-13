import { createContext } from "react"

type ContactContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iContactContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const ContactContext = createContext<ContactContextType>(iContactContextState)
export default ContactContext