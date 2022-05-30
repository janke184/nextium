import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {

	const router = useRouter();

	useEffect( () => {
		// Si estoy en el default voy al signin
		router.replace('/signin');
	}, [])

	return (
	<>
	Loading...
	</>
	)

}
