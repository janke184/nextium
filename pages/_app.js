import { AuthenticatedContextProvider } from "contexts/AuthenticatedContext"

function MyApp({ Component, pageProps }) {
	
  return (
	<AuthenticatedContextProvider>
		<Component {...pageProps} />
	</AuthenticatedContextProvider>
  )
}

export default MyApp
