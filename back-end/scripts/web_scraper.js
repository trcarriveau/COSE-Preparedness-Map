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

  // console.log(`Data`);
  // console.log(data);

  let $ = cheerio.load(data)


  $('a.custom-link').each(async (i,e)=>{
    console.log($(e).attr('href'));
    let data = await scrapeCoursePage($(e).attr('href'))
    console.log(`${data.title} === ${data.description}`);
  })
}

// scrapeCoursePage('https://catalog.stcloudstate.edu/courses/00161721')



async function scrapeCoursePage(href) { 
  let data = await axios.get(`https://catalog.stcloudstate.edu${href}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(`Caught Error: ${error}`);
    })

    let $ = cheerio.load(data)

    let title = $('#__layout > div > div > div > div > section > div > article > h1').html()
    let description = $('#aoYks > div > div:nth-child(3) > div > div').html()
    return { title: title, description: description };
}
