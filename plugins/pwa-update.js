export default async (context) => {
  const workbox = await window.$workbox;
  if (!workbox) {
    console.debug("Workbox not loaded");
    return;
  }
  workbox.addEventListener("installed", (event) => {
    if (!event.isUpdate) {
      console.debug("PWA is on latest version");
      return;
    }
    console.debug("There is an update available, reloading");
    window.location.reload();
  });
};
