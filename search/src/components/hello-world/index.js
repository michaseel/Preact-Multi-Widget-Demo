import { h, Component } from "preact";
import "./style.scss";

export default class App extends Component {
  render(props) {
    return (
      <div>
        <h1 style={{ color: props.color }}>Hello, Search!</h1>
      </div>
    );
  }
}
