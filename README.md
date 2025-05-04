# ⏱️ Health Flex Timer App

Welcome to the **Health Flex Timer App** — a simple yet powerful tool built to help you manage timers for tasks, workouts, or anything else you need to track! Whether you're timing a HIIT workout, a study session, or a break, this app has you covered.

---

## 🚀 Features

- **Add Timers**: Create timers with a name, duration (in seconds), and a category.
- **Organize by Category**: Group timers (e.g., `"Workouts"`, `"Study"`) and collapse/expand them.
- **Control Timers Individually or in Bulk**:
  - Start, pause, reset, or delete **individual** timers.
  - Start all, pause all, or reset all timers **in a category**.
- **View History**: Track the list of completed timers with timestamps.
- **Export to JSON**: Download your current timer setup as a `.json` file.
- **Dark/Light Mode**:
  - Toggle manually.
  - Or sync with your **system theme** (OS-level light/dark preference).
- **Built with**: `React`, `Vite`, `Tailwind CSS (v3.4.17)`, and `React Router`.

---

## ⚙️ Setup Instructions

### 1. Clone or Download the Project

Using Git:

```bash
git clone <repository-url>
cd Health_Flex
```

Or unzip the downloaded `.zip` and open the folder in your terminal.

### 2. Install Dependencies

```bash
npm install
```

This installs everything from `package.json`.

### 3. Start the Development Server

```bash
npm run dev
```

You’ll see something like:

```
Vite 5.4.8  dev server running at: http://localhost:5173
```

Open that URL in your browser.

---

## 🗂️ Project Structure

```
Health_Flex/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── Home.jsx
│       ├── AddTimer.jsx
│       ├── Timer.jsx
│       ├── Category.jsx
│       └── History.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🧑‍🏫 How to Use the App

### ➕ Add a Timer

1. Click “**Add Timer**”
2. Enter:
   - **Name** (e.g., `"Morning Stretch"`)
   - **Duration** in seconds (e.g., `300`)
   - **Category** (e.g., `"Workouts"`)
3. Click “Add Timer”

### ▶️ Manage Timers

**Per Timer**:

- `Start` / `Pause`
- `Reset`
- `Delete`

**Per Category**:

- Collapse / Expand
- Start All / Pause All / Reset All

### 📜 View History

- Click “**View History**” to see completed timers with timestamps.

### 📤 Export to JSON

- Click the **Export** button on the main page to download your timers as a `.json` file.

### 🌗 Dark/Light Mode

Top-right buttons:

- `Dark Mode` / `Light Mode` toggle manually
- `Use System` to follow OS-level theme

Your preference is saved in `localStorage`.

---

## 🛠️ Troubleshooting

### App Doesn’t Start

- Run `npm install`
- Check terminal for errors after `npm run dev`

### Styles Not Working

- Ensure `index.css` is imported in `main.jsx`
- Try:

```bash
npm run dev -- --force
rm -rf node_modules package-lock.json && npm install
```

### Dark Mode Not Working

- Check if the `<html>` tag has the `dark` class
- Ensure `tailwind.config.js` has:

```js
darkMode: 'class',
```

### Timers Not Saving

- The app uses `localStorage` — clear it via DevTools if needed:
  - DevTools > Application > Local Storage

---

## 🤝 Contributing

Want to help improve the app? Feel free to fork the repo, make your changes, and create a Pull Request. Feature ideas:

- Filter timers by category
- Sound notification on timer completion
- Import timers from JSON

---

## 👏 Credits

This app was built as a practice project by [Your Name].

Powered by:

- React
- Vite
- Tailwind CSS v3.4.17
- React Router

---

Thanks for checking out the **Health Flex Timer App**!  
Feel free to reach out if you have any questions. 💬