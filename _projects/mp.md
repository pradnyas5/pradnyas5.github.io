---
layout: page
title: NeRF
description: Language Embodied Indoor Navigation
img: assets/img/project7/mp.gif
github: https://github.com/pradnyas5/Language-Embodied-Navigation-using-Local-and-Global-Planners
importance: 7
category:motion planning
---


### Path Planning

3D start and goal coordinates are converted to 2D for input to traditional planners, RRT\* and A\*, which search for the goal in a grid-based scene. 
The resulting 2D path points are then re-converted to 3D. During 3D navigation, the robot gathers RGB and depth data. The figure below shows RRT\* results for two scenes and 
three goal objects: ‘Sofa’, ‘Refrigerator’, and ‘Bed’. The environment’s top-down grid map displays free space in black and obstacles in white.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project7/rrt_Star_sofa_Scene1.png" title="Path Planning" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project7/RRT_Star_Scene5_Bed_Path.png" title="Path Planning" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project7/rrt_Star_refrigerator_scene1.png" title="Path Planning" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    2D Path Planning
</div>

--- 

### Comparison w/ Learning based Planning

The objective of this section is to compare traditional planners with Reinforcement learning-based planning, assessing their real-world applicability and feasibility. We trained an RL Model to navigate in unknown environments 
and reach specified goal object positions. The implementation workflow and results can be seen in figure below. 
We evaluated  RRT\* and A\*, with  RRT\* excelling in optimal pathfinding due to its extensive node sampling and tree extension, while A\* offers smoother, real-time trajectories. 
RL showed advantages over traditional planners in data-rich settings, though traditional planners are easier to implement.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project7/RL_Flowchart.png" title="RL-based Planning" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project7/RL_Couch.png" title="RL-based Planning" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    2D Path Planning
</div>

--- 