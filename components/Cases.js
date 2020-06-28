import { render } from "react-dom";

class Cases extends React.Component {
  state = {
    byState: "NC",
  };

  render() {

    let list = (
        <li className="list-group-item">
          <div>
              <strong>Stats for North Carolina as of: {this.props.case.lastUpdateEt}.</strong>
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
