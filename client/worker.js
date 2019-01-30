console.log("Service Worker Loaded");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("push received...");

  self.registration.showNotification(data.title, {
    body: "Notified by TommyTom",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png"
  });
});
