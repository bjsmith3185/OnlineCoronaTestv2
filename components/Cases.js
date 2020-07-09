import { render } from "react-dom";

class Cases extends React.Component {
  state = {
    byState: "NC",
  };

  

  render() {

    let list = (
        <li className="list-group-item"
        style={{background: "#F8F8FF"}}>
          <div >
              <strong>North Carolina stats as of: {this.props.case.lastUpdateEt.slice(0, 8)}</strong>
          </div>

          <div>
            <span className="badge badge-success">Positive cases: {this.props.case.positive}.</span>
            <span>  </span>
            <span className="badge badge-danger">Negative cases: {this.props.case.negative}.</span>
          </div>
        </li>
      );


    return (
      <div>
        <ul className="list-group">{list}</ul>
      </div>
    );
  }
}

export default Cases;
