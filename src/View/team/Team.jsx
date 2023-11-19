import React from 'react'
import  "./Team.css"
import { Code2 , DatabaseZap } from 'lucide-react';
const Team = () => {
  return (
    <div className="team-section">
        <div className="team-heading">
            <h2>Teams</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero.</p>
        </div>

        <div className="team-card-section">
          <div className="team-card">
            <div className="team-text">
            <Code2 color="#000000" />
            <h1>Traverse</h1>
            <p>Explore The Globe</p>
            <div className="member">
            <DatabaseZap color="#ff5c5c" size={15}/>
              <p>5 Members</p>
            </div>
            <div className="team-bottom">
              <div className="team-button-text">
                <p>Explore</p>
              </div>
            </div>
            </div>
          </div>
          
          <div className="team-card">
            <div className="team-text">
            <Code2 color="#000000" />
            <h1>Traverse</h1>
            <p>Explore The Globe</p>
            <div className="member">
            <DatabaseZap color="#ff5c5c" size={15}/>
              <p>5 Members</p>
            </div>
            <div className="team-bottom">
              <div className="team-button-text">
                <p>Explore</p>
              </div>
            </div>
            </div>
          </div>
          
        
          <div className="team-card">
            <div className="team-text">
            <Code2 color="#000000" />
            <h1>Traverse</h1>
            <p>Explore The Globe</p>
            <div className="member">
            <DatabaseZap color="#ff5c5c" size={15}/>
              <p>5 Members</p>
            </div>
            <div className="team-bottom">
              <div className="team-button-text">
                <p>Explore</p>
              </div>
            </div>
            </div>
          </div>
          
          <div className="team-card">
            <div className="team-text">
            <Code2 color="#000000" />
            <h1>Traverse</h1>
            <p>Explore The Globe</p>
            <div className="member">
            <DatabaseZap color="#ff5c5c" size={15}/>
              <p>5 Members</p>
            </div>
            <div className="team-bottom">
              <div className="team-button-text">
                <p>Explore</p>
              </div>
            </div>
            </div>
          </div>
          

        </div>
    </div>
  )
}

export default Team

