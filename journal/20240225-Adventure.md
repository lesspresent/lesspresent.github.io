---
title: Building Adventure Worlds
author: Jonathon
date: 2024-03-24T16:22:00
created: 2024-02-25T12:50:00
---
Rough thoughts on adventure games.

I've build a few interpreters for text adventures.
I haven't done anything novel (or anything I'd be comfortable calling a game), but it seems interesting enough to keep as a side project.
I've learned a lot; like how difficult the creative process can be, but most of all that there's a sweet spot to get expressive ease in a powerful platform.

Over the past ~year, I've implemented three interpreters, all based on a similar model.
The first interpreter was written in Elixir and ran on the command-line, the second was written in Typescript and included a domain-specific language, and the third was also written in Elixir but used Phoenix and LiveView.
These went through a few major mutations, but each is based on a model.

I think this is the key to getting a fully-featured engine: write a lot of fiction and a lot of puzzles.
What I think each of my implementations lacks is a zero-friction way to implement worlds, and so I'm writing very few puzzles, instead getting wrapped-up in the technology and leaving huge gaps between commits.
I think I've settled on a model thats just markdown and HTML, on top of which I can sprinkle the _tiniest layer_ of javascript.
And so, now I can focus on world-building -- letting things get messy and creative for a while -- and letting features come out of that.

Hopefully this is the first in a series of posts about how this process and the world that emerges from it.

~JS