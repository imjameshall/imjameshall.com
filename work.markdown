---
title: Work
date: 2016-08-25 14:47:00 -04:00
---

<div class="item-list clr">
{% for post in site.posts %}
{% if post.categories contains "work" %}
<div class='item'>
<div class='post-link'>
<a href="{{ post.url | prepend: site.baseurl }}">
  <img src='{{ post.homepage-image}}'/>
  <h2>{{ post.title }}</h2>
  <div class='sub-title'>{{ post.subheading }}</div>
  </a>
  {% if post['collaborators'].size > 0 %}
  <div class='collaborators'><strong>With help from:</strong>
  {% for collaborator in post['collaborators'] %}
    <a href='{{collaborator['url']}}'>{{collaborator['name']}}</a>
  {% endfor %}
  </div>
  {% endif %}
</div>
</div>
{% endif %}
{% endfor %}
</div>
