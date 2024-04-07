const axios = require('axios')
const fs = require('node:fs')
const cheerio = require('cheerio');

const result = {}

axios.get("https://www.amazon.com/dp/B07ZFY2CQ5", {
  headers:  {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "device-memory": "8",
    "downlink": "10",
    "dpr": "2",
    "ect": "4g",
    "rtt": "50",
    "sec-ch-device-memory": "8",
    "sec-ch-dpr": "2",
    "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-ch-viewport-width": "967",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "viewport-width": "967",
    "cookie": "session-id=132-5743672-4334718; session-id-time=2082787201l; i18n-prefs=USD; ubid-main=135-6373845-9050055; session-token=eQpPS45bZdzBkwOE/qLrcj1ZRxXaqnMzN2mfFqNXZESgNvZEkA642IptkWN178bRbunPlGURhxBLiocdLOsypqbDqhmEndzJfu0Jg0bp4+FY9DOtKR4FNcQ6QWXGgaTdyHkEWsj2ugMSrwssnxzP3DM1LfIj9CxtB9LKzkxXQFCjkPbk5tLJdR+qWgok5e+6VqdAjIr4D0JUqGjpA6bXLvwHl0cHLfkhdafvrhDbRKl9RBWUUg/nhrtEwDJQGgdqfPLIGUU7weGM3UNjSppjMFduFq5IDs5BNda/dwl5osW76W4OzafmAZCwXemjNQ3OyuIk0z2/pM2v5CeQlZ2ijoLW0SRKHjxW; csm-hit=tb:s-M14Y9ZGSFJ5BJQRZ0VMW|1712524728671&t:1712524730998&adb:adblk_no"
  }
}).then(response => {
  const $ = cheerio.load(response.data)
  console.log($('#rpi-attribute-book_details-customer_recommended_age .rpi-attribute-value span').text())
})