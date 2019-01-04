---
{
  "title": "Pyenv installation correctly for MacOSX w. Matplotlib",
  "image": "/static/img/flappy.gif",
  "tags": ["genetic-algorithms", "osx", "matplotlib"],
  "date": "2018-12-03"
}
---
# Pyenv installation correctly for MacOSX w. Matplotlib

For the past year I have been using pyenv for work. During the holidays I got to explore some fun repositories like [flappyMind](https://github.com/JonasRSV/flappyMind) a genetic algorithm solution for FlappyBird. This approach also provides the corresponding learning curve for each agent in a plot. This way you can see the development of the agents as they traverse the different generations.

```python
fitnesses = [x.fitness for x in PLAYERS]

GENERATION += 1
mean = (sum(fitnesses) / len(fitnesses))

MEAN_SCORE.append(mean)
GEN.append(GENERATION)

plt.plot(GEN, MEAN_SCORE)
plt.pause(0.5)
```

I got a familiar error with 
```
2019-01-03 13:20:45.135 python[44873:3146187] -[SDLApplication _setup:]: unrecognized selector sent to instance 0x7f824fe98430
2019-01-03 13:20:45.139 python[44873:3146187] *** Terminating app due to uncaught exception 'NSInvalidArgumentException', reason: '-[SDLApplication _setup:]: unrecognized selector sent to instance 0x7f824fe98430'
```

The answer to this is clear on [Matplotlib Crashing tkinter Application on MaxOSx](https://stackoverflow.com/a/34109240/3767229).