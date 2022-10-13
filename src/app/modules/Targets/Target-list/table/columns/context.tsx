import { createContext } from "react"

type TargetsContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iTargetContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const TargetContext = createContext<TargetsContextType>(iTargetContextState)
export default TargetContext