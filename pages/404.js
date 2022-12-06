import Link from "next/link";

export default function Custom404() {
    return(
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
        <h1>404 - Page Not Found</h1>
        <Link href='/'>
        <h2 style={{cursor: 'pointer', color: 'black'}}>

            Aller à l'accueil
        </h2>
            </Link>
        </div> 
        )
  }