---
layout: page
title: Language Embodied Indoor Navigation
description: Agent Navigation in Simulation Environment
img: assets/img/project7/mp.gif
github: https://github.com/pradnyas5/Language-Embodied-Navigation-using-Local-and-Global-Planners
importance: 7
category: motion planning
---
An object navigation workflow that implements simualtion of navigation of an agent(robot) to a goal position as commanded through spoken language.
This project is insipred by the [ObjectNav Habitat Challenge 2022](https://aihabitat.org/challenge/2022/).

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project7/Architecture.png" title="Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Object Navigation Workflow
</div>

## Task Breakdown
---

### Conceptual Setup


Since the base concept of navigation in simulation environment is focused majorly on how does the agent navigate to the goal detination, the objective of this 
task is to explore traditional path-planning algorithms such as A\* and RRT\* and evaluate their performance on their ability to behave as an asymptotically optimal planner.
After careful evaluation, we decided to implement RRT\* for the application of this project.

---

### Environmental Setup

The objective of the task was to set the vision sensor feed,and add a Navigation baseline.

---
### Natural Language Processing and Goal Retrieval 

The objective of the task is to identify speech commands and process the text to understand the goal object in the
statement. Further, once the goal object is known, a three-dimensional coordinates set is obtained for the traditional path
planners to plan upon. 

---
### Path Planning

3D start and goal coordinates are converted to 2D for input to traditional planners, RRT\* and A\*, which search for the goal in a grid-based scene.  
The resulting 2D path points are then re-converted to 3D. During 3D navigation, the robot gathers RGB and depth data. 
The figure below shows RRT\* results for two scenes and three goal objects: ‘Sofa’, ‘Refrigerator’, and ‘Bed’. The environment’s top-down grid map displays free space in black and obstacles in white.

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project7/1.png" title="Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
     <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project7/2.png" title="Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
     <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project7/3.png" title="Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   2D Path Planning
</div>

---
### Comparison with Learning-based Planning

The objective of this section is to compare traditional planners with reinforcement learning (RL)-based planning, assessing their real-world applicability and feasibility. 
We trained an RL model to navigate in unknown environments and reach specified goal object positions. The implementation workflow and results can be seen in the figure below.
We evaluated RRT\* and A\*, with RRT\* excelling in optimal pathfinding due to its extensive node sampling and tree extension, while A\* offers smoother, real-time trajectories. 
showed advantages over traditional planners in data-rich settings, though traditional planners are easier to implement.

---