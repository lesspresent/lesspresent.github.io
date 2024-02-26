---
title: Building Adventure Worlds
author: Jonathon
date: 2024-02-25T12:50:00
created: 2024-02-25T12:50:00
---

I've been playing with building worlds and interpreters for adventure games.
These have taken the form of text-based adventure, but could could support simple graphics, and support puzzles similar to what you'd find in Myst-likes.
While I've implemented a few text adventure interpreters, I haven't done anything novel (nor do I feel that I've built anything I'd be comfortable calling a game), but it seems interesting enough to share.
I've learned quite a lot, particularly about how difficult the creative process can be, though I'm not sure it's a project I want to continue with.

Over the past ~year, I've implemented three interpreters, all based on a similar model.
The first interpreter was written in Elixir and ran on the command-line, the second was written in Typescript and included a domain-specific language, while the third was also written in Elixir but used Phoenix and LiveView.
These went through a few major mutations, but each is based on a model of "places" that exist in a "universe".

The first interpreter.

The second interpreter.

The third interpreter.

What did I learn?

So what's missing?

Am I going to continue?