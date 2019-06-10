---
title: "Generative model for text mock-data"
date: 2019-03-03
published: true
tags: ["nlp", "mock-data", "generative-model"]
cover_image: "./images/textgen_example.gif"
series: false
canonical_url: false
description: "Any text-based entity or text-based column for upstarts or demos can be populated by generating mock data from a already learnt distribution or a encoding/decoding using textgen."
---

tl;dr
```pip install textgen``` :rocket:

Recently went to Stockholm AI [study group](https://www.eventbrite.co.uk/e/study-group-13-speech-recognition-and-deep-generative-models-tickets-56243370435?fbclid=IwAR1o_9Aa4FtsgPubMDR43c5yjjmbwJ_OotGKl2_6wgNtDBiTRuivSKIgty0); where [Judith](http://www.csc.kth.se/~butepage/)  presented a talk on generative models. 

## Generative model
A generative model is basically a overfitted model for trying to describe the underlying data and being able to generate predictions based on it, by providing either a encoding and a decoder or a distribution to sample from.

This can be used for generating mock-data for any type of text-based entity or column (bare in mind that it should not be cruicial to your organization ofc). Having a set of known text-based features that gets presented in demos or at any upstart of a project can be generated by a generative model on a learned distribution that serves as the dummy data creator.

As with every python implementation, there is usually always a python package for that, as with [minimaxir/textgen](https://github.com/minimaxir/textgenrnn). 

However, it took some time to get everything setup so I prepared for myself some handy little snippets and docker file for getting everything setup, as had to get randomly generated data for a multitude of various sources and found that I would provide a simple snippet to interact with this wonderful package. 

If you have not used keras/deep learning but want to get it setup and use it. In the repo there is documentation on how to get started 
[eleijonmarck/data-generator](https://github.com/eleijonmarck/data-generator) 

1. Get the data to `sample-datasets`, with a `column_name` and the text data you want to generate.
2. Train the generator using the `textgen/train-textgen.py` or `make example-train`