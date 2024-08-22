IMAGE_TAG=latest
PROJECT_NAME=project
ENV=local
BACKEND_URL=

build-fe:
	docker build \
		-t ${PROJECT_NAME}-fe:${IMAGE_TAG} \
		--build-arg BACKEND_URL=${BACKEND_URL} \
		frontend/

build-be:
	docker build \
		-t ${PROJECT_NAME}-be:${IMAGE_TAG} \
		backend/

build: build-fe build-be

up:
	docker-compose -f docker-compose.yml up -d

down:
	docker-compose -f docker-compose.yml down