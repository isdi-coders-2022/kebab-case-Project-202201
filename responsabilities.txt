# Project Schematic

## Data Layer with actions

- Streamer List from api - Overwrite array with a new array.
- Favorites List from kebab team - delete./, add new one, modify
- Theme - turn light to dark or dark to light

## Components / Responsaiblities

- App:

  - Updates streamer list depending on search bar input
  - Updates streamer list depending on sort input
  - Updates streamer list depending on filter input
  - Redirects to info page when a streamer is clicked
  - Adds streamer to favs list when a durum is clicked.
  - Toggles theme from dark to light

  - Updates FavoriteStreamer list
  - Removes streamers from favorite list when the X is clicked
  - Launches edit page when the edit button is clicked
  - Launches streamer creation page when the "create" button is clicked.
  - Redirects to info page when a favoriteStreamer is clicked

- Header: - Renders theme button
- Nav bar
  - Links to Main and Favs
  - Renders MrKebab on desktop view.
- MrKebab: - Shows aboutUs info on hover.
- Main
  - StreamerList: - Renders received list of streamers.
  - Streamer:
    - Renders streamer data.
    - Receives user click action.
- StreamerStatus: - Renders text and color according to received status.
- IconButton: - Renders Icon received - Receives action on click.
- TextButton: - Renders Text received - Receives action on click.
- Search Bar: - Renders search bar - Receives user text input - Launches action

- Favs:
  -FavoriteStreamer:

  - Renders streamer info
  - Renders video reel
  - Renders BigScreen when on desktop
  - When on desktop all video shall be played on BigScreen.
  - Renders current stream if streamer is online
  - Receives user action on click.

- Detail:

  - Reads queryParams
  - Renders streamer data
  - Renders durumFav button

- Form Page:
  - Form:
    - Input Fields: Receive and send user input text.
    - Renders cancel and add button.
    - Validates user input.
    - Populates streamer data if received.
