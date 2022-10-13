import { createContext } from "react"

type BookingContextType = {
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const iBookingContextState = {
    searchTerm: '',
    setSearchTerm: () => { }
}
const BookingContext = createContext<BookingContextType>(iBookingContextState)
export default BookingContext