# **Changelog 01/10/2025**

Hello everyone! It's been a minute since I've updated y'all, and I think now is an excellent time to do so.

---

## What has happened since the last changelog?

Actually, a lot. Since the last post the project has officially gone open source! This was really big for me since I was bike shedding everything possible before making it public.

Even though I did all that, the project was still not ready. The fact that I used pure HTML and JS on a project that I wanted to be a dynamic single page app made everything impossible to work on. Every little change on the warning bar, fonts, or navbar had to be replicated on every single page!

After uploading the project and seeing it was not nearly ready for my standards, I decided that something big needed to happen: a complete rewrite in React.

---

## What is the new project and what is it based on?

The current project uses React, Tailwind, and TypeScript. I decided to use Vite as the framework since it was very easy to set up and use. I also thought of using NextJS but I found it very confusing and not worth the time to learn, at least for now. Also, Vite has a very hands-off approach to the whole "building your site" thing, which I find very beneficial for me, a new web developer trying to learn basic stuff...

---

## One day later...

Hi again! The day I was writing the first part of this changelog I hadn't slept much, so it was becoming very hard for me to write this blog, so I just gave up halfway and decided to sleep.

Even though the first section was only a day ago, a lot has improved, and I am kind of glad that I gave up mid-way, since now I have more to talk about.

The first thing I want to talk about: a new look for the changelogs page. The changelogs page now has a repaginated look to it. Now, there is a "featured" changelog, which is the most recent and thus should get more attention than others. By scrolling a little, you will see all the older changelogs. Right now, since there is only one, I just spammed a bunch of them so y'all can see how a more populated page would look like.

Also, now the main page is almost complete (just missing the blogpost section and the future section). When I was writing this changelog a day ago, everything was half baked. Crazy how React + Vite has allowed me to be a lot more productive!

---

## Plans and problems for this new project

Right now the biggest problem is just porting everything from the old website, but another big problem is finding the right library for buttons. Right now I'm using the DaisyUI for the library. It's very good and has tons of templates, but a problem I have found is that some elements are half baked and those are the ones I need. For example, right now in the navigation bar there is a hamburger menu. Cool, right? But the problem is that when you open it, the selection menu has a transparent background that makes it look horrible. Another thing, is that it gets clipped through by other elements in the page, so the experience is horrible. I'm thinking of using another library for that thing, but I will think of this on another day. In the present, my main concern is porting this all to GitHub without problems; it's the first time I have two different projects in the same repo, and I fear that GitHub Pages will only identify one of them. I'll also think of this later.

For my plans in the future: make this site more than just a site for a Discord theme. I want this to be *my* website, where I share stuff I find interesting. Obviously, the theme aspect of the site will remain as it is, but maybe adding a hidden page where you see all my personal blogs would be really cool. Also, I'll use a new library for the animations, it's called "motion". It's pretty popular, widely used and very powerful, way more powerful in fact than GSAP, at least from what I've researched. When I get the hang of it, I plan on adding crazy animations to the website!