import { h, Component } from "preact";
import "./style.scss";

export default class App extends Component {
  render(props) {
    return (
      <div>
        <h1 style={{ color: props.color }}>Hello, Content!</h1>
      </div>
    );
  }
}
