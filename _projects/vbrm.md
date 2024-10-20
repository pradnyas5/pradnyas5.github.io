---
layout: page
title: Vision-Based Grasping of Object
description: Vision-based Robotic Object Manipulation assuming Object-Symmetry
img: assets/img/project8/vbrm.png
github: https://github.com/pradnyas5/Vision-based-Grasping-of-Objects-using-Symmetry
importance: 8
category: computer vision
---

`Tech Stack`:
![ROS 2](https://img.shields.io/badge/-ROS%202-222222?style=flat&logo=ros&logoColor=purple)
![C++](https://img.shields.io/badge/-C++-000000?style=flat&logo=c%2B%2B&logoColor=purple)
![PCL](https://img.shields.io/badge/-PCL-222222?style=flat&logo=github&logoColor=purple)
![Gazebo](https://img.shields.io/badge/-Gazebo-222222?style=flat&logo=gazebo&logoColor=purple)

## 1. Introduction/Abstract
The "Grasping Assuming Symmetry" project leverages the nature of symmetry in many objects. The approach uses a depth camera to capture real-time 3D representations of the environment, focusing on object symmetries to optimize grasping points. 
This integration of depth-sensing technology and algorithmic innovation offers a promising advancement in robotic manipulation, ensuring more stable and efficient interactions with many objects in real-world scenarios.

---
## 2. Implementation   
---
### Step 1: Downsampling and major plane removal
The point cloud data is first downsampled using a voxel grid to reduce the number of points, making subsequent processes computationally efficient.
Plane segmentation using RANSAC is applied to remove the plane from the point cloud. This ensures that only the object of interest remains in the cloud.

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project8/1.png" title="Input Point Cloud" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Input Point Cloud
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project8/2.png" title="Output Point Cloud" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Output Point Cloud
</div>

--- 

### Step 2: Point Cloud Completion

A symmetry-based approach is utilized to complete the point cloud. The best symmetry plane is determined based on visibility constraints.    

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project8/3.png" title="Incomplete & Complete Point Cloud" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Incomplete & Complete Point Cloud
</div>

We first create all possible planes oriented at different angles.    
We then mirror every point in the current point cloud about each of these planes.      
Once the mirrored point is obtained, we then evaluate the plane in consideration based on the condition: $(\text{distance} - \frac{\text{distance}^2}{\text{dist\_threshold}}) \cdot \frac{4}{\text{dist\_threshold}}$.    
The above condition is nothing but the visibility score metric which is calculated for all planes.   
Finally, we select the best plane that has the highest score to generate the complete point cloud.   

---

### Step 3: Normal Estimation   

Normals are calculated using the pcl::NormalEstimation class. This method estimates normals based on the local neighborhood of each point.   
KDTree is used for efficient spatial neighbor searching.   
The computed normal at a point is influenced by the positions of its neighbors. The method calculates the best-fitting plane for the neighbors and determines the plane's perpendicular as the normal.    
Normals are then visualized as small arrows emanating from points in the point cloud, pointing in the direction of the normal as seen in the figure below.   

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project8/4.png" title="Incomplete & Complete Point Cloud" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Surface Normals
</div>

---  

### Step 4: Grasp Detection   
We have calculated the best grasp contacts for the robot when interacting with 3D point cloud data completed in the previous steps. The key steps of this process include:
1.	Input parameters: 
This includes the completed point cloud represented using the Point Cloud Library (PCL) data structure and another point cloud containing the surface normals corresponding to the points in the completed point cloud.   
2.	Nearest Point Search:
The nearest point to the centroid of the completed point cloud is calculated using KDTree and the result is stored. This is done by calculating the squared distance metric of each point in the completed point cloud from the centroid (mean) of the completed point cloud.   

3.	Angle calculation:
The function then calculates the angles between the normals of each point in the point cloud and the vectors from the nearest point (contact1) to these points. It uses the dot product and vector magnitudes to calculate the angle between the normal and the vector. The function iterates through all points in complete_points and updates the current point (contact2) based on the minimum angle. The goal is to find a point that, when grasped along with contact1, results in the smallest angle between the contact normals and the grasp direction. This is based on the principle shown below:

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project8/5.png" title="Incomplete & Complete Point Cloud" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project8/6.png" title="Incomplete & Complete Point Cloud" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Among these, the first grasp is the most stable one as the angle between the normals at the contact points and the vector between the contact points is minimal.   

4.	Best grasp:
Thus, we obtain the second point for grasping which will be the most stable grasping point along with the point nearest to the centroid of the completed point cloud.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project8/7.png" title="Scene Classification" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project8/8.png" title="Scene Classification" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Best Grasping Contacts (in red)
</div>

---

## 3. Results of Point Cloud Completion

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project8/9.png" title="Incomplete & Complete Point Cloud" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Coke Can
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project8/10.png" title="Incomplete & Complete Point Cloud" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Beer Can
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0" align=center>
        {% include figure.liquid path="assets/img/project8/11.png" title="Incomplete & Complete Point Cloud" width="300" height="200" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Cricket Ball
</div>








