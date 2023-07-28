import { createContext, useState } from "react";
import { useHollidays } from "../hooks/useHollidays";

export const hollidaysContext = createContext({});

export const HollidaysContextProvider = ({children}) => {
	const [holliday, setHolliday] = useState('');
	const [hollidays] = useHollidays();

	const changeHoliday = (title) => {
		setHolliday(title);
	};

	return (
		<hollidaysContext.Provider value={{hollidays, holliday, changeHoliday}}>
			{children}
		</hollidaysContext.Provider>
	)
}