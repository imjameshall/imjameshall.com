---
title: Tinkerings
date: 2016-08-23 01:02:00 Z
---

<p>
I've always liked putting small things together and trying to make something from other parts, ala Dr. Frankenstein. It started with me and legos where I'd take a bunch of different sets and create something different. As I've grown up I took this thinking and curiosity into coding. Here are some of my tinkerings that I would do to take my mind off a project for a bit, or just to practice working with APIs or new code.  
</p>
<ul class="work" class="clr">
    {% for post in site.posts %}
    {% if post.categories contains "tinkerings" %}
    <li>
<div>
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
              <img src='{{ post.homepage-image}}'/>
            <p>{{ post.title }}</p>
            <p>{{ post.subheading }}</p>
</a>


        </div>
    </li>
    {% endif %}
    {% endfor %}
</ul>
