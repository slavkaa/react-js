import React, {useState} from 'react';
import './App.css';
import PostsList from "./components/PostsList";

function App() {
  return (
    <div className="app">
      <PostsList defaultId="6"/>
      <PostsList defaultId="7" posts={[{
        id: 5,
        title: "The WebSocket Handbook: learn about the technology behind the realtime web",
        badge: "Sponsor",
        date: "March 7th, 2022",
        image: "tumbnails/websocket-ad-2200x1100-v1.0.jpg",
        text: "Learn about the technology behind the realtime web with the WebSocket Handbook"
      }]} />
    </div>
  );
}

export default App;
