//console.log(document.getElementsByTagName("source")[0].src);

chrome.runtime.sendMessage({link: document.getElementsByTagName("source")[0].src});