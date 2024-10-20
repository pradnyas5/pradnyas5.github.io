---
layout: page
title: Einstein Vision
description: Perception pipeline for Autonomous Vehicles
img: assets/img/project2/einstein_vision.gif
github: https://github.com/pradnyas5/Einstein-Vision
importance: 2
category: deep learning
---

## Concept 

This projects was a part of [RBE 549: Computer Vision](https://rbe549.github.io/spring2024/proj/p3/). It aims to significantly understand Deep Learning for Computer Vision. 
It required a rigorous approach and offered key takeaways in implmenting complex vision-based models.

The following pipeline was designed as an initial planned architecture of our Vision pipeline:

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project2/Temp_Architecture.png" title="Researched Vision Pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Researched Vision Pipeline
</div>

## Pipeline Overview

To manage the integration of multiple concepts in this project, we began by understanding the overall pipeline and conducting research on each individual component. The initial goal was to build 
a system as outlined in the aboce figure. We prioritized the front camera calibration, recognizing its critical importance. Leveraging insights from previous projects, we estimated the camera calibration matrix (K), 
along with rotation and translation parameters, aligning them with the camera's pose in Blender. This formed the foundation for further development and integration of the system components.

## Methodology

 The phased approach taken to deploy deep learning models for detecting various assets in autonomous vehicle scenes is as follows:

`Phase I` (Basic Features): Detect basic elements like lanes (solid, dashed, colored), vehicles, pedestrians, traffic lights (with color), and road signs (e.g., stop signs).

`Phase II` (Advanced Features): Add complexity by classifying and sub-classifying vehicles, identifying their orientation, recognizing arrows on traffic lights, detecting additional objects (e.g., traffic cones, poles), and analyzing pedestrian poses.

`Phase III` (Bells and Whistles): Further refinement includes identifying vehicle brake lights, indicators, distinguishing parked vs. moving vehicles, and determining moving directions.

`Phase IV`: Address challenges like speed bump detection and collision prediction using optical flow and YOLO-based multi-object tracking, although full integration into the rendering pipeline remains incomplete.


## Model Results

As outlined in the methodology, the primary goal is to extract information about various elements within the scene. Since explaining each component's phases individually would be complex, we've consolidated the information here. 
This includes our exploration of each concept, the final models we selected, and the results obtained. This approach provides a streamlined overview of how we integrated different aspects of the project into a cohesive system. The results of each of the individual models 
can be seen below: 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project2/output_image_cloudy.png" title="Scene Classification" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project2/output_image_rain.png" title="Scene Classification" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Scene Classifcation output obtained from a trained custom ResNext 34.
</div>


## Final Overview

The final pipeline can be seen in the figure below:

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project2/FinalPipelineOverview.png" title="Final Pipeline" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Researched Vision Pipeline
</div>