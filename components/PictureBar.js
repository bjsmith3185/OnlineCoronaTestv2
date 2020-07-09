import { render } from "react-dom";

class PictureBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageList: [
        "https://cdn.homedics.com/media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/m/s/msk-f1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFlHhVX_6NV02EnmlsUSzNB2LBoRhLiX7gtQ&usqp=CAU",
        "https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Coronavirus-empty-shelves.png?itok=ec7giIOK",
        "https://www.nicepng.com/png/detail/118-1186281_wash-hands-png-wash-your-hands-clip-art.png",

      ],

      index: 0,

    };
  }

  componentDidMount() {
    this.myTimer();
   // this.populatePictureList();
  }

  // populatePictureList = () => {
  //   var imgArray = new Array();

  //   imgArray[0] = new Image();
  //   imgArray[0].src = "/images/washing-hands.png";
  //   console.log("pic added to the temp array")
  //   console.log(imgArray[0])

  //   this.setState({staticPictureList: imgArray[0]})
  //   console.log("set static pic list")
  //   console.log(this.state.staticPictureList[0])
  // };

  myTimer = () => {
    if (this.state.index > 3) {
      console.log("picture index is over 10");
      this.setState({ index: 0 });
    }

    setTimeout(
      function () {
        this.setState({ index: this.state.index + 1 });
        console.log("picture index after increase");
        console.log(this.state.index);
        this.myTimer();
      }.bind(this),
      5000
    );
  };

  //   componentDidMount() {
  //     this.myTimer();
  //   }

  //   myTimer = () => {
  //     if (this.state.index > 4) {
  //       console.log("picture index is over 10");
  //       this.setState({ index: 0 });
  //     }

  //     setTimeout(
  //       function () {
  //         this.setState({ index: this.state.index + 1 });
  //         console.log("picture index after increase");
  //         console.log(this.state.index);
  //         this.myTimer();
  //       }.bind(this),
  //       5000
  //     );
  //   };

  render() {
    return (
      <div className="text-center"> 
        <img
          style={{ height: "200px", width: "200px" }}
          src={this.state.imageList[this.state.index]}
          alt="no image available"
        />
      </div>
    );
  }
}

export default PictureBar;
