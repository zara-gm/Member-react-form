import React from "react";
import {
  BrowserRouter as Router, Route, Link,
  useLocation
} from "react-router-dom";
import { PersonalInfo } from "./memberForm/1Personalinfo";
import { Identity } from "./memberForm/2Identity";
import { Interests } from "./memberForm/3Interests";
import { CodeOfConduct } from './memberForm/4CodeConduct';
import { SlackConduct } from './memberForm/5SlackConduct';
// import { Step6 } from './memberForm/Step6';
// import { Step7 } from './memberForm/Step7';
// import { Step8 } from './memberForm/Step8';
// import { Step9 } from './memberForm/Step9';
import { ThankYou } from './memberForm/6ThankYou';
// import { Result } from "./memberForm/Result";
import { Header } from "./components/Header";
import "../src/memberForm/Step2.css";
// import "../src/memberForm/ProgressBar.css";

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="container">
        <ol className="steps">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Personal Information</Link>
          </li>
          <li className={location.pathname === "/identity" ? "active" : ""}>
            <Link to="/identity">Identity</Link>
          </li>
          <li className={location.pathname === "/step3" ? "active" : ""}>
            <Link to="/interests">Interests</Link>
          </li>
          <li className={location.pathname === "/step4" ? "active" : ""}>
            <Link to="/codeofconduct">Code of Conduct</Link>
          </li>
          <li className={location.pathname === "/step5" ? "active" : ""}>
            <Link to="/slackconduct">Slack Guidelines</Link>
          </li>
          {/* <li className={location.pathname === "/step6" ? "active" : ""}>
            <Link to="/step6">Step 6</Link>
          </li>
          <li className={location.pathname === "/step7" ? "active" : ""}>
            <Link to="/step7">Step 7</Link>
          </li>
          <li className={location.pathname === "/step8" ? "active" : ""}>
            <Link to="/step8">Step 8</Link>
          </li>
          <li className={location.pathname === "/step9" ? "active" : ""}>
            <Link to="/step9">Step 9</Link>
          </li> */}
          {/* <li className={location.pathname === "/result" ? "active" : ""}>
            <Link to="/result">Result</Link>
          </li> */}
          <li className={location.pathname === "/thankyou" ? "active" : ""}>
            <Link to="/thankyou">Thank you</Link>
          </li>
        </ol>
      </nav>
      <Route exact path="/" component={PersonalInfo} />
      <Route path="/identity" component={Identity} />
      <Route path="/interests" component={Interests} />
      <Route path="/codeofconduct" component={CodeOfConduct} />
      <Route path="/slackconduct" component={SlackConduct} />
      {/* <Route path="/step6" component={Step6} />
      <Route path="/step7" component={Step7} />
      <Route path="/step8" component={Step8} />
      <Route path="/step9" component={Step9} />
      <Route path="/result" component={Result} /> */}
      <Route path="/thankyou" component={ThankYou} />
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Router>
        <Pages />
      </Router>
    </>
  );
}

export default App;
