const axios = require('axios')
const cheerio = require('cheerio')

scrapeMainPage()

async function scrapeMainPage() { 
 let data = await axios.get('https://catalog.stcloudstate.edu/programs/YD9I0SxsSAzcG6Z0yCiV')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(`Caught Error: ${error}`);
    })

  let $ = cheerio.load(data)

  $('article.main-content p a.custom-link').each(async (i,e)=>{
    // console.log($(e).attr('href'));
    let courseGroupID = $(e).attr('href').split('/').pop()
    // console.log(`courseGroupID: ${courseGroupID}`);
    callCourseAPI(courseGroupID)
  })
}



async function callCourseAPI(courseGroupID) { 
  let url = `https://app.coursedog.com/api/v1/cm/scsu/courses/search/$filters?courseGroupIds=${courseGroupID}&effectiveDatesRange=2021-08-30%2C2023-01-01&formatDependents=false&includeRelatedData=false&includeCrosslisted=false&includeCourseEquivalencies=false&includePending=false&returnResultsWithTotalCount=false`
  
  let data = await axios.get(url)
    .then((response) => {
      console.log(`Course Code: ${response.data.data[0].code}`)
      console.log(`Course Name:${response.data.data[0].name}`)
      console.log(`Course Description: ${response.data.data[0].description}\n`)
    })
    .catch((error) => {
      console.log(`Caught Error: ${error}`);
    })
}