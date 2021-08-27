import Head from 'next/head'
import styles from '../../styles/Fz.module.css'
import Link  from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { fz: data }
    }
}
const Fz = ({ fz }) => {
    return (
    <>  
        <Head>
        <title>Fz List | All List</title>
        <meta name="keywords" content="fz"/>
        </Head>  
        <div>
            <h1>All List</h1>
            {fz.map(f => (
                <Link href={'/fz/' + f.id} key={f.id}>
                    <a className={styles.single}>
                        <h3>{ f.name } </h3>
                    </a>
                </Link>
            ))}
        </div>
    </>    
    );
}

export default Fz;