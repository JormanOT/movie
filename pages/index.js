import React, { useEffect } from "react"
import LoginPage from "../container/Login"
import HomePage from "../container/Home"
import { useSession, signIn } from 'next-auth/react'
import { Client } from "../client"

export default function Home({ service, movies }) {

  const { data: session } = useSession();

  useEffect(() => {
    const { id, name, image, email } = session.user;

      const doc = {
        _id: id,
        _type: 'users',
        name: name,
        mail: email,
        userpic: image
      }
      
      Client.createIfNotExists(doc).then(() => console.log('User Created!'));
  }, [])



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
