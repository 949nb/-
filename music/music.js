function $(selector){
  return document.querySelector(selector)
}
function $$(selector){
  return document.querySelectorAll(selector)
}



function getMusic(callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', '/music.json', 'true')
  xhr.send()
  xhr.onload = function () {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      callback(JSON.parse(xhr.responseText))
    }else{
      console.log('获取数据失败')
    }
}}

currentIndex = 0;
getMusic((list)=>{
  loadMusic(list[currentIndex])
})
function loadMusic(musicObj){
  console.log(musicObj)
}