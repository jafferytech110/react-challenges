import React from 'react'
import Skill from './Skill'

const Skills = ({userSkills}) => {
  return (
    <div>
        <h2>Skills</h2>
        <div className='skills'>
            {userSkills.map(skill=>{
                return (
                    <Skill key={skill.id} skill={skill}/>
                )
            })}
        </div>
    </div>
  )
}

export default Skills