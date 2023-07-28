import { createContext, useContext, useState } from "react";
import { useText } from "../hooks/useText";
import { hollidaysContext } from "./hollidaysContext";

export const textContext = createContext({});

export  const TextContextProvider = ({ children }) => {
	const {holliday} = useContext(hollidaysContext);

	const [text] = useText(holliday);

	return (
		<textContext.Provider value={{text}}>
			{children}
		</textContext.Provider>
	)
}