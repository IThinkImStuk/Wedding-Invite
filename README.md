# 💍 Stuart & Lucy's Wedding Website

Welcome to the repo for my upcoming wedding website! This project is a custom-built, static web app designed to give guests all the key details for the big day, offer a peek at the vibe and inspiration, and collect RSVPs smoothly using personalized guest codes.

---

## ✨ What's Inside

* **Home Base:** A warm welcome introducing the wedding and directing guests straight to the RSVP section.
* **Unified Navigation:** Global header navigation loading dynamically across all pages:
* **Venue**
* **Details**
* **Inspiration**
* **RSVP**


* **Inspiration Gallery:** A clean image grid with a custom lightbox viewer. Guests can click through photos using on-screen arrows or keyboard controls (`Left Arrow`, `Right Arrow`, and `Escape`).
* **Smart RSVP System:** A code-entry gateway that matches guests against a private list, unveils hidden RSVP content, and generates a personalized Google Form link.
* **Responsive Styling:** Mobile-friendly layouts built with clean HTML, CSS (`css/style.css`), and lightweight modular JavaScript.

---

## 🚀 Local Setup

Because `js/nav.js` dynamically fetches `html/nav.html` to keep the menu standard across pages, opening the HTML files directly from your file explorer (`file://`) will trigger browser security restrictions.

To view the site properly locally, run a simple local web server from the repository root:

```powershell
python -m http.server 8000

```

Then open your browser and head to:
`http://localhost:8000/html/index.html`

---

## 🔐 Setting Up the RSVP Logic

To keep personal details off public feeds, all sensitive mapping data is kept safely off Git via `.gitignore`.

Before testing the RSVP system locally, remove `.example` from the following files under `js/`:

1. `js/guests.example.js` — Stores example code-to-guest-and-attendance mappings.
2. `js/googleDocFormReference.example.js` — Stores your target Google Form base URL.

Check `js/guests.example.js` for the quick template format:

```javascript
var guestList = {
    "ABC": { name: "Guest Name", attendance: "Full day" },
    "DEF": { name: "Another Guest", attendance: "Evening" }
};

```

The `attendance` value is shown to the guest after their code is accepted and is also sent to the second prefilled Google Form field. Update it for each invitation using values such as `Full day` or `Evening`.

---

## 🛠️ Modifying Navigation

Need to change or add a menu item? Just edit `html/nav.html`. Because `js/nav.js` injects this file dynamically, any change you make here updates the entire site instantly!

---

## 📝 Pre-Wedding To-Do List

* [ ] Swap out placeholder text on the Venue and Details pages with final event timings and travel info.
* [ ] Finalize gallery photos and make sure all images have `alt` tags.
* [ ] Perform a full dry-run of the RSVP process with sample codes.
* [ ] Set up custom domain routing and HTTPS prior to sending out invites.

---

## 🔒 A Quick Note on Privacy

This is a lightweight frontend static site, meaning visitor browsers process the validation code client-side. The guest code system is a fantastic way to offer a tailored user experience and discourage accidental or joke submissions.
