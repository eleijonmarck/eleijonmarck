---
title: "Pyenv installation correctly for MacOSX w. Matplotlib"
date: 2018-12-03
published: true
tags: ["genetic-algorithms", "osx", "matplotlib"]
coverImage: "./images/flappy.gif"
series: false
canonical_url: false
description: "Genetic algorithm for flappy bird"
---
# FlappyMind using Genetic Algorithm - Interactive learning
For the past year I have been using pyenv for work. During the holidays I got to explore some fun repositories like [flappyMind](https://github.com/JonasRSV/flappyMind) a genetic algorithm solution for FlappyBird. This approach also provides the corresponding learning curve for each agent in a plot. This way you can see the development of the agents as they traverse the different generations.

This uses a standard neural network architecture with abstractions for dealing with mutation and inheritance for the different families of generations. The model is trained faster by using the number keys <1,..5> for rendering so the progress can be seen from each generation. If you really want to get the high score of flappy bird, just press 0 and it stops to render and just trains; once you feel like the model has been trained enough. Just press whatever rendering button speed you want.

model is in 

```bash
$ ls ANNGenetic

EvolutionDemoOn2Dfunction.ipynb __pycache__
README.md                       ann.py
__init__.py                     test.py 
```

for rendering it is using

`$ cat nnplayer.py`

```python
...
  MEAN_SCORE.append(mean)
  GEN.append(GENERATION)

  plt.plot(GEN, MEAN_SCORE)
  plt.show()
  plt.pause(0.5)
...
```



## Known issues
If you get a familiar error with (MAC OSX rendering problems :(. ))

```python
2019-01-03 13:20:45.135 python[44873:3146187] -[SDLApplication _setup:]: unrecognized selector sent to instance 0x7f824fe98430
2019-01-03 13:20:45.139 python[44873:3146187] *** Terminating app due to uncaught exception 'NSInvalidArgumentException', reason: '-[SDLApplication _setup:]: unrecognized selector sent to instance 0x7f824fe98430'
```

Looking at my ~/.matplotlibrc
`$ cat ~/.matplotlibrc`

```
Backend "TkAgg"
```

To ensure I was using TkAgg, I exchanged the code to also explicitly use 'TkAgg'
`$ cat nnplayer.py`
```
...
import matplotlib
matplotlib.use('TkAgg')
...
```

Every answer gave me the same solution to my problem. Using TkAgg for backend for matplotlib.
[use-.matplotlibrc](https://stackoverflow.com/a/34583958/3767229)
[explicit-use-of-matplotlib.use()](https://stackoverflow.com/a/34583958/3767229)

## Solution:

Either skip the backend setup in matplotlib and take the default from MacOSx Mojave 10.14.2 (18C54)

```bash
$ echo "" > ~/.matplotlib/matplotlibrc
```

Or


Install `$ pip install pyqt5`
```bash
$ echo "backend: Qt5Agg" > ~/.matplotlib/matplotlibrc
```

## EDIT: 2019-03-03
found and describing same issue.
[qt5-matplotlib](https://stackoverflow.com/a/53852328/3767229)