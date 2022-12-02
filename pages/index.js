import { useEffect } from "react"
import { useRouter } from "next/router"
import { CircularProgress } from "@mui/material";
import AppLayout from "components/AppLayout";

export default function Home() {

	const router = useRouter();

	useEffect( () => {
		// Si estoy en el default voy al signin
		router.replace('/signin');
	}, [])

	return (
		<>
			<AppLayout>
				<CircularProgress/>
			</AppLayout>
		</>
	)

}
