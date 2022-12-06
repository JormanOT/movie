import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'
import { useSession, signOut } from 'next-auth/react'


const Layout = ({ children }) => {
    const { data : session } = useSession();
    return (
        <div>
            <Head>
                <title>Movie App</title>
            </Head>
            {session && <header><NavBar user={session.user} signOut={signOut} /></header>}
            <main>
                {children}
            </main>
            {session && <footer><Footer /></footer>}
        </div>
    )
}

export default Layout