// TeamMember.jsx
import { Twitter, Instagram, Linkedin } from "lucide-react";

function TeamMember({ image, name, role }) {
  return (
    <div className="about8">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{role}</p>
      <div className="about9">
        <Twitter className="abouticon" strokeWidth={1}/>
        <Instagram className="abouticon" strokeWidth={1}/>
        <Linkedin className="abouticon" strokeWidth={1}/>
      </div>
    </div>
  );
}

export default TeamMember;
