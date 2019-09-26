

console.log("content loaded");

src=""



document.getElementsByClassName("ThumbUpButton")[0].addEventListener("click", function(){
  console.log("button clicked");
  var x = document.getElementsByTagName("audio");
  src = x[x.length-1].src;
  console.log(src);
  	let msg = {
		txt:src
	}
  browser.runtime.sendMessage(msg);
});

browser.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponse){
	console.log(src);
}