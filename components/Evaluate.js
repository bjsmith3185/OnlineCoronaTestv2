import { render } from "react-dom";
import Visual from '../components/Visual';

class Evaluate extends React.Component {
  state = {
    isRichard: "",
  };

  render() {
    let answer = "";
    let picture = "";
    //console.log(this.props.case);

    if (this.state.isRichard === "") {
      answer = <div></div>;
    } else if (this.state.isRichard === "true") {
      answer = <div className="text-warning">You most likely have it...</div>;
      picture = <Visual/>
    } else if (this.state.isRichard === "false") {
      answer = <div className="text-success"> Na, you are fine!</div>;
    }

    

    

    return (
      <div>
        <select
          onChange={(e) => this.setState({ isRichard: e.target.value })}
          className="form-control">
          <option value="">Please select</option>
          <option value="true">Is your name Richard T?</option>
          <option value="false">Other</option>
        </select>

        <br />
        <div className="text-center">
          <h4>
            <strong>{answer}</strong>
          </h4>
          <br/>
          <div>{picture}</div>
          
        </div>
      </div>
    );
  }
}

export default Evaluate;
