---
layout: page
title: Rigid Body Motion Planning
description: Traditional Path Planning
img: assets/img/project9/rbmp.gif
github: https://github.com/pradnyas5/Rigid-Body-Motion-Planning
importance: 9
category: motion planning
---

Implementaion of 2D path planning for three different types of robots: Point Robot, Omnidirectional Rectangular Robot, and Kinematic Chain.


### Point Robot

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/Point/uniform_PRM_94.71.mp4" title="PRM Uniform Planner" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   PRM Planner: Uniform Sampling
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/Point/gaussian_PRM_94.94.mp4" title="PRM Gaussian Planner" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
  PRM Planner: Gaussian Sampling
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/Point/bridge_PRM_90.77.mp4" title="PRM Bridge Planner" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   PRM Planner: Bridge Sampling 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/Point/RRT_star_94.87.mp4" title="RRT Star" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   RRT* Planner
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/Point/RRT_97.45.mp4" title="RRT" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   RRT Planner 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/Point/Infromed_RRT_star_90.11.mp4" title="Informed RRT Star" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   Informed RRT* Planner
</div>

---

### Kinematic Chain


<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/KinematicChain/Path_Kinematic_PRM_Gaussian.mp4" title="PRM Gaussian Planner" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   Kinematic Chain PRM Planner: Gaussian Sampling
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/KinematicChain/Path_Kinematic_PRM_Bridge.mp4" title="PRM Bridge Planner" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   Kinematic Chain PRM Planner: Bridge Sampling
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/KinematicChain/Path_Kinematic_PRM_Uniform.mp4" title="PRM Uniform Planner" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   Kinematic Chain  PRM Planner: Uniform Sampling 
</div>

---

### Omni Directional Robot

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/OmniDirectional/RRT_star_96.76.mp4" title="RRT*" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   RRT*
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/OmniDirectional/bridge_96.32.mp4" title="RRT* Bridge Planner" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   RRT*: Bridge Sampling 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/OmniDirectional/gaussian_94.09.mp4" title="RRT* Gaussian Planner" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
  RRT*: Gaussian Sampling 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/OmniDirectional/uniform_95.15.mp4" title="RRT* Uniform Planner" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
   RRT*: Uniform Sampling 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align="center">
        {% include video.liquid path="assets/img/project9/OmniDirectional/Informed_RRT_star_94.52.mp4" title="Informed RRT* Planner" class="img-fluid rounded z-depth-1" width = "400" controls=true autoplay=true loop=true muted=true %}
    </div>
</div>
<div class="caption">
  Informed RRT*
</div>

---