---
title: Introduction to Algorithms
date: 2019-09-09
tags: ['algorithms', 'data-structures']
canonical_url: false
series: true
description: ""
---

This series will be covering the introduction of algorithms and their application.

### Why
- Anywhere where realtime results want to be found quick. I want fassssst :)
- Efficiently calculating and handling the vast amount of data.
 - Vast amount of twitter feed
 - Sensor data
 - Machine Learning model training
 - Database queries

If you are thinking that you are never gonna touch on these things. It might be true, but to have a basic understanding of algorithms will give much sense for dealing with for loops across anything you do.

---
Algorithms can be traced back to the 9th century of a famous mathematician see [history of algorthms](http://cs-exhibitions.uni-klu.ac.at/index.php?id=193). Nowadays everyone talks about algorithms, which is a fancy name of saying a set of intructions to follow. Given today, should not computational power overcome the means to calculate anything. Previously 1000 characters were seen as "big" data. If we had let's say a string of 1 million characters; the computer today would be able to look through that in seconds. However what happens when we deal with all of the worlds roads or the blockchain of a specific cryptocurrency, suddenly efficiency becomes vital.
> Study of algorithms is a combination of size of input and efficiency.

How does the algorithm actually evolve given more input, and we are talking about exponential time of execution or even worse given a specific chosen algorithm for a given problem. 

Algorithms can be categorised in these topics
* Graphs (which include Trees) - minimum number of moves for Rubik's Cube
* Sorting - Event simulations
* Hashing - Genome sequencing
* Numerics - RSA, HTTPS
* Shortests Paths
* Dynamic Programming


Here is an example on how to find the *peak* of a given array


```python
array = [0,1,2,3,4,5]
```

Let's look at each element and see if that is bigger than the rest. 

We would call this the straightforward algorithm for this problem.

```python
for i in range(len(array)):
    if array[i] > max_value:
        max_value = array[i]
```

We would therefore always have to look at all of the elements to find the peak.

> ### Time Complexity is *O(n)*

---
> ###  How would we make this faster?

Binary Search: A recursive algorithm *using* Divide and Conquer strategy

Rewriting the array in elements of index 1 to n.
```python
array = [0,1,...n/2,...,n-1,n]
```
0. Take element `n/2`
1. If `array[n/2] > array[n/2-1]`
   - look at left half `array[1,...,n/2 - 1]` for peak
2. Else if `array[n/2] < array[n/2-1]`
    - look at right half `array[n/2,...,n]` for peak
3. Else `array[n/2]` is peak


Given that we now "split" the input size in half each time we run the algorithm we get a time complexity of log n. 
```
T(n) = T(n/2) + O(1)
...
T(n) = O(log n)
```

> ### Time Complexity is *O(log n)*

This is EXPONENTIALLY faster. 

Just to give you a sense of what this intails:

|          | input | time           |   |   |
|----------|-------|----------------|---|---|
| O(n)     | 10^5  | 13 seconds     |   |   |
| O(logn) | 10^5  | 0.0001 seconds |   |   |
|          |       |                |   |   |
