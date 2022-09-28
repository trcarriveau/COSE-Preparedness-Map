import Year from "../Components/Year";


function Map() {
  return (
    <div className="App">
        <Year
           color= '#f2f2f2'
           yearNumber='1' 
           studentClass='Freshman'
        />
        <Year
           color= '#f2f2f2'
           yearNumber='2' 
           studentClass='Sophomore'
        />
        <Year
           color= '#f2f2f2'
           yearNumber='3' 
           studentClass='Junior'
        />
        <Year
           color= '#f2f2f2'
           yearNumber='4' 
           studentClass='Senior'
        />
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
