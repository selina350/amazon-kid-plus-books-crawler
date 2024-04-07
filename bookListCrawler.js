const axios = require('axios')
const fs = require('node:fs')

const result = {}


const getPage = (pageToken = null, limit = 100) => {
  return axios.post(
    'https://parents.amazon.com/ajax/get-catalog-items?sif_profile=FTParentDashboard_SIF_NA',
    {
      contentTypeFilterList: ['EBOOK'],
      deviceFamilyFilterList: ['E_READER'],
      childDirectedIdFilter: null,
      subscriptionPresent: true,
      searchQuery: null,
      nextPageToken: pageToken,
    }, {
      'headers': {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json;charset=UTF-8',
        'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'x-amzn-csrf': process.env.CSRF,
        'cookie': process.env.COOKIE,
        'Referer': 'https://parents.amazon.com/explore?selectedContentType=EBOOK&selectedDevice=E_READER',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    }).then(response => {
    const { nextPageToken, itemList, lastPage, thumbnailUrl } = response.data
    itemList.forEach(item => {
      const id = item.itemId.replace('//amazon-book/', '')
      result[id] = { id, title: item.title, thumbnailUrl }
    })
    console.log('num of books finished', Object.values(result).length)
    writeIntoFile(JSON.stringify(result))
    if (Number(nextPageToken) < limit && !lastPage) {
      sleep(1000).then(() => {
        return getPage(nextPageToken, limit)
      })
    }
  }).catch(error => {
    console.error('Error:', error)
    //retry
    sleep(1000).then(() => {
      return getPage(pageToken, limit)
    })
  })
}

const writeIntoFile = (text) => {
  fs.writeFile('./book_list.json', JSON.stringify(result), err => {
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

getPage('3000', 4000)