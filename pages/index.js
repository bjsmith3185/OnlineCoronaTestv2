import Fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import Cases from '../components/Cases';
import Symptoms from '../components/Symptoms';
import TestButton from '../components/TestButton';


const Index = (props) => (
  <Layout>
    <div>
      <h1>Corona Testing Online 2.0</h1>
      <h5>Official 2nd wave tesing site.</h5>
      <br/>
      {/* <p>To begin taking your personalized Corona evaluation, click "Test Now" in the navbar.</p> */}
      <Cases case={props.case} />
      <br/>
      <Symptoms/>
      <br/>
      <TestButton/>

    </div>
  </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://covidtracking.com/api/v1/states/nc/current.json');
    
    const data = await res.json();

    console.log("here")
    console.log(data);
    return {
        case: data
    };
}

export default Index;
