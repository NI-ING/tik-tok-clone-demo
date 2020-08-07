import React, { useState, useEffect } from 'react';
import './App.css';
import Video from "./Video";
import db from './firebase'

function App() {

  useEffect(() => { //utiliser lors de load the componmnet
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);


  const [videos , setVideos] = useState([])
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({url , channel , description, song, shares, likes, messages})=>
          <Video 
            url={url}
            channel={channel}
            description={description}
            song={song}
            shares={shares}
            likes={likes}
            messages={messages}
          />
        )}
     
      </div>

    </div>
  );
}

export default App;
