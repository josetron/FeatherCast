# Bird Fallout Dashboard Versions

## Current master

The active page is now the root `index.html`, with `app.js` and `styles.css`.
It does not show a version number in the browser.

Archived numbered releases live under `archive/versions/`.
When starting a new numbered version, first copy the current root files into a new archive folder, then continue work on the root files.

## Version 1.3

Version 1.3 builds on 1.2.

Changed:
- Visual redesign with a warmer birding field-guide feel.
- Softer cards, richer natural palette, subtler texture, and improved hierarchy.
- All v1.2 components and behavior are preserved.

## Version 1.2

Version 1.2 builds on 1.1.

Added:
- Local Migrant Signals section updates from recent eBird observations after pulling reports.
- Static migrant watch list remains as fallback before eBird data is pulled or when no local migrant signals are found.

## Version 1.1

Version 1.1 builds on 1.0.

Added:
- Compact BirdCast live map panel below the Current Signal panel.
- The map panel uses recent BirdCast mosaic image frames instead of an iframe.

## Version 1.0

Version 1.0 is the current static prototype.

Included:
- State and county selection with offline counties for Arizona, Florida, and Texas.
- Manual BirdCast number inputs.
- Embedded eBird API token for county report pulls.
- Fallout scoring from migration, wind, rain, front status, and eBird signal.
- County-aware links for eBird region, eBird hotspots, BirdCast dashboard, and weather forecast.

Not included:
- Automatic BirdCast number scraping.
- Local proxy/server workflow.
