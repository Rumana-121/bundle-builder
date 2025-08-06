since we are using vscode

## **1. Open Your Project in VS Code**

1. Launch **VS Code**.
2. Open your **bundle-builder** folder (File → Open Folder).

---

## **2. Open Terminal in VS Code**

* Shortcut: **Ctrl + \`** (backtick)
* This opens an **integrated terminal** in your project folder.

---

## **3. Initialize Git and Link Repository**

Since your repo already exists on GitHub:

```bash
# Initialize Git (if not already)
git init

# Add remote origin
git remote add origin https://github.com/Rumana-121/bundle-builder.git

# Verify remote
git remote -v
```

You should see:

```
origin  https://github.com/Rumana-121/bundle-builder.git (fetch)
origin  https://github.com/Rumana-121/bundle-builder.git (push)
```

---

## **4. Stage and Commit Your Files**

```bash
# Stage all files
git add .

# Commit
git commit -m "Initial commit of bundle builder project"
```

---

## **5. Push to GitHub**

```bash
git branch -M main
git push -u origin main
```

> ✅ Check your repo on GitHub — your code should appear there.

---

## **6. Create README.md in VS Code**

1. In VS Code, click **New File → README.md**.
2. Paste this content:

```markdown
# Bundle Builder — Buy 3 and Save 30%

A responsive web app for creating product bundles. Add 3 or more items to receive a 30% discount.

---

## ⚙️ Features

- Select and deselect products to bundle  
- Quantity adjustment and remove items  
- Live subtotal & discount calculation  
- “Add Bundle to Cart” activates after 3 items  
- Responsive design for desktop, tablet, and mobile  

---

## 📁 Project Structure

```

bundle-builder/
├── index.html
├── style.css
├── script.js
├── assets/          # (optional) product images
└── README.md        # this documentation

````

---

## 📥 How to Run Locally

1. **Clone the repo:**

   ```bash
   git clone https://github.com/Rumana-121/bundle-builder.git
````

2. **Navigate to project folder:**

   ```bash
   cd bundle-builder
   ```

3. **Open in browser:**

   * Double-click `index.html`
     OR
   * Use **Live Server** in VS Code for auto-refresh

---

## 🍴 How to Fork & Contribute

1. Click **Fork** on GitHub

2. Clone your fork:

   ```bash
   git clone https://github.com/YOUR-USERNAME/bundle-builder.git
   ```
3. Create a branch and work on it:

   ```bash
   git checkout -b feature-branch
   ```
4. Commit & Push:

   ```bash
   git add .
   git commit -m "Describe your changes"
   git push origin feature-branch
   ```
5. Create a **Pull Request** on GitHub.

---

## 📄 License

Licensed under the **MIT License**.

````


## **7. Commit & Push README.md**

```bash
git add README.md
git commit -m "Add README documentation"
git push
````

Now your repo is **complete with instructions** for any client to clone, fork, and run.


