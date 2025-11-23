import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import TopSellingSection from '../components/TopSellingSection.jsx'
import CustReviewSection from '../components/CustReviewSection.jsx'
import DescriptiveSection from '../components/DescriptiveSection.jsx'

const Home = () => {
  return (
    <>
      <HeroSection />
      <TopSellingSection />
      <CustReviewSection />
      <DescriptiveSection />
    </>
  )
}

export default Home