import React from 'react'
import CountUpCard from './utils/CountUpCard'

const StatsSection = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 p-4 md:p-8 bg-[#9746FF] text-white">
      <CountUpCard label="Followers" target={10000} />
      <CountUpCard label="Total Projects" target={1000} />
      <CountUpCard label="Happy Clients" target={1000} />
    </section>
  )
}

export default StatsSection
