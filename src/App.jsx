import { useState, useTransition } from 'react'
import './App.css'
import Personal from './components/Personal'
import Work from './components/Work'
import Education from './components/Education'
import ResumeView from './components/ResumeView'

function App() {

  const DEFAULT_PERSONAL_DATA = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 123-456-7890",
    address: "New York, NY"
  }

  const DEFAULT_WORK_DATA = [
    {
      id: crypto.randomUUID(),
      company: "Company ABC",
      position: "Product Manager",
      timeline: "01-Jan-2020 - Present",
      description: "bla bla"
    },
    {
      id: crypto.randomUUID(),
      company: "Company XYZ",
      position: "Software Developer",
      timeline: "01-Jan-2017 - 31-Dec-2019",
      description: "blu blu"
    }
  ]

  const DEFAULT_EDUCATION_DATA = [
    {
      id: crypto.randomUUID(),
      institute: "ABC Institute of Technology",
      degree: "Bachelors in Computer Science",
      timeline: "2016 - 2020",
      score: "3.2 / 4.00 GPA"
    }
  ]

  const [personalDetails, setPersonalDetails] = useState(DEFAULT_PERSONAL_DATA)
  const [workDetails, setWorkDetails] = useState(DEFAULT_WORK_DATA)
  const [educationDetails, setEducationDetails] = useState(DEFAULT_EDUCATION_DATA)

  return (
    <>
      <main className='flex gap-6 justify-center flex-wrap'>
        <section className='flex flex-col gap-4'>
          <Personal personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
          <Work workDetails={workDetails} setWorkDetails={setWorkDetails} />
          <Education educationDetails={educationDetails} setEducationDetails={setEducationDetails} />
        </section>
        <section className='flex'>
          <ResumeView personalDetails={personalDetails} workDetails={workDetails} educationDetails={educationDetails} />
        </section>
      </main>
    </>
  )
}

export default App
