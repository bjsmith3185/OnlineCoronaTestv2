import Link from "next/link";

const TestButton = () => (

    <div>
        <button type="button" className="btn btn-danger" >
            <Link href="/test" ><a style={{color: 'white'}}>Test Now</a></Link>
        </button>

    </div>



);


export default TestButton;
