import React from 'react'
import Style from './SideBar.module.css'
import Heading from './Heading'

const personalDetails = {
    "👤" : "Idris Balogun",
    "✉️" : "idbalorg@gmail.com",
    "☎️" : "+2348112356177",
    "🛐" : "Olorunshogo Mushin, Lagos",
    '🔗' : "https://www.linkedin.com/in/idris-balogun-132b70134"
}

const languages = [
    'English', 'Yoruba', 'Arabic'
]

const skills = ["Leadership", "Customer Service", "Sales and Merchandising", "Financial Management", "Time Management", ]

function BioData() {
    return(
        <ul>
            { Object.entries(personalDetails).map(([key, value])=>{
                return (
                <li key = {key}>
                    <strong>{key} :</strong> {value}
                </li>
                )
            })}
        </ul>
    )
} 

function Array({items}) {
    return(
        <ul>
            {items.map((item, index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}

function SideBar() {
  return (
    <div className={Style.sidebar}>
        <div className={Style.img}>
        <img  src="/assets/idris.png" alt="pix" />
        </div>
        <hr />
        <Heading>
            Personal Details
        </Heading>
        <BioData/>
        <Heading>
            Skills
        </Heading>
        <Array items={skills}/>
        <Heading>
            Languages
        </Heading>
        <Array items={languages}/>
    </div>
  )
}

export default SideBar