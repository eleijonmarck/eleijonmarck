---
title: "Generative models for dummy text generation"
date: 2019-03-03
published: true
tags: ["nlp", "dummy-data"]
cover_image: "./images/textgen_example.gif"
series: false
canonical_url: false
description: "Dummy text generation for mock data"
---

Recently I went to Stockholm AI [study group](https://www.eventbrite.co.uk/e/study-group-13-speech-recognition-and-deep-generative-models-tickets-56243370435?fbclid=IwAR1o_9Aa4FtsgPubMDR43c5yjjmbwJ_OotGKl2_6wgNtDBiTRuivSKIgty0); where [Judith](http://www.csc.kth.se/~butepage/)  presented a talk on generative models. This gave me an idea to generate dummy data based on a learned distribution by a generative model that serves as the dummy data creator.

 tldr;

You want to generate text? 

```pip install textgen``` :rocket:

## Generative model
A generative model is basically a overfitted model for trying to describe the underlying data and being able to generate predictions based on it.

I wanted to build a simple model in keras but as with every python implementation, there is usually always a python package for that, as with [minimaxir/textgen](https://github.com/minimaxir/textgenrnn). 

I prepared for myself some handy little snippets and docker file for getting everything setup, as had to get randomly generated data for a multitude of various sources and found that I would provide a simple snippet to interact with this wonderful package. 

If you have not used keras/deep learning but want to get it setup and use it. In the repo there is documentation on how to get started 

[eleijonmarck/data-generator](https://github.com/eleijonmarck/data-generator) 

1. Get the data to `sample-datasets`, with a `column_name` and the text data you want to generate.
2. Train the generator using the `textgen/train-textgen.py` or `make example-train`