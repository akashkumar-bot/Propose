# HeartOS Proposal

A romantic, interactive proposal experience built with React, Vite, and Tailwind CSS. The app presents a short story across multiple scenes and gives the recipient two respectful response paths: **Haan** or **Naa / Take your time**.

## Features

- Animated welcome and HeartOS loading screens
- Five interactive story scenes
- Envelope-opening interaction
- Code-inspired message and heartbeat animations
- Respectful proposal response flow
- Six thoughtful options inside the “Naa” route
- Multi-step accepted route with two answer fields
- Floating heart balloons, glass cards, hover effects, and responsive layouts
- Browser-history-based routes that work after refresh
- Mobile and desktop support

## Tech Stack

- React
- Vite
- Tailwind CSS v4
- Lucide React icons
- Plain CSS for custom animations, pseudo-elements, and decorative effects

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Format the source files:

```bash
npm run format
```

## Personalization

Update the names and primary messages in `src/config.js`:

```js
export const proposalConfig = {
  recipientName: "Shanu",
  senderName: "Akash",
  openingMessage: "Hey, ek baat kehni thi...",
  finalMessage: "Mujhe aap pasand hain.",
};
```

Loading-screen messages and the scene count are available in `src/constants.js`.

The text for individual screens can be edited inside the corresponding file in `src/components`.

## Routes

| Route                    | Purpose                    |
| ------------------------ | -------------------------- |
| `/`                      | Welcome screen             |
| `/boot`                  | HeartOS loading screen     |
| `/scene/1` to `/scene/5` | Proposal story scenes      |
| `/accepted`              | “Haan” response experience |
| `/take-time`             | “Naa” response options     |

The selected take-time response is stored in the URL as a `choice` query parameter. Accepted-route progress is stored as a `step` query parameter.

## Project Structure

```text
src/
├── components/
│   ├── Accepted.jsx
│   ├── BootScreen.jsx
│   ├── CodeScene.jsx
│   ├── FinalScene.jsx
│   ├── HeartbeatScene.jsx
│   ├── MessageScene.jsx
│   ├── PersonalScene.jsx
│   ├── Shared.jsx
│   ├── StartScreen.jsx
│   └── TakeTime.jsx
├── config.js
├── constants.js
├── main.jsx
└── styles.css
```

Most layout and spacing styles are written as Tailwind utility classes directly in the components. `styles.css` contains the Tailwind theme, global styles, complex animations, decorative elements, and custom interactive states.

## Deployment

The included `vercel.json` rewrites every route to `index.html`, allowing direct visits and refreshes on client-side routes.

To deploy on Vercel:

1. Import the repository into Vercel.
2. Keep the framework preset as Vite.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.

## Notes

- The app loads Google Fonts from the internet.
- Fullscreen mode is requested after the welcome button is clicked; browsers may ignore it depending on user settings.
- The response fields currently remain in local component state and are not sent to a server or database.
