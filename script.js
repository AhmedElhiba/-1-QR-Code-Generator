let imgbox = document.getElementById("imgbox");
let qrplace = document.getElementById("qrplace");
let qrimg = document.getElementById("qrimg");
function Generateqr() {
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrplace.value;
    imgbox.classList.add("show-img");
}