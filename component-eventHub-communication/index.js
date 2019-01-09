function App() {
    return (
        <div className='app'>
            <Papa1 />
            <Papa2 />
        </div>
    )
  }
  
  class Papa1 extends React.Component {
      constructor(props) {
          super(props);
      }
      render() {
          return (
              <div className='papa'>
                  Papa1 <hr />
                  <Son1 />
                  <Son2 />
              </div>
          )
      }
  
  }
  
  class Papa2 extends React.Component {
      constructor(props) {
          super(props);
      }    
      render() {
          return (
              <div className='papa'>
                  Papa2 <hr />
                  <Son3 />
                  <Son4 />
              </div>
          )
      }
  }
  
  class Son1 extends React.Component {
      constructor(props) {
          super(props);
      }
      render() {
          return (
              <div className='son'>
                  Son1 
              </div>
          )
      }
  }
  
  class Son2 extends React.Component {
      constructor(props) {
          super(props);
      }
      render() {
          return (
              <div className='son'>
                  Son2 
              </div>
          )
      }
  }
  
  class Son3 extends React.Component {
      constructor(props) {
          super(props);
      }
      render() {
          return (
              <div className='son'>
                  Son3 
              </div>
          )
      }
  }
  
  class Son4 extends React.Component {
      constructor(props) {
          super(props);
      }
      render() {
          return (
              <div className='son'>
                  Son4 
              </div>
          )
      }
  }
  
  ReactDOM.render(<App />, document.querySelector('#root'));
  
  
  
  
  
  
  
  