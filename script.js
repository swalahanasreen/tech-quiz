var i;

function change() {
    var divtag = document.getElementById("div1");
    var bgcolor = ["red", "yellow", "brown", "purple"];
    divtag.style.backgroundColor = bgcolor[i];
    i = (i + 1) % bgcolor.length;
}
setIsetInterval(change, 2000);