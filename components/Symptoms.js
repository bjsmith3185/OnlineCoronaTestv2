import { render } from "react-dom";
import styles from './Symptoms.module.css'

class Symptoms extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            symptomList : [
                "Sore Throat.",
                "Fatigue.",
                "Hungry For Pizza.",
                "Tired of Being Home.",
                "Body Aches.",
                "Empty Wallet.",
                "Sleepy.",
                "TBD Symptom..",
                "Face Mask Tan.",
                "Long Hair or Mullet.",
                "Feeling Hot Outside.",
                "Forgetting What Day It Is.",
                "$1900 Monthly Grocery Bill"
            ],
            index: 0
        }
       
    }
  
    componentDidMount() {
     this.myTimer();
    }

    myTimer = () => {
            if ( this.state.index > 11 ) {
                //console.log("index is over 10")
                this.setState({index:0})
            }


        setTimeout(
            function() {
                this.setState({index: this.state.index + 1});
                // console.log("after increase")
                // console.log(this.state.index)
                this.myTimer();
            }.bind(this), 5000)
    }





render() {

    return (
        <div className={styles.sympComponent}>

            <div className={styles.title}>New Side Effects May Include..</div>

            <div className={styles.sideEffects}>{this.state.symptomList[this.state.index]}</div>

        </div>
    )

}


}

export default Symptoms;







