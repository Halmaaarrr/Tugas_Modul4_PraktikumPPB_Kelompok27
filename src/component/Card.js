import React from 'react'
import './Card.css'

function Card({ name, followers, githubLink, avatar }) {
  return (
    <div className="card">
      <img src={avatar} alt={`${name}'s avatar`} className="card-avatar" />
      <div className="card-info">
        <h3>{name}</h3>
        <p>Followers: {followers}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          Visit GitHub
        </a>
      </div>
    </div>
  )
}

export default Card
