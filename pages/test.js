import Layout from "../components/layout";
import Evaluate from "../components/Evaluate";
import styles from "./Test.module.css";

const Test = () => (
  <Layout>
    <div>
      <h1>Test for Corona</h1>
      <div className={styles.info1}>Results in as little as 500ms! *</div>
      <div className={styles.info2}>* Depending on your connection speed.</div>
      <br/>
      <div className={styles.info3}>Answer the question below.</div>
      <br/>
      <Evaluate/>
    </div>
  </Layout>
);


export default Test;
