var form = document.getElementById("videoUrlForm");
var formInput = document.getElementById("videoUrlInput");
var formBtn = document.getElementById("videoUrlBtn");
var formInvalidUrlP = document.getElementById("invalidUrl");
var formBtnSpinner = document.getElementById("videoUrlBtnSpinner");
var downloadSection = document.getElementById("downloadSection");
var youtubeTitle = document.getElementById("youtubeTitle");
var youtubeDuration = document.getElementById("youtubeDuration");
var youtubeUrl = document.getElementById("youtubeUrl");
var downloadBtn = document.getElementById("download");
var inputUrl = "";
var phase = "find";
var downloadData = {
    duration: 0,
    link: "",
    title: ""
};
var downloadDataProxy = new Proxy(downloadData, {
    set: function (downloadData, property, val) {
        var el;
        if (property === "link") {
            el = youtubeUrl;
        }
        else if (property === "duration") {
            el = youtubeDuration;
        }
        else {
            el = youtubeTitle;
        }
        populateTextContent();
        return Reflect.set(downloadData, property, val);
    }
});
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (formInput.value.length > 10 && formInput.value.includes("=")) {
        inputUrl = formInput.value;
        if (phase === "find") {
            var videoId = getVideoId(inputUrl);
            fetchDownloadData(videoId);
            phase = "downloadReady";
            formBtn.textContent = "Clear";
            downloadSection.classList.remove("hidden");
        }
        else if (phase === "downloadReady") {
            phase = "find";
            formBtn.textContent = "Find";
            formInput.value = "";
            downloadSection.classList.add("hidden");
        }
        formInvalidUrlP.classList.add("hidden");
    }
    else {
        formInvalidUrlP.classList.remove("hidden");
    }
});
formInput.addEventListener("change", function (e) {
    !formInvalidUrlP.classList.contains("hidden")
        ? formInvalidUrlP.classList.add("hidden")
        : null;
});
downloadBtn.addEventListener("click", function () {
    if (phase === "downloadReady" && downloadData.link) {
        window.open(downloadData.link);
    }
});
function getVideoId(youtubeUrl) {
    var videoId = youtubeUrl.slice(youtubeUrl.indexOf("=") + 1, youtubeUrl.indexOf("=") + 12);
    return videoId;
}
function fetchDownloadData(videoId) {
    formBtnSpinner.classList.remove("hidden");
    fetch("https://youtube-mp36.p.rapidapi.com/dl?id=".concat(videoId), {
        method: "GET",
        headers: {
            "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
            "x-rapidapi-key": "afb4357c20mshbd32f7819e6ed8ep1efeabjsn4c84245093a9"
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        downloadDataProxy.link = data.link;
        downloadDataProxy.title = data.title;
        downloadDataProxy.duration = data.duration;
        console.log(data);
        formBtnSpinner.classList.add("hidden");
        if (data.message) {
            youtubeDuration.textContent = "Sorry. " + data.message;
            downloadBtn.classList.add("hidden");
        }
        else {
            downloadBtn.classList.remove("hidden");
        }
    })["catch"](function (err) {
        console.error(err);
    });
}
function populateTextContent() {
    youtubeUrl.textContent = inputUrl;
    youtubeDuration.textContent = (downloadData.duration / 60).toFixed(2);
    youtubeTitle.textContent = downloadData.title;
}
