import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fz List | Home</title>
        <meta name="keywords" content="fz"/>
      </Head>
      <div>        
        <h1 className={styles.title} >Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore voluptate blanditiis cupiditate odit, rerum minima! Aspernatur facilis eius eum debitis eveniet repellat distinctio impedit, ipsa velit porro quas commodi.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus excepturi adipisci voluptate quidem incidunt ullam sed aliquid asperiores, porro numquam accusantium architecto eius, ad maxime obcaecati, at nulla? Tempore!</p>
        <Link href="/fz">
          <a className={styles.btn}>See Fz Listing</a>
        </Link>        
      </div>
    </>
  )
}
