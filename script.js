var share = document.getElementById("shareDrawer");
var author = document.getElementById("authorDetails");
share.style.display = "none";

function toggleMobile() {
    if (share.style.display === "none") {
    share.style.display = "flex";
    author.style.display = "none";
    }

    else if (author.style.display === "none") {
        author.style.display = "flex";
        share.style.display = "none";
    }
}

function toggleDesktop() {
    if (share.style.display === "none") {
        share.style.display = "flex";
    }
    else if (share.style.display === "flex") {
        share.style.display = "none";
    }
}