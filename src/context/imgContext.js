import { createContext } from "react";
import { useSelector } from "react-redux";
import { URI_API } from "../const/const";
import { useFetch } from "../hooks/useFetch";

export const imgContext = createContext({});

export  const ImgContextProvider = ({ children }) => {
	const holliday = useSelector(state => state.hollidays.holliday);
	const [{urlImg}] = useFetch(holliday ? `${URI_API}image/${holliday}` : '');

	return (
		<imgContext.Provider value={{urlImg}}>
			{children}
		</imgContext.Provider>
	)
}