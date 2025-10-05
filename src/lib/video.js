export function loadvideo(){
    const vid = document.createElement("video");
    vid.src = "https://shrek.hexanti.fr/shrek.mp4";
    vid.autoplay = true;
    vid.loop = true;
    vid.controls = false;
    vid.style.position = "fixed";
    vid.style.top = 0;
    vid.style.left = 0;
    vid.style.width = "100%";
    vid.style.height = "100%";
    vid.style.objectFit = "cover";
    vid.style.zIndex = 9999;
    vid.muted = true;
    vid.volume = 0;
    return vid;
}
