---
layout: page
title: Motion and Trajectory Tracking System
description: For an Aerial Vehicle 
img: assets/img/project1/project1_profile.png
importance: 1
category: state estimation
related_publications: false
---

This projects aims to implement the state-of-the-art State Estimation algorithms such as EKF, UKF.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/non_kf_est.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/non_kf_gt.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Non Linear Kalman Filter Response: Estimates (left) and Ground Truth (right).
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/pf.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Particle Filter Response
</div>

