import React from 'react'
import Heading from './Heading'

const duty1 = [
  'Manage cash flow, including banking deposits, debit card transactions, returns and refunds.', 
  'Handled escalated customer inquiries promptly while maintaining a professional demeanor.',
  'Demonstrated strong leadership skills by training, motivating and coaching employees.',
  'Conducing regular inventory checks to ensure accuracy.',
  'Maintained cleanliness standard throughout the store.',
  'Developed and implemented strategies to increase sales and profitability.',
  'Assisted in hiring ew employees by conducting interviews and making informed decisions.',
  'Coordinated promotional campaigns to drive traffic into the store. '

]

const duty2 = [
'Attended industry events such as conferences, seminars, and trade shows to build relationships with potential customers.',
'Conducted market research to identify new opportunities and target markets.',
'Prepared reports on sales performance metrics for executive management team review.',
'Provided mentorship and guidance for junior members of the team in order to ensure smooth onboarding process.',
'Utilized problem solving skills when addressing customer complaints or issues regarding product quality or delivery times.',
'Collaborated with various teams to identify and evaluate solutions to meet client needs.',
'Set appointments with potential clients to discuss product features and benefits.'
]

function Experience({position, date, duties, orgName}) {
  return(
    <>
    <p>{date}</p>
    <p><strong>{position}</strong></p>
    <p>{orgName}</p>
    <ul>
      {
        duties.map((item, index)=>{
          return <li key={index}>
            {item}
          </li>
        })
      }
    </ul>
    </>
  )
}

function Education({institution, year, result, major, location}) {
  return(
    <>
    <div>
      <p><strong>{institution}</strong> {location}</p>
      <p>{year}</p>
    </div>
    <div>
      <p><strong>{major}</strong></p>
      <p>{result}</p>
    </div>
    
    
    </>
  )
}

function Details() {
  return (
    <div>
      <Heading>
        Profile
      </Heading>
      <p>
      Accomplished retail professional with proven track record of successfully leading teams to exceed sales targets and customer satisfaction goals. Skilled in developing creative marketing strategies, motivating staff, and providing exceptional customer service. Adept in using modern sales tracking systems and analytics to increase profitability and efficiency.
      </p>
      <Heading>Experiences</Heading>
      <Experience 
      date='June 2020 - Jan 2024' 
      position='Retail Assistant Manager'
      orgName='Solat Telecoms Enterprises'
      duties={duty1}
      />
      <Experience 
      date='March 2019 - June 2020' 
      position='Technical Sales Engineer'
      orgName='Solat Telecoms Enterprises'
      duties={duty2}
      />
      <Heading>
        Education
      </Heading>
      <Education 
      institution='University of Ilorin'
      year='2012 - 2017'
      major='Mechanical Engineering'
      result='B.Eng'
      location='Ilorin, Kwara state'
      />
      <Education
      institution='Trinity Secondary School'
      year='2001 - 2006'
      location='Olodi-Apapa, Lagos state'
      result='WASSCE'
      />


    </div>
  )
}

export default Details