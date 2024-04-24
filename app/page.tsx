import { Bodyi } from '@/components/body/body'
import { NavBar } from '@/components/navbar/navbar'
import { Title } from '@/components/title/title'
import React from 'react'

const Home = () => {
  return (
    <main>
      <NavBar />
      <Title />
      <Bodyi />
    </main>
  )
}

export default Home