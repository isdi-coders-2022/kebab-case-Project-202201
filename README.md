# Kebab-Case

![](https://kebabcase.netlify.app/img/streaminglight.png)
![](https://kebabcase.netlify.app/img/shawarmalight.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

### About

Hi! We are a group of students who are practicing with our react skills. This project attacks the [Twitch Api](https://dev.twitch.tv/docs/api/) with differents endpoints. We want to create a service where you can manage and visualize your favorite streamers.

### Figma

We created the preciew with [Figma](https://www.figma.com/file/Q4uYKa0MjUs7cx829Bo0gL/kebab-case?node-id=1048%3A5933) so we designed a light theme and a dark theme. It is full responsive and kebab themed.

### Trello

We are using trello as our A.G.I.L.E. envirorment

### API

The [Twitch Api](https://dev.twitch.tv/docs/api/) has a lot of informations but the endpoints we are atacking are:

- https://api.twitch.tv/helix/streams - it gets the top 20 streamers that are online right now sorted by viewers
- https://api.twitch.tv/helix/users?login=[streamerName] - this gave us the basic info of each streamer
- https://api.twitch.tv/helix/clips - with parameter **broadcaster_id** we can get the latest clips of a streamer
- https://api.twitch.tv/helix/chat/emotes - with parameter **broadcaster_id** we can get the list of chanel icons

We algo had to authenticate and register the twitch app to get a token and id hash.

### About us

Our Shawarma team is made by

[Josep Conejero](https://github.com/Bermeu), [Sílvia Martínez](https://github.com/lallunavermella), [Adrián Valladares](https://github.com/AdrianValladaresDiaz) and [Kevin Real](https://github.com/krealal)

### Links

[Figma](https://www.figma.com/file/Q4uYKa0MjUs7cx829Bo0gL/kebab-case?node-id=1048%3A5933)
[Production](https://kebabcase.netlify.app/)
[Trello](https://trello.com/b/Qtlo49NA/kebab-kase-group-challenge)
[Git](https://github.com/isdi-coders-2022/kebab-case-Project-202201)
