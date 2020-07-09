import Fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import Cases from '../components/Cases';
import Symptoms from '../components/Symptoms';
import TestButton from '../components/TestButton';
import PictureBar from '../components/PictureBar';
import Survey from '../components/Survey';


const Index = (props) => (
  <Layout>
    <div  style={{background: "#F8F8FF"}}>
      <h1>Corona Testing 2.0</h1>
      <h5>Official 2nd wave testing site.</h5>
      <br/>
      {/* <p>To begin taking your personalized Corona evaluation, click "Test Now" in the navbar.</p> */}
      <Cases case={props.case} />
      <br/>
      <Survey />
      <br/>
      <Symptoms/>
      <br/>
      <TestButton/>
      <br/>
      <PictureBar/>
      <br/>
     

    </div>
  </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://covidtracking.com/api/v1/states/nc/current.json');
    
    const data = await res.json();

    console.log("North Carolina Corona Data")
    console.log(data);
    return {
        case: data
    };
}

export default Index;
