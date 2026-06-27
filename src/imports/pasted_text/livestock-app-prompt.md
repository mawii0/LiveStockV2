# LiveStock App — Figma Make Master Prompt

> **How to use:** Paste this entire prompt as your first message to Figma Make, then attach the 4 reference screenshots (in the order labeled below). Ask Figma Make to treat the screenshots as the exact visual source of truth — match colors, gradients, fonts, icons, spacing, corner radius, and shadows pixel-for-pixel.

---

## PROJECT OVERVIEW

Build a high-fidelity mobile app prototype called **"LiveStock"** — an app that lets users scan livestock (pigs and cows) using an external connected camera device to detect the animal and estimate its **weight, age, and gender**.

Replicate the attached screenshots as a **100% accurate clone**: same color palette (including gradients), same fonts and font weights, same icon styles, same spacing/padding, same corner radius on cards and buttons, same shadows, and same component layout. Do not redesign or "improve" anything — match exactly what is shown.

Build this as a connected mobile prototype (iPhone frame size, ~375x812px) with working navigation between all screens listed below.

---

## GLOBAL DESIGN SYSTEM

Extract these from the attached images and apply consistently across all screens:

- **Primary brand gradient (green/teal):** used on the Logo circle and the Home page header. Diagonal gradient from a lighter green to a deeper teal-green.
- **Accent blue:** used for the Bluetooth icon circle, "Ready to Connect" text, numbered step badges, the loading spinner, and the dark navy "Connect Device" button.
- **Success green:** used for "Connected Successfully!" text/icon, the green "Start Scanning" button, and the "Scan Complete" result card.
- **Error red/pink:** used for the "No Swine Detected" result card and icon.
- **Neutral grays:** used for the Live Scanning screen backgrounds, subtitles, and secondary text.
- **Typography:** clean modern sans-serif (similar to Inter / SF Pro). Headings are bold/dark, subtitles are gray and lighter weight.
- **Cards:** white, rounded corners (~16px radius), soft drop shadow, comfortable internal padding (~16px).
- **Buttons:** full-width, rounded corners (~12px), bold centered white label, sometimes with a small icon.
- **Bottom Navigation Bar:** fixed at the bottom, white background, 3 items — Home, Scan (center, raised circular green button), Connect — each with an icon and small label text. Active tab is highlighted in green.

---

## SCREENS

### 1. LOGO PAGE (Splash Screen)
- Plain white background, fully centered content (vertical + horizontal).
- Centered circular badge with the brand gradient (green/teal), containing a simple white **pig icon/illustration**.
- Below the circle, the wordmark **"LiveStock"** in bold green text.
- No buttons or navigation — this is a splash/launch screen.

---

### 2. HOME PAGE
- **Header section:** large rounded-bottom green/teal gradient banner spanning the top of the screen.
  - Inside the header: a small circular profile avatar icon on the left.
  - Next to the avatar: **"Hello, Juan!"** in bold white text.
  - Below that: **"Sunday, 12 October 2025"** in smaller, lighter white text.
- **Body section** (white background):
  - Heading: **"Choose an animal"** (bold, dark text).
  - Subheading: **"Select the type of animal you want to scan"** (gray text).
  - **Card 1 — "Pig / Baboy"**
    - Left: rounded square thumbnail with a green background containing a pig illustration/icon.
    - Title: **"Pig / Baboy"** (bold).
    - Subtitle: **"Swine Scanning"** (gray, smaller).
    - Right: chevron/arrow icon indicating it's tappable.
  - **Card 2 — "Cow / Baka"**
    - Same layout as Card 1, but with a cow illustration/icon thumbnail.
    - Title: **"Cow / Baka"** (bold).
    - Subtitle: **"Cattle Scanning"** (gray, smaller).
    - Right: chevron/arrow icon.
- **Bottom Navigation Bar** (white, fixed):
  - **Home** icon + label (active state — highlighted green).
  - **Scan** — center item, raised circular green button with a viewfinder/scan-frame icon.
  - **Connect** icon (Bluetooth symbol) + label.
- **Interaction:** Tapping the "Pig / Baboy" card or the center Scan button navigates to the Connect Page (if device not yet connected) or directly to the Scanning Page (if already connected).

---

### 3. CONNECT PAGE — Default State ("Ready to Connect")
- White background.
- Top-left: back arrow icon.
- Title: **"Device Connection"** (bold, dark).
- Subtitle: **"Connect your external device"** (gray).
- Large centered circular icon in **accent blue** containing a white Bluetooth symbol.
- Below the icon: **"Ready to Connect"** (bold, blue text, centered).
- Subtitle: **"Please connect your device"** (gray, centered).
- White card titled **"How to Connect"** containing a numbered list with circular numbered badges (blue):
  1. **"Turn on your external device"**
  2. **"Enable Bluetooth on this device"**
  3. **"Tap the connect button below"**
- Full-width button: **"Connect Device"** — dark navy background, white bold text, rounded corners.
- **Bottom Navigation Bar** present, with **Connect** tab active (highlighted green).
- **Interaction:** Tapping "Connect Device" transitions to the "Pairing in Progress" state.

---

### 4. CONNECT PAGE — Connecting State ("Pairing in Progress")
- Same header as Connect Page: **"Device Connection"** / **"Connect your external device"**.
- Centered circular **loading spinner** (blue, animated/rotating dashed circle).
- Below spinner: **"Pairing in Progress"** (bold, centered).
- Subtitle: **"Please wait while we establish connection"** (gray, centered).
- Bottom Navigation Bar present, **Connect** tab active.
- **Interaction:** After a short delay (simulate with a timed transition, e.g. 2 seconds), automatically transitions to the "Connected Successfully" state.

