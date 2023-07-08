import { Fragment } from 'react'
import '../styles/globals.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {Lato} from '@next/font/google'


const lato = Lato({weight:'400',subsets:['latin']})
export default function App({ Component, pageProps }) {
  return <main className={lato.className} > <Header/> <Component {...pageProps} /> <Footer/> </main >
}
