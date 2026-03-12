(function() {
    'use strict';

    console.log('YouTube Shorts Blocker: script initialized');

    function hideShortsElements() {
        // 1. Hide shelves by title text
        const shelves = document.querySelectorAll('ytd-rich-shelf-renderer, ytd-reel-shelf-renderer, yt-shelf-header-layout');
        shelves.forEach(shelf => {
            if (shelf.textContent.toLowerCase().includes('shorts')) {
                shelf.style.setProperty('display', 'none', 'important');
                // If it's inside a section renderer, hide that too to remove extra spacing
                const section = shelf.closest('ytd-rich-section-renderer');
                if (section) section.style.setProperty('display', 'none', 'important');
            }
        });

        // 2. Hide individual videos by link pattern
        const videoSelectors = 'ytd-video-renderer, ytd-compact-video-renderer, yt-lockup-view-model, ytd-grid-video-renderer, ytd-rich-item-renderer';
        const videos = document.querySelectorAll(videoSelectors);
        videos.forEach(video => {
            const hasShortsLink = video.querySelector('a[href^="/shorts/"]');
            if (hasShortsLink) {
                video.style.setProperty('display', 'none', 'important');
            }
        });

        // 3. Hide sidebar entries
        const sidebarSelectors = 'ytd-guide-entry-renderer, ytd-mini-guide-entry-renderer, .ytd-mini-guide-entry-renderer';
        const sidebarEntries = document.querySelectorAll(sidebarSelectors);
        sidebarEntries.forEach(entry => {
            if (entry.textContent.toLowerCase().includes('shorts') || entry.getAttribute('aria-label') === 'Shorts') {
                entry.style.setProperty('display', 'none', 'important');
            }
        });
    }

    // Initialize observer when document is ready
    function init() {
        hideShortsElements();

        const observer = new MutationObserver((mutations) => {
            let shouldRun = false;
            for (const mutation of mutations) {
                if (mutation.addedNodes.length > 0) {
                    shouldRun = true;
                    break;
                }
            }
            if (shouldRun) hideShortsElements();
        });

        observer.observe(document, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
