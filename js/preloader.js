$(document).ready(function () {
init()
});

async function init() {
    document.getElementById("header").style.display = 'none';
    document.body.style.display = 'none';
    document.body.style.overflowY = 'hidden';
    await delay(1000)
    await delay(1000)
    $("body").fadeIn(300);
    $("#wrapper").fadeOut(10);
    window.scroll({top: 99999});
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.getElementById("header").style.display = '';
    document.body.style.overflowY = '';
    document.getElementById("wrapper").style.display = 'none';
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}