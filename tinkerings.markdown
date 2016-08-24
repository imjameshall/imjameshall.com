---
date: 2016-08-23 01:02:00 Z
---

<ul class="work" class="clr">
    {% for post in site.posts limit: 5 %}
    <li class='work-item'>
        <div>


        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>

        </div>
    </li>
    {% endfor %}
</ul>
