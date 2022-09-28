import Year from "../Components/Year";


function Map() {
  return (
    <div className="App">
        <div style={{backgroundColor: 'red', display: "flex", justifyContent: "space-around", }}>
            <Year
            color= '#f2f2f2'
            yearNumber='1' 
            studentClass='Freshman'
            />
            <Year
            color= '#d9d9d9'
            yearNumber='2' 
            studentClass='Sophomore'
            />
            <Year
            color= '#bfbfbf'
            yearNumber='3' 
            studentClass='Junior'
            />
            <Year
            color= '#a6a6a6'
            yearNumber='4' 
            studentClass='Senior'
            />
        </div>
        {/* <p>Hello 2</p>
        <div class = "flex-container"> 
          <div class="item"> Item 1</div>
          <div class="item"> Item 2</div>
          <div class="item"> Item 3</div>
          <div class="year" style={{backgroundColor: 'grey'}}> Year 4 <p> Senior</p></div>
        </div>       */}
    </div>
  );
}

export default Map;
