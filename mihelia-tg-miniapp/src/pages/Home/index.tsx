import { Sets } from "../../components/Sets";
import { useEffect, useState } from 'preact/hooks'
import { Training } from '../../models/Training'

export function Home() {
	const [trainings, setTrainings] = useState<Training[] | null>();
	const [loading, setLoading] = useState<boolean>(true);

	//TODO: save to .env
	const baseUrl = "http://localhost:5186";
	const trainingsUrl = baseUrl + "/trainings/";
	
	useEffect(() => {
		fetch(trainingsUrl)
			.then(response => response.json())
			.then((trainings: Training[]) => {
				setTrainings(trainings)
			})
			.catch(er => console.log(er))
			.finally(() => setLoading(false))
	}, [])


	if (loading)
		return <div>Loading...</div>

	if (trainings.length === 0)
		return <div>No trainings yet.</div>

	return (
		trainings.forEach(training => {
			<div>{training.Name}</div>	
		})
	);
}

