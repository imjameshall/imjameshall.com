---
title: Work
date: 2016-08-25 14:47:00 -04:00
---

<div class="item-list clr">
{% for post in site.posts %}
{% if post.categories contains "work" %}
<div class='item'>
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
  <img src='{{ post.homepage-image}}'/>
  <h2>{{ post.title }}</h2>
  <div class='sub-title'>{{ post.subheading }}</div>
</a>
<div class='collaborators'>With help from:
{% for collaborator in post['collaborators'] %}
  <a href='{{collaborator['url']}}'>{{collaborator['name']}}</a>
{% endfor %}
</div>
</div>
{% endif %}
{% endfor %}
</div>
