const axios = require('axios')
axios.post(
  'https://parents.amazon.com/ajax/get-catalog-items?sif_profile=FTParentDashboard_SIF_NA',
  {
    'contentTypeFilterList': [
      'EBOOK',
    ],
    'deviceFamilyFilterList': [
      'E_READER',
    ],
    'childDirectedIdFilter': null,
    'subscriptionPresent': true,
    'searchQuery': null,
    'nextPageToken': '3000',
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
      'x-amzn-csrf': 'hEs9ZnEFfjn4U72WIy3c7UE5yYzsGeV16goFBe91AhUqAAAAAGYTEMIAAAAB',
      'cookie': 'session-id=143-4630864-0810317; skin=noskin; ubid-main=135-9123276-2246719; x-main=ifFhxpPCtvrfKCZ5I8I5PbsMDV3qcd8Q; sst-main=Sst1|PQHlYx8DCs09JYdedm6vP3BgCUBv0EG9vPnus2aYH16HXHrDCnq_HcCGyYGwPr6jSWCZwAYuCVa-OfzG1ZV-E8icuwLv35rPtMJV1dCr3we-vGl25amvCpOEMkkclWgpdG9T8wAaAQDPFhEMiig8NsQ_2pgpYy_iAD0bx5BBmSx_XIdDE69l2g_rwZ4C2q4Esg4TeLekLOTMKRP8kyKQtHugKDYaC_cYOpoo6BV3N6lkZH814LE1Dx_dvNUzgypGb6w1XVuLoPgAhFVZUESHCXZO3wUOzRuAhDZfV7pMxiE4uj4; lc-main=en_US; i18n-prefs=USD; aws_lang=en; aws-target-data=%7B%22support%22%3A%221%22%7D; AMCVS_7742037254C95E840A4C98A6%40AdobeOrg=1; s_cc=true; aws-ubid-main=342-1014160-1715666; aws-session-id=133-8863859-6178008; __utma=194891197.576717123.1699482668.1699482668.1699482668.1; __utmc=194891197; __utmz=194891197.1699482668.1.1.utmccn=(referral)|utmcsr=signin.aws.amazon.com|utmcct=/|utmcmd=referral; aws-session-id-time=2330202670l; aws-session-token="OE5zPwkp4UrV4LXMewGc7KTdIQT6Kqn1tiP5736GQE8ltJugjKCUt1ZW49CEXrRkEm2oNCBRrWmB15i9igqJyvCGGW+JQLU7O0TO/QmbvB2/BDuSSdYZfTtmfWD/KPeXgyz/pTL/OV4V6V+zfn5Tx4EOIQ7RfDbP8PkTrmFXTPmKv6ZJ+ySLfUQ6ACiZKq3Pz0brlWPMqOYU9dmKyB3kU5iJ0svNqf4SrlU8R9DO6YcDm3SzM/gUby3i1W66AF8eg068+6Gun9hGswJsx2FSBjp2LgEhpGx954QkaQVPFhJhUqpi321GSv88rhmX4sVymL/+zuWs3Cp4HshCKAHM0tMDONnClf+J2W0k4J2EExOgi6WwZ3AQSw=="; sess-aws-at-main="VUAyHkiUD7N7wmhkli4cx1D7Qp3U2RTdfy1cIuu8yKk="; aws-mkto-trk=id%3A112-TZM-766%26token%3A_mch-aws.amazon.com-1699768608154-43312; regStatus=registered; s_vnum=2143410045238%26vn%3D1; s_nr=1711410351217-New; s_dslv=1711410351218; s_ppv=51; aws-target-visitor-id=1699482490560-359326.44_0; aws-userInfo-signed=eyJ0eXAiOiJKV1MiLCJrZXlSZWdpb24iOiJ1cy1lYXN0LTEiLCJhbGciOiJFUzM4NCIsImtpZCI6ImRmMDYyMjgyLTE4OGUtNDdmYi1hNjc1LThiYjllYWNhMzc3NCJ9.eyJzdWIiOiIiLCJzaWduaW5UeXBlIjoiUFVCTElDIiwiaXNzIjoiaHR0cDpcL1wvc2lnbmluLmF3cy5hbWF6b24uY29tXC9zaWduaW4iLCJrZXliYXNlIjoiNWVTVGJRdjkzU2RUU29XbWYybFJtZ2hiRUZrNlRneVFmWWhPT1d1TFJsOD0iLCJhcm4iOiJhcm46YXdzOmlhbTo6NTc2ODI2NDY5MDgyOnJvb3QiLCJ1c2VybmFtZSI6IlpoaXl1YW4lMjBMaSJ9.POgNMCBnesyxaA7Q2aUkud1XON5_kDwn9gaZOmeoZjiyTRtqNw0UOoJbVUMgtnuhh5s8079yJAs5sFLQVd3OYtMX5ZYX0QARuY5IzlPS3BrXyo6UQxvdPbUGiHp505AJ; aws-userInfo=%7B%22arn%22%3A%22arn%3Aaws%3Aiam%3A%3A576826469082%3Aroot%22%2C%22alias%22%3A%22%22%2C%22username%22%3A%22Zhiyuan%2520Li%22%2C%22keybase%22%3A%225eSTbQv93SdTSoWmf2lRmghbEFk6TgyQfYhOOWuLRl8%5Cu003d%22%2C%22issuer%22%3A%22http%3A%2F%2Fsignin.aws.amazon.com%2Fsignin%22%2C%22signinType%22%3A%22PUBLIC%22%7D; AMCV_7742037254C95E840A4C98A6%40AdobeOrg=1585540135%7CMCIDTS%7C19809%7CMCMID%7C32770748753040996141379664295833995269%7CMCAAMLH-1712155180%7C7%7CMCAAMB-1712155180%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1711557580s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.4.0; s_campaign=ps%7Cfce796e8-4ceb-48e0-9767-89f7873fac3d; s_eVar60=fce796e8-4ceb-48e0-9767-89f7873fac3d; s_sq=awsamazonallprod1%252Cawsamazonallprodcopy1%252Cawsamazonallprodcopy2%3D%2526pid%253Daws.amazon.com%25252Fgetting-started%25252Fhands-on%25252Fdeploy-docker-containers%2526pidt%253D1%2526oid%253DClose%2526oidt%253D3%2526ot%253DSUBMIT; session-id-time=2082787201l; av-timezone=America/New_York; sess-at-main=WTTu9K7rDa2F53Lf/37Wnt9WPGkj36wU/7QTy2DUeS4=; at-main=Atza|IwEBIInUedT9dj53dIk4pN6-1kGV8nkbdduieGpb8Bo_7wk-FNvYsz-WD1YdlVtDo76m5BJaFWExu6ZK2_0gVGFAE6mC_vwXSSObRGZkzO3s6rZHWGx1I_QoSO7GbXPVuzA0C30LVzLc1FmoXRmhHTkGsasY00THD5VfYJxisllvjsOH0MsyD2ECCclB-IzDqdJmia3Kh6c4DcPgwQTDrzhpqaerC83l3QWXTzHwRlZJ61J-RFTSZvUyNP-lgDQ0hohqimVVXakVD0HSvZqgP0Zr6JJF6xFrHBZH6h7v-D327pNFvo42fmdHYQ4Zd5jgxLPoukD2_26yGeOUYXJS97-1fkBp; ft-ftue-version=1; AWSALB=9ER8G/y+WssfbJnCXBD1uaDJkvuockqQ05beLz1M2pcPxZ48UBY0NMMaSIQIswgmSzpSpecKEPex9wM3jGkrKSvyFM6G/3fiRZ26aRg/wx2NwXAH+oPeWmtIDtW6; AWSALBCORS=9ER8G/y+WssfbJnCXBD1uaDJkvuockqQ05beLz1M2pcPxZ48UBY0NMMaSIQIswgmSzpSpecKEPex9wM3jGkrKSvyFM6G/3fiRZ26aRg/wx2NwXAH+oPeWmtIDtW6; next-i18next=en-US; ft-session=c382a150-4e46-44db-9d69-0c918dacfcbe; session-token=sWQopzmnqxa9mj39LywL0mC/dA86cErSAA6L12ILgpP1LfesxLdFQzRXa3lTo6k3aTwBL5vfNxkFxAbA7dq8NPD8pp3e08qRUZDXvLycNOn+kdaOLs/F8reUQBHl6uYlw2vCmPIswzt+vdGuv/iH2qcQ7gUfhvb+FxtStnXsSeoYLFykPBfbpSTol3DZSA/zEBTnhgwP/Sd2Ok5n7CLPvuEgoCJsrPK3MyOszDSVmQVIxOghtDbOWrXyCwk1tvabJjEAWXU1DNzQuFPwM6tuFokhX16Rsvr2ubpl63hTrQqLRbm5i07ULDJ/CZYdmH1ghgmVuWPUb495l1i1kj5PHonU5fPyDUOnR9FvsFcffo6DHn9NUYgeIY1+68ymH7bkaeBAgfp/rSvAQyxTcUtqcw1kjpAfds4KLqj9xi0dlrXIxaGOgXOhlg; csm-hit=tb:9F29CA12Z26Q8HKZ4KAQ+s-9F29CA12Z26Q8HKZ4KAQ|1712525506071&t:1712525506071&adb:adblk_no; ft-panda-csrf-token=hEs9ZnEFfjn4U72WIy3c7UE5yYzsGeV16goFBe91AhUqAAAAAGYTEMIAAAAB',
      'Referer': 'https://parents.amazon.com/explore?selectedContentType=EBOOK&selectedDevice=E_READER',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  }).then((response) => {
  console.log(response.data)
})