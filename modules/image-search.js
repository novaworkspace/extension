chrome.contextMenus.create({
  title: 'Найти похожее',
  contexts: ['image'],
  onclick: searchImage
});

function searchImage(e) {
  const image = e.srcUrl

  const google = encodeURI(`https://www.google.ru/searchbyimage?image_url=${image}`)
  const yandex = encodeURI(`https://yandex.ru/images/search?url=${image}&rpt=imageview`)

  chrome.tabs.create({ url: google })
  chrome.tabs.create({ url: yandex, active: false })
}