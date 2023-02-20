import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

import ProfileImage from './components/ProfileImage'
import Main from './components/Main'
import Footer from './components/Footer'
import ProfileData from './components/ProfileData'

function App() {

  return (
    <div className="App">
      <ProfileImage image={ProfileData.imageURL} name={ProfileData.fullName} portfolio={ ProfileData.portolfio } />
      <Main fullName={ ProfileData.fullName} job={ProfileData.job} website={ProfileData.website} email={ProfileData.email} linkedin={ProfileData.linkedin} about={ProfileData.about} interests={ProfileData.interests} />
      <Footer tiktok={ProfileData.tiktok} twitter={ ProfileData.twitter } instagram={ ProfileData.instagram} facebook={ ProfileData.facebook} github={ ProfileData.github} />
          </div>
  )
}

export default App
