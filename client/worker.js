console.log("Service Worker Loaded");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("push received...");

  self.registration.showNotification(data.title, {
    body: "Notified by TommyTom",
    icon:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwis5a_jlpjgAhVG1VkKHZ53AKYQjRx6BAgBEAU&url=http%3A%2F%2Fwww.clker.com%2Fclipart-ta-circle.html&psig=AOvVaw1uonZrrYq6nlcBzxYYwTxc&ust=1549029515346595"
  });
});
