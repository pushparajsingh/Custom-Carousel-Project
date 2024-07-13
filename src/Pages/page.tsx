import React, { Component } from "react";

interface MyProps {}

interface MyState {
  imgList: string[];
  count: number;
}

let intervalValue:any;
export default class Page extends Component<MyProps, MyState> {
  constructor(Props: MyProps) {
    super(Props);
    this.state = {
      imgList: [
        "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/65894/peacock-pen-alluring-yet-lure-65894.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2236713/pexels-photo-2236713.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1681236/pexels-photo-1681236.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      count: 0,
    };
  }

  handleChangeImg(val: number) {
    this.setState(()=>{
         return({count:(this.state.count + val == 5) ? 0 : (this.state.count + val == -1) ? 4 :this.state.count + val});
    });
  }
  startCarousale() {
    intervalValue = setInterval(()=>{
        this.handleChangeImg(1);
    },2000);
  }
  stopCarousel(){
    clearInterval(intervalValue);
  }

  render() {
    
    return (
      <div>
        <h1>Custom Carousel {`${this.state.count}`}</h1>
        <button onClick={() => this.startCarousale()} style={{ marginRight: "10px", marginBottom: "10px" }}>Start</button>
        <button
          onClick={() => this.handleChangeImg(-1)}
          style={{ marginRight: "10px", marginBottom: "10px" }}
        >
          Left Img
        </button>
        <button onClick={() => this.handleChangeImg(1)}>Right Img</button>
        <div className="corouserl-img" onMouseEnter={()=>this.stopCarousel()} onMouseLeave={()=>this.startCarousale()}>
          <img
            src={this.state.imgList[this.state.count]}
            alt="Image"
            title="Image"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    );
  }
}
