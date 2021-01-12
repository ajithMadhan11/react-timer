import React,{Component} from 'react';

class Timer extends Component {


  componentDidMount (){
    this.timer=setInterval(this.Timer,1000)
  }

      Timer(){
        this.setState({clock: new Date() - this.props.start})
      }
    constructor(props){
      super(props);

      this.state = {
        clock:0
      };
      this.Timer=this.Timer.bind(this);
    }

  render(){

  var clockUpdated = Math.round(this.state.clock/1000)
    return(
      <div>
          <span>{clockUpdated}</span>
          <p>seconds</p>
      </div>
    );
  }
}
export default Timer;
