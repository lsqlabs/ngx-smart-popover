############################################################################
#
# This Dockerfile will create a docker image to run e2e tests using Protractor.
#
# Building (from inside all-angular):
#   $ docker build -t <project>-e2e -f docker/e2e/Dockerfile --build-arg project=<project> .
#
# Usage:
#   $ docker run --rm <project>-e2e
#
############################################################################

FROM node:10

ARG project=ngx-smart-popover
ENV PROJECT_NAME=${project}

RUN apt-get update --fix-missing && \
    apt-get install -qy \
        netcat-traditional \
        openjdk-8-jre \
        chromium \
    && \
    apt-get clean

# Add project files.
RUN mkdir /usr/src/app
COPY ./ /usr/src/app/
WORKDIR /usr/src/app
RUN npm install

ENTRYPOINT npm run e2e
