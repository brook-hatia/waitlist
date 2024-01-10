import react, {useState} from "react"
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./App.css"

function App() {

  const [collape, setCollapse] = useState({
    collapse1: false,
    collapse2: false,
    collapse3: false,
    collapse4: false,
    collapse5: false,
    collapse6: false,
  });

  const handleClick = (toggleName) => {
    setCollapse((prevCollapse) => {
      const updatedCollapse = {};
      
      // Set the clicked collapse to the opposite value
      updatedCollapse[toggleName] = !prevCollapse[toggleName];

      // Set all other collapses to false
      Object.keys(prevCollapse).forEach((key) => {
        if (key !== toggleName) {
          updatedCollapse[key] = false;
        }
      });

      return updatedCollapse;
    });
  };

  return (
    <div>
      <div className="above">
        <div>
          <a href="#">DailyGameIdeas</a>
        </div>

        <div>
          <h2>Tired of brainstorming? We've got your back!</h2>
          <p>Our upcoming tool takes the hassle out of game idea generation, so you can focus on making awesome game prototypes</p>
          <button><a href="#">Join waitlist</a></button>
        </div>
      </div>
      
      <div className="below">
        <h2>More info</h2>

        <div className="collapsibles">
          <div className="collapsible-child first" style={{width: '100%', cursor: 'pointer'}} onClick={() => handleClick("collapse1")}>
            <div className="first"><p>What is DailyGameIdeas?</p>{collape.collapse1 ? <ExpandLessIcon/>:<ExpandMoreIcon/>}</div>
            <div className={collape.collapse1 ? "active" : "hidden"}><p>DailyGameIdeas is an online tool that provides a list of game ideas sorted by genre, allowing you to choose ideas you are interested in working on.</p></div>
          </div>

          <div className={"collapsible-child"} style={{width: '100%', cursor: 'pointer'}} onClick={() => handleClick("collapse2")}>
            <div><p>Why should I use DailyGameIdeas?</p>{collape.collapse2 ? <ExpandLessIcon/>:<ExpandMoreIcon/>}</div>
            <div className={collape.collapse2 ? "active" : "hidden"}><p>After more than 5 years as a mobile game developer, I can attest that generating game ideas with real potential is more challenging than coding them. DailyGameIdeas lifts that burden by offering you quality game ideas, so you can move on to the prototyping stage.</p></div>
          </div>

          <div className="collapsible-child" style={{width: '100%', cursor: 'pointer'}} onClick={() => handleClick("collapse3")}>
            <div><p>How does DailyGameIdeas work?</p>{collape.collapse3 ? <ExpandLessIcon/>:<ExpandMoreIcon/>}</div>
            <div className={collape.collapse3 ? "active" : "hidden"}><p>DailyGameIdeas analyzes hundreds of games from several genres every day and looks for a pattern in their mechanic, it then combines different mechanics together, or improves on the existing mechanic, the results are then ranked based on what has proven to be successful in the past. The final results are then gathered and displayed to the user.</p></div>
          </div>

          <div className="collapsible-child" style={{width: '100%', cursor: 'pointer'}} onClick={() => handleClick("collapse4")}>
            <div><p>How much do you charge?</p>{collape.collapse4 ? <ExpandLessIcon/>:<ExpandMoreIcon/>}</div>
            <div className={collape.collapse4 ? "active" : "hidden"}><p>As indie game devs ourselves we understand the importance of keeping low cost, as such the first day is free. You can play around the tool to see if it is to your liking, then it will be $2.99 a month.</p></div>
          </div>

          <div className="collapsible-child" style={{width: '100%', cursor: 'pointer'}} onClick={() => handleClick("collapse5")}>
            <div><p>When is DailyGameIdeas going live?</p>{collape.collapse5 ? <ExpandLessIcon/>:<ExpandMoreIcon/>}</div>
            <div className={collape.collapse5 ? "active" : "hidden"}><p>DailyGameIdeas is currently under contruction and will be rolling out in early February. Join the waitlist to get updates on our progress.</p></div>
          </div>

          <div className="collapsible-child last" style={{width: '100%', cursor: 'pointer'}} onClick={() => handleClick("collapse6")}>
            <div className="last"><p>What if I have questions or feedback?</p>{collape.collapse6 ? <ExpandLessIcon/>:<ExpandMoreIcon/>}</div>
            <div className={collape.collapse6 ? "active" : "hidden"}><p>For any suggestions, you can email contact@dailygameideas.com. Your input helps us improve our service.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;