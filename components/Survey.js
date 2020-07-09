import styles from "./Survey.module.css";

class Survey extends React.Component {
  state = {
    noCount: 99,
    hasClicked: false
  };

  increase = () => {
    this.setState({ noCount: this.state.noCount + 1 });
    this.setState({hasClicked: true});
  };

  render() {
    return (
      //   <div className="text-center">
      <div className={styles.surveyComponent}>
        <strong className={styles.title}>Survey</strong>

        <div className={styles.questionBlock}>
          <span className={styles.question}>Do you like Covid?</span>
          <span className={styles.disclaimer}>CDC Official Question</span>
        </div>

        <div className={styles.buttonGroup}>
          <span>
            <button className={styles.greenButton} onClick={this.increase}>
              No
            </button>
          </span>
          <span>
            <button className={styles.redButton} onClick={this.increase}>
              Yes
            </button>
          </span>
        </div>

        <div>
        {this.state.hasClicked ? 
        <div className={styles.results}>
            <span className={styles.noResult}>No = {this.state.noCount}</span>
            <span className={styles.yesResult}>Yes = 0</span>
        </div> 
        : 
        <div />}
        </div>

      </div>
    );
  }
}

export default Survey;
