import { auth } from "/firebase/client";
import { useRouter } from "next/router"
import { useState } from "react"

function MyApp({ Component, pageProps }) {

	const router = useRouter()

	auth.onAuthStateChanged( (auth) => {

		if(!auth) {

			if(
				   router.pathname!="/signin"
				&& router.pathname!="/signup"
				&& router.pathname!="/forgotpassword"
			){
				router.replace('/signin')
			}

		}

	})
	

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
