# Git it Done! 🐙

Git it Done! is a responsive web app that allows you to search for GitHub repositories and view open issues for any user or programming language. Built with vanilla HTML, CSS, and JavaScript, it fetches live data from the GitHub API and presents it in a clean, accessible interface.



## 🚀 Features

- ✅ **Web3Forms Integration** – Secure, backend-free message delivery.
- 🌙 **Dark Mode Toggle** – Smooth theme transition with CSS variables.
- 💬 **Real-Time Feedback** – Shows live status ("Sending...", "Success", or "Error").
- 📱 **Fully Responsive** – Looks great on desktop, tablet, and mobile.
- ♿ **Accessibility Friendly** – Semantic HTML, ARIA live regions, and clear labels.
- 🧠 **SEO Optimized** – Proper meta tags and structured page content.
- 💅 **Modern UI/UX** – Clean, minimal design using CSS variables and transitions.

---

## 🖼️ Preview



[Contact Form Preview](assets/screenshot.png)

--

## 🛠️ Tech Stack

- **HTML5** – Semantic and accessible markup.
- **CSS3** – Custom variables, dark mode, and flex layout.
- **JavaScript (ES6)** – Handles dark mode and form submission.
- **Web3Forms API** – For secure, serverless form processing.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone or Download
```bash
git clone https://github.com/yourusername/contact-form.git
cd contact-form
```

### 2️⃣ Add Your Web3Forms Access Key
1. Log in to your [Web3Forms Dashboard](https://web3forms.com/).
2. Copy your **Access Key**.
3. Paste it in your JavaScript file:
   ```js
   formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');
   ```

---

## 📧 Form Configuration (example)

```html
<form id="contact-form">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
  <button type="reset" class="clear-btn">Clear Form</button>
  <p id="form-status" aria-live="polite"></p>
</form>
```

**Email Recipient:**  
All messages will be sent to:  
📩 **wikigi.git@gmail.com**

---

## 🌈 Dark Mode

- Controlled via toggle switch.
- Saves preference locally.
- Dark theme uses a rich **deep purple accent** (`#4b0250`) with light text.

---

## 🧩 Folder Structure

```
contact-form/
│
├── index.html        # Main HTML file
├── style.css         # Styling (Light/Dark Mode)
├── app.js            # Handles form submission + theme toggle
└── assets/
    └── illustration.svg
```

---

## 🧪 Accessibility Checklist

- [x] Semantic HTML elements (`<form>`, `<label>`, `<button>`)
- [x] ARIA live regions for form status
- [x] Keyboard accessible
- [x] Color contrast compliant for dark/light modes

---

## 🪄 Deployment

You can host it easily on:
- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Any static hosting service**

---

## 🧠 Credits

- Developed by **Mwihaki Githii**  
- Email delivery powered by [Web3Forms](https://web3forms.com)

---

## 📸 Preview

> Responsive and elegant contact form with light/dark themes and email functionality.

---

### 📬 Contact

If you’d like to collaborate, feel free to reach out through the form — or directly at:  
**📧 wikigi.git@gmail.com**

