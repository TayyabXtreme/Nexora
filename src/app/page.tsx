import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div
    className="flex min-h-screen flex-col items-center justify-center bg-background gap-4"
    >
      <h1 className="text-4xl font-bold text-center">
        Welcome to Nexora
      </h1>
      <div className="flex items-center gap-4">
        <OrganizationSwitcher/>
        <UserButton/>
      </div>
    </div>
  )
}

export default Home