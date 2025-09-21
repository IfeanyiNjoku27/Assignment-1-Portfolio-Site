import { Navigate, useNavigate } from "react-router-dom";
import AppRoutes from "../AppRoutes";
import "./Pages_CSS/Home.css"

export default function Home() {
  let navigate = useNavigate();

  return (
    <div className="homePageDiv">
        
      {/*Welcome Message*/}
      <header className="header">
        <h1>Welcome to my Home Page</h1>
        <p>
          My name is Ifeanyi Njoku! I am a software engineering student at
          Centennial College and I enjoy learning and building software
          applications.
        </p>
      </header>

      {/*Mission Statment*/}
      <section className="missionStatement">
        <h2>My Mission</h2>
        <p>
          My mission is to create useful and user friendly applicaitons, that
          solve real world problems and to continue to improve my skills, making
          each application better than the last.
        </p>
      </section>

      {/*Button to redirect to the about me page*/}
      <button onClick={() => navigate("/about")}>Some More About Me!</button>
    </div>
  );
}
