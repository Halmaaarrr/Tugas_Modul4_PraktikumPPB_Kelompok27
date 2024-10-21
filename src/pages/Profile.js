import React from 'react'
import Card from '../component/Card'

const teamMembers = [
    {
      name: 'Ahmad Fajar',
      followers: 4017,
      githubLink: 'https://github.com/Faasky',
      avatar: 'https://i.pinimg.com/originals/bc/0a/b7/bc0ab73fa77aaebe9569913e2f37468f.jpg'
    },

    {
        name: 'Shafa Naura Amuktya Dewani',
        followers: 2009,
        githubLink: 'https://github.com/nawrra',
        avatar: 'https://i.pinimg.com/736x/31/65/ea/3165eab24aa9b516734124c39d8114d6.jpg'
      },

      {
        name: 'Adilia Getia Haqia Ilmi',
        followers: 2018,
        githubLink: 'https://github.com/4dil1a',
        avatar: 'https://i.pinimg.com/736x/02/c4/7a/02c47ac7d1bc20e43d77bed35b08861c.jpg'
      },

      {
        name: 'Halmar Bintang Kusuma Hano',
        followers: 2005,
        githubLink: 'https://github.com/Halmaaarrr',
        avatar: 'https://i.pinimg.com/564x/83/38/36/8338361da971ec5315f4502b21041e90.jpg'
      }
    ]

    export default function Profile() {
        return (
          <div>
            <h1 style={{ color: 'red' }}>Profile Anggota Kelompok</h1>
            {teamMembers.map(member => (
              <Card
                key={member.name}
                name={member.name}
                followers={member.followers}
                githubLink={member.githubLink}
                avatar={member.avatar}
              />
            ))}
          </div>
        );
      }
      
