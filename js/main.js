const instance = new vidbg(".video", {
  mp4: "video/world.mp4", 
  poster: "video/poster.jpg", 
  overlay: false,
});
const rellax = new Rellax(".rocket");
if (document.body.clientWidth < 576) {
  rellax.destroy();
}

AOS.init();
