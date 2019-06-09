SHELL := /bin/bash

DEFAULT_GOAL: help

.PHONY: \
	help \
	dev \
	deploy

## print help
help:
	@printf "\nusage : make <commands> \n\nthe following commands are available : \n\n"
	@cat Makefile | awk '1;/help:/{exit}' | awk '/##/ { print; getline; print; }' | awk '{ getline x; print x; }1' | awk '{ key=$$0; getline; print key "\t\t\t\t " $$0;}'
	@printf "\n"

dev:
	gridsome develop

deploy:
	gridsome build
