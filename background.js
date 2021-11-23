chrome.runtime.onMessage.addListener(function(request){
    console.log(request.link);
    chrome.tabs.update(undefined, { url: request.link });
}
  )