---

### 5. CONNECT PAGE — Connected State ("Connected Successfully!")
- Same header: **"Device Connection"** / **"Connect your external device"**.
- Centered **green circular checkmark icon**.
- Below icon: **"Connected Successfully!"** (bold, green text, centered).
- Subtitle: **"Device is ready for scanning"** (gray, centered).
- Full-width button: **"Start Scanning"** — green background, white bold text, rounded corners.
- Bottom Navigation Bar present, **Connect** tab active.
- **Interaction:** Tapping "Start Scanning" navigates to the Scanning Page.

---

### 6. SCANNING PAGE (Idle / Camera View — Gray, no feed)
- Full-screen, dark gray background (no bottom nav bar — full-screen camera mode).
- Top-left: back arrow icon (white).
- Title: **"Live Scanning"** (bold, white).
- Subtitle: **"External device camera"** (light gray).
- Centered camera viewfinder area: lighter gray rounded rectangle with **four corner bracket markers** (white L-shaped corners) indicating the scan frame.
- Bottom: **"Start Scanning"** pill button — semi-transparent dark background, white bold text with a small camera icon, centered.
- **Interaction:** Tapping "Start Scanning" begins the scan and transitions toward a result state (Scan Complete or No Swine Detected).

---

### 7. SCANNING PAGE — With Live Feed (Pig Pen Image Visible)
- Identical layout to Screen 6, but the camera viewfinder area now displays a **live image/video feed showing pigs in a pen** instead of plain gray.
- Same corner brackets, same header, same "Start Scanning" button at the bottom.
- This represents the "external camera connected and showing feed" state.

---

### 8. FINISHED SCANNING — "Scan Complete" (Gray background, no feed)
- Same full-screen gray Live Scanning layout as Screen 6 (header + viewfinder area).
- Near the bottom, an overlay **result card** with a **green background**:
  - Top row: green checkmark icon + bold text **"Scan Complete"**, with **"Just now"** timestamp aligned to the right.
  - Body text lines:
    - **"Swine detected"**
    - **"Weight: ~ 90 kg"**
    - **"Age: ~ 22 weeks"**
    - **"Gender: Female"**
- Below the card: full-width **"Scan Now"** button — dark background, white bold text.

---

### 9. FINISHED SCANNING — "Scan Complete" (With Pig Pen Feed Visible)
- Identical to Screen 8, but the viewfinder area shows the **live pig pen image/feed** in the background.
- Same green "Scan Complete" result card overlay with identical content (Swine detected / Weight ~90kg / Age ~22 weeks / Gender: Female / "Just now").
- Same **"Scan Now"** button at the bottom.

---

### 10. FINISHED SCANNING — "No Swine Detected" (Gray background, no feed)
- Same full-screen gray Live Scanning layout (header + viewfinder area).
- Near the bottom, an overlay **result card** with a **red/pink background**:
  - Top row: red "X" / error icon + bold text **"No Swine Detected"**, with **"Just now"** timestamp aligned to the right.
  - Body text: **"Please try again"**
- Below the card: full-width **"Scan Again"** button — dark background, white bold text.

---

### 11. FINISHED SCANNING — "No Swine Detected" (With Pig Pen Feed Visible)
- Identical to Screen 10, but the viewfinder shows the **live pig pen image/feed** in the background.
- Same red "No Swine Detected" card overlay with the same content.
- Same **"Scan Again"** button at the bottom.

---

### 12. NO CONNECTION — Scanning Page ("No Device Detected")
- Full-screen gray Live Scanning layout.
- Header: back arrow, **"Live Scanning"** title (bold, white), **"External device camera"** subtitle (light gray).
- The viewfinder area is plain gray with **no corner brackets**.
- Centered message:
  - Bold white text: **"No Device Detected"**
  - Gray subtitle text: **"Connect your device to start scanning"**
- **No buttons** are shown on this screen.
- This represents the state when the external camera device has disconnected mid-session.

---

## USER FLOW / PROTOTYPE CONNECTIONS

1. **Logo Page** → auto-transitions to **Home Page** (splash screen).
2. **Home Page** → tap "Pig / Baboy" card or center Scan button:
   - If device not connected → go to **Connect Page (Ready to Connect)**.
   - If device already connected → go to **Scanning Page**.
3. **Connect Page (Ready to Connect)** → tap "Connect Device" → **Connect Page (Pairing in Progress)** → auto-transition → **Connect Page (Connected Successfully!)**.
4. **Connect Page (Connected Successfully!)** → tap "Start Scanning" → **Scanning Page (with live feed)**.
5. **Scanning Page** → tap "Start Scanning" → result transitions to either:
   - **Finished Scanning – Scan Complete** (with feed), or
   - **Finished Scanning – No Swine Detected** (with feed).
6. From either result card:
   - "Scan Now" / "Scan Again" → returns to **Scanning Page (with live feed)** to repeat the scan.
7. **No Device Detected** screen is reachable from the Scanning Page if the connection drops (use this as an alternate state for the Scanning Page).
8. The **Bottom Navigation Bar** (Home / Scan / Connect) is present on Home Page and all Connect Page states, but is **hidden** on all full-screen Live Scanning / result screens.

---

## FINAL NOTES FOR FIGMA MAKE
- Use the attached screenshots as the definitive reference for every color, gradient, font, icon, spacing value, and corner radius — do not approximate or substitute generic styles.
- Keep all text content (titles, labels, button text, numbers like "90 kg", "22 weeks", "Female") exactly as shown.
- Reuse the Bottom Navigation Bar and result-card components consistently across screens.
- Maintain consistent padding/margins across all screens for a cohesive design system.