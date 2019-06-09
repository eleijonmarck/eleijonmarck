SHELL := /bin/bash

DEFAULT_GOAL: \
	help \
	dev

.PHONY: \
	dev

dev:
	gridsome develop
