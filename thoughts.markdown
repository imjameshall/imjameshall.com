---
title: Thoughts
date: 2016-08-23 01:02:00 Z
layout: thoughts
---

<h2>Here is what i've been up to:</h2>
<ul class="work" class="clr">
    {% for post in site.posts limit: 5 %}
    <li class='work-item'>
        <div>
        {% for category in post.categories limit: 5 %}
        {{post.categories}}
        {% endfor %}
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">

            <div class='post-info'>
            <p>{{ post.title }}  {{meta['categories']}}
            </p>
            <p>{{ post.subheading}}</p>
          </div>


            </a>
        </div>
    </li>
    {% endfor %}
</ul>
