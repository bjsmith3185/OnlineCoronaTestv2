import Fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import Cases from '../components/Cases';


const Index = (props) => (
  <Layout>
    <div>
      <h1>Welcome to corona testing online!</h1>
      <h5>The official CDCc tesing site.</h5>
      <br/>
      <p>To begin taking your personalized Corona evaluation, click "Test Now" in the navbar.</p>
      <Cases case={props.case} />
      {/* <Prices bpi={props.bpi}/> */}
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
