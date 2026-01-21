# MVP Product Spec

## Scope
The MVP focuses on fast place saving and delightful list sharing. All features should support a map-first experience and realtime collaboration with minimal complexity.

## Core Screens
- Auth/Welcome (anonymous start, optional upgrade later) [defer build]
- Explore (map + bottom sheet)
- Place Quick View (action-first)
- List Detail (places, filters, reorder, show on map)
- Place Detail (Places UI Kit full view)
- Create List
- Share/Invite [defer build]
- Settings (account upgrade, manage links) [defer build]

## Primary User Flows
Onboarding
- Start anonymous session in one tap.
- Optional upgrade to email/OTP/OAuth later.

Explore and Save
- User opens Explore screen, sees map and bottom sheet.
- Search via Places UI Kit autocomplete.
- Select place to open Place Quick View.
- Save to list, add note/tags, or mark visited.

Pin Interaction
- Tap pin on map to open Place Quick View.
- Save or view details, then return to map.

List Management
- Create list and add places.
- Reorder list with drag and drop (updates sortKey).
- Filter by tags and open now.
- Toggle show on map.

Sharing and Collaboration
- Generate invite link with viewer or editor permission.
- Opening link joins list and opens it directly.
- Realtime updates for all collaborators.

## UX Goals
- Instant feedback with optimistic UI for add/remove/reorder.
- Bottom sheet feels like Google Maps.
- Minimal auth friction before first save.
- Clear sync state when offline or reconnecting.

## Data Storage Rules (Places UI Kit)
- Store placeId indefinitely.
- Store lat/lng for map pins and refresh periodically.
- Do not store or render raw Places API content outside UI Kit components.

## Non-Goals (MVP)
- Public web preview of lists.
- Full route planning or multi-stop navigation.
- Complex smart lists beyond manual order, distance, and open now.

## Current Build Focus (Iteration 1)
- Maps + Places UI Kit integration.
- Lists CRUD and listPlaces CRUD with realtime list view.
- Place save, detail, and quick view flows.

## Dev Build Requirement (Places UI Kit)
- Places UI Kit autocomplete/details require a custom dev client or EAS build.
- Expo Go can be used for map/list UX but will not render Places UI Kit.

## Deferred for Later Iterations
- Auth/Welcome UI and account upgrades.
- Sharing/invite links and join flow.
- Settings screen.
