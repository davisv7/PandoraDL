

browser.browserAction.onClicked.addListener(buttonClicked);
browser.runtime.onMessage.addListener(gotMessage);

src =""

function buttonClicked(tab){
	console.log(src);
	if (src.length>0){
		var downloading = browser.downloads.download({
	  url : src,
	  filename : 'song.mp3',
	  conflictAction : 'uniquify'
	});
	downloading.then(onStartedDownload, onFailed);	
	}
	

}

function gotMessage(message,sender,sendResponse){
	src=message.txt
	console.log(src);	
}


function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}

