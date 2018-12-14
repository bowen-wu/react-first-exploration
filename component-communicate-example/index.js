class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        result1: 0,
        result2: 0,
        t0: new Date(),
      }
    }
    success1(e) {
      console.log(`兔子跑完了！${e}，用时 ->`);
      this.setState({
        result1: new Date() - this.state.t0,
      })
    }
    success2(e) {
      console.log(`乌龟跑完了！${e},用时 ->`);
      this.setState({
        result2: new Date() - this.state.t0
      })
    }
    render() {
      return (
        <div>
          <div class="header">
            <Time1 result={this.state.result1}/>
            <Judge />
            <Time2 result={this.state.result2}/>
          </div>
          <Playground success1={this.success1.bind(this)} success2={this.success2.bind(this)}/>
        </div>
        
      )
    }
  }
  
  class Time1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      
      }
    }
    render() {
      return (
        <div>
          <h2>🐰用时</h2>
          <div>{this.props.result}</div>
        </div>
      )
    }
  };
  
  class Track1 extends React.Component {
    constructor(props) {
      super(props);
      let n = 0;
      this.state = {
        style: {
          transform: `translateX(${n}%)`,
        },
      }
      let timerId = setInterval(() => {
        n += 25;
        this.setState({
          style: {
            transform: `translateX(${n}%)`,
          }
        });
        if(n >= 100) {
          clearInterval(timerId);
          this.props.success(`兔子速度为 -> 25`);
        }
      }, 1000);
    }
    render() {
      return (
        <div>
          <div class="player" style={this.state.style}>🐰</div>
          <div class="track"></div>
        </div>
      )
    }
  }
  
  class Time2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
    render() {
      return (
        <div>
          <h2>🐢用时</h2>
          <div>{this.props.result}</div>
        </div>
      )
    }
  }
  
  class Track2 extends React.Component {
    constructor(props) {
      super(props);
      let n = 0;
      this.state = {
        style: {
          transform: `tranlateX(${n}%)`,
        }
      }
      let timerId = setInterval(() => {
        n += 20;
        this.setState({
          style: {
            transform: `translateX(${n}%)`,
          }
        });
        if(n >= 100) {
          clearInterval(timerId);
          this.props.success(`乌龟速度为 -> 20`);
        }
        
      }, 1000)
    }
    render() {
      return (
        <div>
          <div class="player" style={this.state.style}>🐢</div>
          <div class="track"></div>
        </div>
      )
    }
  }
  
  class Judge extends React.Component {
    render() {
      return (
        <div>裁判</div>
      )
    }
  }
  
  class Playground extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      
      }
    }
    render() {
      return (
        <div class="playground">
          <Track1 success={this.props.success1.bind(this)}/>
          <Track2 success={this.props.success2.bind(this)}/>
        </div>
      )
    }
  }
  
  
  ReactDOM.render(<App />, document.querySelector('#root'));