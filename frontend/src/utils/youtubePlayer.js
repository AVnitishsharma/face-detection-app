let apiLoaded = false;
let apiLoadingPromise = null;

export function loadYoutubeApi() {
  if (apiLoaded) return Promise.resolve(window.YT);
  if (apiLoadingPromise) return apiLoadingPromise;

  apiLoadingPromise = new Promise((resolve) => {
    // If already loaded
    if (window.YT && window.YT.Player) {
      apiLoaded = true;
      resolve(window.YT);
      return;
    }

    // Set callback
    const prevCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (prevCallback) prevCallback();
      apiLoaded = true;
      resolve(window.YT);
    };

    // Create script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });

  return apiLoadingPromise;
}
