import {useEffect,useState} from "react";
import Player from "./components/Player";
function App() {

  const[songs]= useState([
    {
      title:"Baby",
      artist:"Justin bieber",
      img_src:"./images/baby.jpg",
      src:"./songs/baby.mp3"
    },
    {
      title:"Faded",
      artist:"Alan Walker",
      img_src:"./images/Faded.jpg",
      src:"./songs/Faded.mp3"
    },
    {
      title:"Iktara",
      artist:"Amit Trivedi",
      img_src:"./images/Iktara.jpg",
      src:"./songs/Iktara.mp3"
    },
    {
      title:"In Dino",
      artist:"Pritam",
      img_src:"./images/indino.jpg",
      src:"./songs/indino.mp3"
    },
    {
      title:"Naina Da Kya Kasoor",
      artist:"Amit Trivedi",
      img_src:"./images/nainadakyakasoor.jpg",
      src:"./songs/nainadakyakasoor.mp3"
    },
    {
      title:"Perfect",
      artist:"Ed Sheeran",
      img_src:"./images/Perfect.jpg",
      src:"./songs/Perfect.mp3"
    },
  ])
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
