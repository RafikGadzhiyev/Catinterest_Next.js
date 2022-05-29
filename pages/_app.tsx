import '../styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { NavigationBar } from '../assets/components/NavigationBarComponent'
import Head from 'next/head'
import { MainStore } from '../assets/redux/stores/main.store'
import 'bootstrap-icons/font/bootstrap-icons.css'

function MyApp({ Component, pageProps }: AppProps) {
	return <Provider
		store={MainStore}
	>
		<Head>
			<title>Catinterest</title>
		</Head>
		<header>
			<NavigationBar />
		</header>
		<Component {...pageProps} />
	</Provider>
}

export default MyApp
