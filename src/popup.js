let unblur = document.getElementById("unblur");

// When the button is clicked, inject unblurPage into current page
unblur.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  let url = tab.url;
  console.log('set:' + url);

  chrome.storage.sync.set({ url });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['jquery-3.5.1.min.js'],
  });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['unblur.js'],
  });
});
