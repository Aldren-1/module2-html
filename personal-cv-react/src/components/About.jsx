import profile from "../assets/profile.jpg";
import Card from "./Card";
function About() {
  return (

    <Card title="About me!">

      <img src={profile} alt="Profile photo" />

      <p>
        I am a 20-year-old IT student at USTP,
        I like playing games specially DOTA 2 and LOL.
      </p>

      <p>
        Email:
        <a href="mailto:restauroaldrin@gmail.com">
          restauroaldrin@gmail.com
        </a>

        <br />

        GitHub:
        <a href="https://github.com/Aldren-1" target="_blank">
          https://github.com/Aldren-1
        </a>
      </p>

    </Card>
  );
}

export default About;