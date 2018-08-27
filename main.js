const viewer = new FORGE.Viewer("container", "config.json");


function hotspotsNavEvents(){
    const hotspotsNav = [...document.querySelectorAll('.hotspotNav')];
    hotspotsNav.forEach((hotspot)=>{
    hotspot.addEventListener('click', updateHotSpot)
    })
}
hotspotsNavEvents()

function updateHotSpot(){
    const hotspots = [...document.querySelectorAll('.hotspot')];
    hotspots.forEach((hotspot)=>{
        hotspot.setAttribute( "style", "display:none ");
    })
    checkHotspot()
}

function checkHotspot(){
    setTimeout(()=>{
        let uid = [...viewer.hotspots.all]
        uid.forEach((eachHspot)=>{ 
            eachHspot.dom.style.display = "block";
        })
    },500)
}




function openCloseBtn(){
    const openCloseContainer = [...document.querySelectorAll('.openClose')];
    openCloseContainer.forEach((elem) => {
        play(elem.firstElementChild, elem.lastElementChild, elem.previousElementSibling);
        close(elem.firstElementChild, elem.lastElementChild, elem.previousElementSibling);
    })
}
openCloseBtn()
    

function play(playBtn, closeBtn, container) {
    playBtn.addEventListener('click', function (e) {
        container.classList.remove('noDisplay');
        closeBtn.classList.remove('noDisplay');
        container.classList.add('display');
        closeBtn.classList.add('animateDisplay');
        playBtn.classList.add('noDisplay');
        container.parentElement.classList.add("animateDisplay");
    })
}


function close(playBtn, closeBtn, container ) {
    closeBtn.addEventListener('click', function () {
        container.classList.remove('display');
        playBtn.classList.remove('noDisplay');
        container.classList.add('noDisplay');
        closeBtn.classList.add('noDisplay');
        container.parentElement.classList.remove("animateDisplay");
        stopVideo(container)
    })
}

function stopVideo(elem){
    console.log(elem)
    if(elem.firstElementChild.firstElementChild.localName === "iframe")
        elem.firstElementChild.firstElementChild.src = elem.firstElementChild.firstElementChild.src;

    if(elem.firstElementChild.firstElementChild.localName === "video")
        elem.firstElementChild.firstElementChild.load();
}


function homeButton(){
    var btn = document.getElementById('newbtn');
    btn.addEventListener('click', elem => window.location = "http://167.99.152.108/")
}
homeButton()