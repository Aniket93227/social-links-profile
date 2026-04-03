const themeToggle = document.getElementById("themeToggle");
const socialLinks = document.querySelectorAll(".social-link");
const savedTheme = localStorage.getItem("preferred-theme");
const statusText = document.getElementById("statusText");

// Restore the user's last selected theme.
if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

themeToggle?.addEventListener("click", () => {
  const isLightTheme = document.body.classList.toggle("light-theme");
  localStorage.setItem("preferred-theme", isLightTheme ? "light" : "dark");
});

// Add a small tap animation to social buttons.
socialLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.remove("is-pressed");

    requestAnimationFrame(() => {
      link.classList.add("is-pressed");
    });
  });
});

// Rotate a few short status messages.
const statusMessages = [
  "Open to internships and exciting collaborations",
  "Currently building polished web interfaces",
  "Exploring full-stack and data-driven projects"
];

let statusIndex = 0;

if (statusText) {
  setInterval(() => {
    statusIndex = (statusIndex + 1) % statusMessages.length;
    statusText.textContent = statusMessages[statusIndex];
  }, 3200);
}
