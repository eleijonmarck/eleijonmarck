---
title: "Genetic algorithm for flappy bird"
date: 2019-01-10
published: true
tags: ["genetic-algorithms", "osx", "matplotlib"]
cover_image: "./images/flappy.gif"
series: false
canonical_url: false
description: "A neural network to play frappy bird with a genetic algorithm with different speeds and watch the progress."
---

During the holidays I got to have some fun together with [JonasRSV](https://github.com/JonasRSV) (he is top 0.3 % on a few kaggle competitions and a wonderfully kind human being). He and his friend have developed [flappyMind](https://github.com/JonasRSV/flappyMind) a genetic algorithm solution for FlappyBird. This approach also provides the corresponding learning curve for each agent in a plot. This way you can see the development of the agents as they traverse the different generations.

This uses a standard neural network architecture with abstractions for dealing with mutation and inheritance for the different families of generations. The model is trained faster by using the number keys <1,..5> for rendering so the progress can be seen from each generation. If you really want to get the high score of flappy bird, just press 0 and it stops to render and just trains; once you feel like the model has been trained enough. Just press whatever rendering button speed you want.

model is in 
```bash
$ ls ANNGenetic
EvolutionDemoOn2Dfunction.ipynb __pycache__
README.md                       ann.py
__init__.py                     test.py 
```

Rendering uses
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

# Known issues
If you get a familiar error with (MAC OSX rendering problems :(. ))

```python
2019-01-03 13:20:45.135 python[44873:3146187] -[SDLApplication _setup:]: unrecognized selector sent to instance 0x7f824fe98430
2019-01-03 13:20:45.139 python[44873:3146187] *** Terminating app due to uncaught exception 'NSInvalidArgumentException', reason: '-[SDLApplication _setup:]: unrecognized selector sent to instance 0x7f824fe98430'
```
## Solution:
Either skip the backend setup in matplotlib and take the default from MacOSx Mojave 10.14.2 (18C54)
Install `$ pip install pyqt5`
```bash
$ echo "" > ~/.matplotlib/matplotlibrc
$ echo "backend: Qt5Agg" > ~/.matplotlib/matplotlibrc
```

Every answer gave me the same solution to my problem. Using TkAgg for backend for matplotlib.
[use-.matplotlibrc](https://stackoverflow.com/a/34583958/3767229)
[explicit-use-of-matplotlib.use()](https://stackoverflow.com/a/34583958/3767229)

## EDIT: 2019-03-03
found and describing same issue.
[qt5-matplotlib](https://stackoverflow.com/a/53852328/3767229)