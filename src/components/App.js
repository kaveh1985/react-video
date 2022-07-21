import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



class App extends React.Component {
  state = { 
      videos: [],
      selectedVideo: null
    }

    componentDidMount() {
       this.onTermSubmit('cartoon')
    }


   onTermSubmit = async (term) => {
     const response = await youtube.get('/search', {
        params: {
          q: term
        }
      })
    
        this.setState(() => {
          return {
            videos: response.data.items,
            selectedVideo: response.data.items[0]
          }
        })
      
   }

   onVideoSelect = (video) => {
        this.setState(() => {
          return {

            selectedVideo: video
          }
        })
   }
 
  render() {
    return (
     <div className="App">
          <SearchBar onTermSubmit={this.onTermSubmit}/>
        <div className="ui grid">
            <div className="ui row">
              <div className=" eleven wide column">
                <VideoDetail  video={this.state.selectedVideo}/>
              </div>
              <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
              </div>
            </div>
        </div>
      </div>
   )
  }
}



export default App;
