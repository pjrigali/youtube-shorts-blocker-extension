# YouTube Shorts Blocker

A lightweight Chrome extension to remove "Shorts" from your YouTube experience. This extension hides Shorts shelves, individual Shorts videos, and sidebar entries across the site.

## Features

- **Home Page**: Removes the "Shorts" shelf and its surrounding container to keep your feed clean.
- **Search Results**: Filters out Shorts shelves and individual vertical videos from your search results.
- **Sidebar**: Hides the "Shorts" button in both the expanded and collapsed (mini) sidebars.
- **Recommendations**: Removes Shorts from the "Up Next" sidebar when watching videos.
- **Dynamic Blocking**: Uses a `MutationObserver` to ensure Shorts are hidden even as new content is loaded while scrolling.

## Files

- `manifest.json`: Extension configuration (Manifest V3).
- `styles.css`: Declarative CSS rules for hiding static elements.
- `content.js`: JavaScript logic for dynamic content detection and Spacing removal.

## Installation

1. Clone or download this folder to your computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle in the top-right corner.
4. Click the **Load unpacked** button.
5. Select the `yt-shorts-blocker` folder.
6. Refresh YouTube to see the changes.

## How it Works

The extension uses a combination of CSS selectors and a JavaScript mutation observer. 
- **CSS**: Immediately hides elements that can be identified by their attributes or tag names.
- **JavaScript**: Monitors the page for new elements (like when you scroll down) and searches for specific text ("Shorts") or URL patterns (`/shorts/`) to hide components that share generic tags with standard videos.
