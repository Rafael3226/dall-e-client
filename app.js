const API_IMAGES_GEN = "https://api.openai.com/v1/images/generations";

const apiKeyElement = document.getElementById("api-key");
const saveKeyButton = document.getElementById("save-key-btn");
const clearKeyButton = document.getElementById("clear-key-btn");

const promptElement = document.getElementById("prompt");
const sizeElement = document.getElementById("size");

const imageElement = document.getElementById("generated-image");
const submitButton = document.getElementById("submit-btn");

const LOADING_URL = "./loading.gif";

async function callApiImages({ apiKey, prompt, size }) {
  const response = await fetch(API_IMAGES_GEN, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      n: 1,
      size,
    }),
  });
  return await response.json();
}

async function fetchImages() {
  imageElement.src = LOADING_URL;
  // disable button
  submitButton.disabled = true;

  const params = {
    apiKey: apiKeyElement.value,
    prompt: promptElement.value,
    size: sizeElement.value,
  };
  const data = await callApiImages(params);
  const imageURL = data?.data[0]?.url;
  if (!imageURL) {
    alert("no image url");
    console.error("no image url");
  }
  //set image
  imageElement.src = imageURL;
  // enable button
  submitButton.disabled = false;
}

class ApiKey {
  constructor() {
    this.API_KEY_TAG = "API_KEY";
    this.key = "";
    this.checkForApiKey();
  }

  setKey(key) {
    this.key = key;
    Cookies.set(this.API_KEY_TAG, key);
  }

  getKey() {
    return this.key;
  }

  clearKey() {
    this.key = "";
    Cookies.remove(this.API_KEY_TAG);
  }

  checkForApiKey() {
    this.key = Cookies.get(this.API_KEY_TAG);
  }
}

function updateApiKey() {
  const key = apiKey.key;
  if (key) {
    apiKeyElement.value = key;
    clearKeyButton.disabled = false;
    saveKeyButton.disabled = true;
  } else {
    apiKeyElement.value = "";
    clearKeyButton.disabled = true;
    saveKeyButton.disabled = false;
  }
}

function saveApiKey() {
  apiKey.setKey(apiKeyElement.value);
  updateApiKey();
}

function clearApiKey() {
  debugger;
  apiKey.clearKey();
  updateApiKey();
}

const apiKey = new ApiKey();
updateApiKey();

clearKeyButton.addEventListener("click", clearApiKey);
saveKeyButton.addEventListener("click", saveApiKey);

submitButton.addEventListener("click", fetchImages);
