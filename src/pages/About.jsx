import OurStory from "../components/aboutunicindeolmalilar/OurStory";
import TeamMember from "../components/aboutunicindeolmalilar/TeamMember";
import Delivery from "../components/Delivery";
import StatisticCard from "../components/aboutunicindeolmalilar/StatisticCard";
import "./About.css";

function About() {
  return (
    <div>
      <OurStory />
      <StatisticCard />
      <TeamMember />
      <Delivery />
    </div>
  );
}
export default About;