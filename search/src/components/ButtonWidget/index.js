import { h, Component } from "preact";
import "./style.scss";

export default class App extends Component {
  render({ alertMessage, text}) {
    return (
      <div>
        <button onClick={() => alert(alertMessage)}>{text}</button>
      </div>
    );
  }
}
