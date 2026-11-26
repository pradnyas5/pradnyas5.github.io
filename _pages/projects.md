---
layout: page
title: projects
permalink: /projects/
description:
nav: true
nav_order: 2
display_categories: [deep learning, computer vision, motion planning, state estimation]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
  <!-- Category filter buttons -->
  <div class="project-filters" role="group" aria-label="Filter projects by category">
    <button type="button" class="project-filter active" data-filter="all" aria-pressed="true">All</button>
    {% for category in page.display_categories %}
    <button type="button" class="project-filter" data-filter="{{ category | slugify }}" aria-pressed="false">{{ category }}</button>
    {% endfor %}
  </div>

{% assign sorted_projects = site.projects | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3 project-grid">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

<script src="{{ '/assets/js/project-filter.js' | relative_url | bust_file_cache }}"></script>
<script src="{{ '/assets/js/scroll-reveal.js' | relative_url | bust_file_cache }}"></script>
