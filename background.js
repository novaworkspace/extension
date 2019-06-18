chrome.contextMenus.create({
  title: 'Открыть iframe',
  contexts: ['frame'],
  onclick: openFrame
});

function openFrame(e) {
  chrome.tabs.create({ url: e.frameUrl })
}