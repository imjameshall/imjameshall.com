---
title: Work
date: 2016-08-25 14:47:00 -04:00
---

{% for post in site.posts %}
{% if post.categories contains "work" %}
<div class='item'>
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
  <img src='{{ post.homepage-image}}'/>
  <p>{{ post.title }}</p>
  <p>{{ post.subheading }}</p>
</a>
</div>
{% endif %}
{% endfor %}
