import React, {Component} from 'react';
import ImageCard from './components/imageCard';
import ImageSearch from './components/imageSearch';


class App extends Component {
  state = { 
    image: [],
    Searchterm: '',
    isLoading: true
   }
async componentDidMount() {

}

  render() { 
    return (  
    <div className=" container max-w-sm">
      <ImageCard/>
    </div>
    );
  }
}
 
export default App;
