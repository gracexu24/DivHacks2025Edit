import React from 'react';
import '../styles/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Anita Raj',
      role: 'Executive Lead',
      email: 'ar4658@columbia.edu',
      image: 'assets/anita_raj.png'
    },
    {
      name: 'Jadyn Park',
      role: 'Sponsorship Lead',
      email: 'jsp2226@barnard.edu',
      image: 'assets/jadyn_park.png'
    },
    {
      name: 'Lauren Song',
      role: 'Logistics Lead',
      email: 'ljs2225@columbia.edu',
      image: 'assets/lauren_song.png'
    },
    {
      name: 'Adneen Talib',
      role: 'Logistics Lead',
      email: 'awt2133@barnard.edu',
      image: 'assets/adneen_talib.png'
    },
    {
      name: 'Leah Kim',
      role: 'Hacker Experience Lead',
      email: 'lk2935@barnard.edu',
      image: 'assets/leah_kim.png'
    },
    {
      name: 'Isabella Lu',
      role: 'Publicity Lead',
      email: 'iel2114@columbia.edu',
      image: 'assets/isabella_lu.png'
    },
    {
      name: 'Grace Xu',
      role: 'Technical Development Lead',
      email: 'gx2168@columbia.edu',
      image: 'assets/grace_xu.png'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="row-section" id="team-hero">
        <div className="card" id="card">
          <h2><b>ABOUT THE TEAM</b></h2>
          <p>
            Meet the passionate organizers behind DivHacks 2025! Our team is dedicated to creating an empowering and inspirational space for students who are historically underrepresented in tech. We work together to bring you an unforgettable hackathon experience.
          </p>
        </div>
      </div>

      {/* Team + Contact Info Section */}
      <div className="row-section" id="team-hero">
        <div className="card">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.image} alt={member.name} />
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <a className="team-email" href={`mailto:${member.email}`}>
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team; 