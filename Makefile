SHELL := /bin/bash

DEFAULT_GOAL: help

.PHONY: \
	help \
	clean-dev \
	run-dev \


clean-dev:
	docker-compose \
		down \
		--remove-orphans \
		--volume

help:
	@echo "Please provide a valid target"

run-dev:
	docker-compose pull redis
	docker-compose up