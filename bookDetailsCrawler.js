const axios = require('axios')
const fs = require('node:fs')
const cheerio = require('cheerio');

const result = {}
let bookList= []
fs.readFile('./book_list.json', (err, data) => {
  if (err) throw err;
  bookList = Object.values(JSON.parse(data))
  getBookDetails(847, 3630)
});
const getBookDetails = (index, endIndex) => {
  const book = bookList[index]
  console.log('book id: ',book.id)
  axios.get("https://www.amazon.com/dp/" + book.id, {
    headers:  {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "device-memory": "8",
      "downlink": "10",
      "dpr": "2",
      "ect": "4g",
      "rtt": "100",
      "sec-ch-device-memory": "8",
      "sec-ch-dpr": "2",
      "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-ch-viewport-width": "1132",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "viewport-width": "1132",
      "cookie": "csm-sid=480-2973126-5137054; x-amz-captcha-1=1712593405678456; x-amz-captcha-2=56L/xX8BJIgx40m6YzPxZA==; session-id=142-0985611-8603528; session-id-time=2082787201l; i18n-prefs=USD; ubid-main=133-8546878-7712917; csm-hit=tb:s-3A0V3S16T6RXP0TQG53P|1712586205975&t:1712586209419&adb:adblk_no; session-token=G5PpluY4SwoAWInjuli75i3DE4gjRCKGZsIafZXr1SFAfY1eoJI35Ulj9pSMW5gKxl/kxf4Qwi4iAAp/MCRkxddva4XRbFJvgvGXqOnljWqTJUnKXRhZqg5ZHy6tJHz/mnLqTP4OQOE4lPakK2kCsVMHi6Z63kJFkXvyOjp67blUIAFaX61sy7hbxj/fpIK9KkW9P7Ui2+eigjBVTrR0yemMBr0lSYCe5bwzAA72JgyS99I6wm4NqywoqU9Gkiuxo7g8M7jORDeISWhK9W0wbPC6mjRSDVK2JZxrpXWnAlPE8ONQ7SVgDVHDUlchcRKRvgEPSvWFvZ4TONboU8sY6Uxt4bybkry1",
      "Referer": "https://www.amazon.com/dp/"+book.id,
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
  }).then(response => {
    const $ = cheerio.load(response.data)
    let rate = $('#reviewFeatureGroup #acrPopover .a-icon-alt').text()
    if(rate){
      rate = rate.replace(' out of 5 stars', '')
    }

    let numOfRatings = $('#reviewFeatureGroup #acrCustomerReviewText').text()?.replace(' ratings', '')

    let recommendedAge = $('#rpi-attribute-book_details-customer_recommended_age .rpi-attribute-value .a-link-normal span').text()
    if(recommendedAge){
      recommendedAge = recommendedAge.replace(', from customers', '')
    } else {
      recommendedAge = $('#rpi-attribute-book_details-customer_recommended_age .rpi-attribute-value span').text()
    }

    let language = $('#rpi-attribute-language .rpi-attribute-value span')?.text()

    result[book.id] = {...book, rate, numOfReviews: numOfRatings,recommendedAge, language, index}
    console.log(result[book.id])
    writeIntoFile(JSON.stringify(result))
    sleep(10000).then(() => {
      if(index< endIndex){
        getBookDetails(index + 1, endIndex)
      }
    })
  }).catch(() => {
    sleep(10000).then(() => {
      if(index< endIndex){
        getBookDetails(index + 1, endIndex)
      }
    })
  })
}

const writeIntoFile = (text) => {
  fs.writeFile('./book_details.json', text, err => {
    if (err) {
      console.error(err)
    } else {
      // file written successfully
    }
  })
}

const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve()}, ms)
  })
}