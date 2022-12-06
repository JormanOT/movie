import React from "react"
import LoginPage from "../container/Login"
import HomePage from "../container/Home"
import { useSession, signIn } from 'next-auth/react'
import { Client } from "../client"

export default function Home({service, movies }) {

  const { data: session } = useSession();

  return (
    <>{session ?
      <HomePage service={service} movies={movies} /> :
      <LoginPage login={signIn} />}
    </>
  )
}


export const getServerSideProps = async () => {
  const service = await Client.fetch('*[_type == "services"]');
  const movies = await Client.fetch('*[_type == "movies"] | order(_createdAt asc)');

  return {
    props: {
      service,
      movies
    }
  }
}
