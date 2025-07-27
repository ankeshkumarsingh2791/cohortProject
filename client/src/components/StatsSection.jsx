import React from 'react'
import CountUpCard from './utils/CountUpCard'

const StatsSection = () => {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 p-4 md:p-8 bg-[#9746FF] text-white">
      <CountUpCard label="Creators Collaborated With" target={300} />
      <CountUpCard label="Creaters Exclusively Managed" target={300} />
      <CountUpCard label="Projects" target={150} />
    </section>
  )
}

export default StatsSection
