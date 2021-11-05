import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading: true,
    movies:[]
  };
  componentDidMount(){// 랜더린될때 맨먼저 랜더링 됨.
    axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  render(){
    const {isLoading} = this.state;
    return <div>
      {isLoading ? "Loading": "We are ready"}
    </div>
  }
}
export default App;

