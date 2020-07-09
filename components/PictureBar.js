import { render } from "react-dom";

class PictureBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageList: [
        "https://cdn.homedics.com/media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/m/s/msk-f1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFlHhVX_6NV02EnmlsUSzNB2LBoRhLiX7gtQ&usqp=CAU",
        "https://img.foodmanufacturing.com/files/base/indm/all/image/2020/04/16x9/AP20097304949344.5e8ca660dd23f.png?auto=format&fit=crop&h=394&w=700",
        "https://www.nicepng.com/png/detail/118-1186281_wash-hands-png-wash-your-hands-clip-art.png",
        "https://www.clipartmax.com/png/middle/196-1962687_washing-hands-with-soap-cartoon-download-washing-hands-clip-art.png",
        "https://www.pngkit.com/png/detail/164-1643216_himalaya-hand-sanitizer-pure-hands-500-ml-himalaya.png",
        "https://images.squarespace-cdn.com/content/v1/56a7b5951c1210756e3465c1/1588260842867-U09QCYF913PWBZUR5NA0/ke17ZwdGBToddI8pDm48kGh9ZJ2O0qy0uKSL-_2aFaR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0tVKkOu97tLoEUCMOIXiAV46WLB4Mpo4oPXEhDdhWMhycxyyYCssjrvYNcG08yYyYQ/Covid.png",
        "https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/how-to-work-from-home-5e7b35bdf1955.png"

      ],

      index: 0,

    };
  }

  componentDidMount() {
    this.myTimer();
  }


  myTimer = () => {
    if (this.state.index > 8) {
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
