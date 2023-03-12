---
title: "♫ -> ヅ = hmm. Music Genre Classification"
date: "2019-11-17T22:40:32.169Z"
template: "post"
draft: false
slug: "music-genre-classification"
category: "algorithms"
tags:
  - "deep-learning"
  - "audio"
description: "Music Genre Classification using fastai and deploy on GCP"
socialImage: "./images/music-genre-classification.png"
---

![classification](/assets/blog/music-genre-classification.png)
# ♫ - Music Genre Classification
Build a machine learning (ML) model that takes audio files as input and returns a corresponding music genre.

### Building a model using fastai and 🚀 Deploy the model to GCP

## Gist of everything
- In [approach](#approach) lies all the steps taken
- this [cloud.google.article](https://cloud.google.com/blog/products/ai-machine-learning/ai-in-depth-serving-a-pytorch-text-classifier-on-ai-platform-serving-using-custom-online-prediction) contains all the information about the deploying pytorch on GCP.
- 2 colab notebooks for creating data set and training model
- repo for deploying the model on GCP for GCE
- presentation given at Epidemic Sound 2019 [music-genre-classfication](https://docs.google.com/presentation/d/1WPgr9Y12DlzH3dkNjmi3Co77qIVgFOlim7SmEvzflX4/edit?usp=sharing)

- [creating data set](https://colab.research.google.com/drive/1CVMaHoJT_ECLADdRyyzqteVT-6oV-unb)

- [training model](https://colab.research.google.com/drive/1R4F85FIf0xdmEjeUm38WH4RhBgC_GGUf)

- google app engine deployment repo is here https://github.com/eleijonmarck/music-genre-app-engine

## Approach

### Outcome of assignment
**Expected outcome**
- fastai library for model predictions
- serving the model in GCP w. their new custom prediction model function.

**Actual outcome**
- trained fastai library for model predictions
- serving the model in GCP w. Google App Engine

> ## Outcome

Out of interest of time. The model is only trained on 2 classes `['classical', 'blues']`

app - https://momentum-project.appspot.com/

upload - image from `docs/img_data/*`
---

## Approach

### Training the model
0. Download data
0. Find out research around the area of predicting music genre w. this particular data set.
    1. Found out about MelSpectrograms for predicting the whole songs seems to be the silver standard (not cutting edge).
1. Using [fastaiv3](https://course.fast.ai/) for learning about the library of image classification and its approach to making a first model.
2. Creating the data set for data augmentation / processing from raw audio file outputs to a Melspectrogram to represent the whole songs. (currently processed the blues, classical for interest of time) - colab: https://colab.research.google.com/drive/1CVMaHoJT_ECLADdRyyzqteVT-6oV-unb
3. Train a image classifier using transfer learning w. ResNet as base - colab: https://colab.research.google.com/drive/1R4F85FIf0xdmEjeUm38WH4RhBgC_GGUf
4. Deploying model to GCP.
    1. Challenge here was that GCP does not natively support `pytorch` models. March GCP released custom prediction capabilities and wanted to get my hands dirty [Serving a PyTorch text classifier on AI Platform Serving using custom online prediction](https://cloud.google.com/blog/products/ai-machine-learning/ai-in-depth-serving-a-pytorch-text-classifier-on-ai-platform-serving-using-custom-online-prediction)
    2. Challenge number 2 is that preprocessing can be dealt w. lambda functionality of the keras library. Hopefully we can make the preprocessing of the audio file into a image using the lambdas of keras. See [preprocessing w. lambda keras](https://towardsdatascience.com/writing-custom-keras-generators-fe815d992c5a)
    3. Challenge number 3 is use case. What is the actual use case of this? Depending on that :

		Challenge number 2 might not even be relevant as we might only need this music-genre classification for post analytics. And therefore could postprocess data another way to skip the preprocessing directly from the api.


## Exact steps made and challenges presented on the way

0. Download data set from [Download link](http://opihi.cs.uvic.ca/sound/genres.tar.gz)
0. Unzip the tar into your drive or an environment so you can pick it up from colab (as colab does not persist data)
1. Creating the data set for training w. Melspectrograms. https://colab.research.google.com/drive/1CVMaHoJT_ECLADdRyyzqteVT-6oV-unb
2. Training using the newly created `img_data` using fastai in colab
https://colab.research.google.com/drive/1R4F85FIf0xdmEjeUm38WH4RhBgC_GGUf
3. deploy model using the newly created guide for [deploying pytorch models for gcp](https://cloud.google.com/blog/products/ai-machine-learning/ai-in-depth-serving-a-pytorch-text-classifier-on-ai-platform-serving-using-custom-online-prediction)
4. current step/progress, when trying to deploy the custom model prediction

```bash
$ make create-model
OK
$ make create-version
gcloud alpha ai-platform versions create v2 --model music_genre_classification \
	--origin=gs://music-genre-classification/music-genre-v1.0.0/ \
	--python-version=3.5 \
	--runtime-version=1.13 \
	--package-uris=gs://music-genre-classification/python-prediction/music_genre_prediction-0.1.tar.gz \
	--machine-type=mls1-c4-m4 \
	--prediction-class=model.CustomModelPrediction
Creating version (this might take a few minutes)......failed.
ERROR: (gcloud.alpha.ai-platform.versions.create) Create Version failed. Bad model detected with error:  "Failed to load model: User-provided package music_genre_prediction-0.1.tar.gz failed to install: Command '['python-default', '-m', 'pip', 'install', '--target=/tmp/custom_lib', '--no-cache-dir', '-b', '/tmp/pip_builds', '/tmp/custom_code/music_genre_prediction-0.1.tar.gz']' returned non-zero exit status 1 (Error code: 0)"
make: *** [Makefile:88: create-version] Error 1
```

## New Approach since the GCP AI Platform did not allow for deploying Pytorch models
5. Deploy on Google App Engine

6. Following the [fastai guide](https://course.fast.ai/deployment_google_app_engine.html) on the fastai website.
	1. make a downloadable link of the model that you train
	3. deploy the app. Need to be EXACTLY the number of classes your are prediction w. the model. (This happened to be the cause of some unexplainable error)

7. Deployed app is up and running @ https://momentum-project.appspot.com/
8. Google App Engine does not allow requests to be built around cURL (c-language) requests. See [curl-on-app-engine](https://stackoverflow.com/questions/2571627/curl-on-app-engine)
9. Postman request instead https://www.getpostman.com/collections/c4a2cd9410835920354c


Would have taken some time to configura to setup `cURL` for GAE
```bash
$ curl --request POST \
>   --url https://momentum-project.appspot.com/analyze \
>   --header 'Accept: */*' \
>   --header 'Accept-Encoding: gzip, deflate' \
>   --header 'Connection: keep-alive' \
>   --header 'Content-Length: 474050' \
>   --header 'Content-Type: multipart/form-data; boundary=--------------------------890612561901535102156936' \
>   --header 'Host: momentum-project.appspot.com' \
>   --header 'User-Agent: PostmanRuntime/7.19.0' \
>   --header 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
>   --form file=@/home/eleijonmarck/dev/epidemic-sound-ml-assignment/data/img_data/classical/classical00011.png

curl: (92) HTTP/2 stream 0 was not closed cleanly: PROTOCOL_ERROR (err 1)
```

## 📊  Data
As a dataset, use the ([in](https://arxiv.org/abs/1306.1461))famous GTZAN Genre Collection dataset from

>Tzanetakis, George, and Perry Cook. "Musical genre classification of audio signals." IEEE Transactions on speech and audio processing 10.5 (2002): 293-302.

[Download link](http://opihi.cs.uvic.ca/sound/genres.tar.gz) and [homepage](http://marsyas.info/downloads/datasets.html) for the dataset.

## Next steps:
* create baseline
* make preprocessing step for images
* create embeddings of the melspectrogram features for visualizing in t-SNE
* signal processing for melspectrograms to create MFCC features - https://www.youtube.com/watch?v=Z7YM-HAz-IY
