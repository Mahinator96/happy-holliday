import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

export const useHollidays = () => {
	const [hollidays, setHollidays] = useState({});

	useEffect(() => {
		fetch(URI_API)
			.then(response => {
				if (response.status !== 200) {
					throw new Error(response.status)
				}

				return response.json();
			})
			.then(data => {
				return setHollidays(data)
			})
			.catch(err => console.error(err)); 
	}, [setHollidays])

	return [hollidays];
}