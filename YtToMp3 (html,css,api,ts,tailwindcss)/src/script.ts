const form = document.getElementById("videoUrlForm")!;
const formInput = document.getElementById("videoUrlInput") as HTMLInputElement;
const formBtn = document.getElementById("videoUrlBtn")!;
const formInvalidUrlP = document.getElementById("invalidUrl")!;
const formBtnSpinner = document.getElementById("videoUrlBtnSpinner")!;

const downloadSection = document.getElementById("downloadSection")!;
const youtubeTitle = document.getElementById("youtubeTitle")!;
const youtubeDuration = document.getElementById("youtubeDuration")!;
const youtubeUrl = document.getElementById("youtubeUrl")!;
const downloadBtn = document.getElementById("download")!;

let inputUrl: string = "";
let phase: string = "find";
let downloadData: downloadDataInterface = {
  duration: 0,
  link: "",
  title: "",
};

const downloadDataProxy = new Proxy(downloadData, {
  set(downloadData, property: string, val) {
    let el: Element | null;
    if (property === "link") {
      el = youtubeUrl;
    } else if (property === "duration") {
      el = youtubeDuration;
    } else {
      el = youtubeTitle;
    }
    populateTextContent();
    return Reflect.set(downloadData, property, val);
  },
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    formInput.value.length > 10 &&
    formInput.value.includes("=") &&
    formInput.value.includes("&")
  ) {
    inputUrl = formInput.value;
    if (phase === "find") {
      const videoId: string = getVideoId(inputUrl);
      fetchDownloadData(videoId);
      phase = "downloadReady";
      formBtn.textContent = "Clear";
      downloadSection.classList.remove("hidden");
    } else if (phase === "downloadReady") {
      phase = "find";
      formBtn.textContent = "Find";
      formInput.value = "";
      downloadSection.classList.add("hidden");
    }
    formInvalidUrlP.classList.add("hidden");
  } else {
    formInvalidUrlP.classList.remove("hidden");
  }
});
formInput.addEventListener("change", (e) => {
  !formInvalidUrlP.classList.contains("hidden")
    ? formInvalidUrlP.classList.add("hidden")
    : null;
});
downloadBtn.addEventListener("click", () => {
  if (phase === "downloadReady" && downloadData.link) {
    window.open(downloadData.link);
  }
});
function getVideoId(youtubeUrl: string) {
  const videoId = youtubeUrl.slice(
    youtubeUrl.indexOf("=") + 1,
    youtubeUrl.indexOf("=") + 12
  );
  return videoId;
}
function fetchDownloadData(videoId: string) {
  formBtnSpinner.classList.remove("hidden");
  fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
      "x-rapidapi-key": "afb4357c20mshbd32f7819e6ed8ep1efeabjsn4c84245093a9",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      downloadDataProxy.link = data.link;
      downloadDataProxy.title = data.title;
      downloadDataProxy.duration = data.duration;
      console.log(data);
      formBtnSpinner.classList.add("hidden");
      if (data.message) {
        youtubeDuration.textContent = "Sorry. " + data.message;
        downloadBtn.classList.add("hidden");
      } else {
        downloadBtn.classList.remove("hidden");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

function populateTextContent() {
  youtubeUrl.textContent = inputUrl;
  youtubeDuration.textContent = (downloadData.duration / 60).toFixed(2);
  youtubeTitle.textContent = downloadData.title;
}

interface downloadDataInterface {
  duration: number;
  link: string;

  title: string;
}
