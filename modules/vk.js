window.onload = function() {
  // no audio ads
  const injection = document.createElement("script");
  injection.innerHTML = `
    setTimeout(() => {
      window.vk.audioAdsConfig.enabled = false;
      window.vk.audioAdsConfig.day_limit_reached = true;
      window.vk.audioAdsConfig.sections = [];

      console.log("[Osko] Injected!");
    }, 1000);
  `;

  document.head.appendChild(injection);
};
