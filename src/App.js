import "./App.css";
import MovieCard from "./MovieCard";

function App() {
  const arr = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1XwNPU27ezvLfDCTlyBwaQfCol5kfootfx3Fhz4&s", title: "SHAZAM", year: "2018" },
    { img: "https://upload.wikimedia.org/wikipedia/en/a/a7/BrightPoster.jpeg", title: "BRIGHT", year: "2022" },
    { img: "https://i.pinimg.com/originals/a3/55/83/a3558350a8f77d97d7ead34811cc1265.jpg", title:"UDAAN", year: "2020" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47LmWZIwIgxwnUHfPXNv1wYbUV2AQ-sKsENsn_zUZ&s", title: "THE ADAM PROJECT", year: "2021" },
  ];
  console.log(arr);
  return (
    <div className="App">
      <div className="interface">
        
            <MovieCard img={arr[0].img} title={arr[0].title} year={arr[0].year}/>
            <MovieCard img={arr[1].img} title={arr[1].title} year={arr[1].year}/>
            <MovieCard img={arr[2].img} title={arr[2].title} year={arr[2].year}/>
            <MovieCard img={arr[3].img} title={arr[3].title} year={arr[3].year}/>
        
        
      </div>
    </div>
  );
}

export default App;
