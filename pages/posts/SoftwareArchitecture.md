---
type: post
title: Mono repo vs Poly repo
date: 2022-09-04
tag: software architecture
description: What is a Mono repo and why you should care if not already
author: TheWisePigeon
---
import Comments from '../comment.js'
import Sub from '../sub.jsx'


Hi folks! It's been a while since I last posted. I've been busy working and learning new stuff, trying to improve as a developer. And today I want to share my toughts with you about a concept that I've become obsessed with: **Software Architecture**
I'll be litteraly spaming posts about that specific subject, first because I want to learn how to better structure my apps and for the sake of sharing what I learn. Today we will be talking about what are called **Mono repos**. What are they? and why you should know. I, myself doesn't know everything about them, it's still a very new field for me, but I'll try my best not to say nonsense, and only talk about what I understood in my researchs. So Without further a do, let's get started.

## What are Mono Repos
As you can tell by the name, they are repos or repositories. Git repositories to be more precise. More than that, it's an architecture, a software development strategy, that consists in keeping all the code of many separate projects, in a same repository.  The opposit concept is called Poly repo. And it's what most of you probably use on a daily basics. Each project has it's own repo and dependencies.

## Advantages of Mono Repos
The greatest advantage in my opinion is **Code reusability**. Similar functionnalities can be abstracted into shared libraries and directly included by projects. This will save a lot of time and make the codebase less complex to maintain.

Another advantage is **Simplified dependency management**. With poly repos, if a dependency is used ny many projects, that dependency might be downloaded many times, and maybe a team might start using a different version, what might cause conflicts later. With Mono repos, all projects are in sync, using the same version of dependencies.

I also think that Mono repo architecture helps team members to see a bigger picture of the projects. For example, the backend team can have an idea about what the frontend looks like and vice versa. It improves collaboration between teams.


## Disadvantages of Mono Repos
The first thing I tought when I first stumbled accross Mono repo is the size. And as I tought, this is one of the disadvantages of using mono repos. As projects grow the repo become bigger and bigger. I read about how it goes to a point where IDEs starts lagging and builds took many minutes to complete.

Another disadvantage is the lack of per-project access control. With poly repos, each time have access to it's repo and sometimes not to another team's repo. In Mono repos, all projects are accessible by everyone.


## Final toughts
As I said earlier, I will be writting more about software architecture related topics. Consider this one as an essay :)


<Sub />

## Until next time, Stay safe and write code!!🐦

<Comments />