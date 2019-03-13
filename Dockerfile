############################################################################
#
# This Dockerfile will create a docker image to run e2e tests using Protractor.
#
# Usage:
#   $ docker run --rm <project>-e2e-tests
#
############################################################################

FROM caltha/protractor

# Uncomment below if you are building the docker image locally.
# COPY ./LSQfw01CA.crt /usr/local/share/ca-certificates/LSQfw01.crt
# COPY ./LSQRootCA.crt /usr/local/share/ca-certificates/LSQRootCA.crt
RUN update-ca-certificates
RUN apt-get update -y && \
    apt-get install -qy \
        zip \
        chromium

# Replace the run-protractor script that is called by the `caltha/protractor` image with one that changes the baseUrl.
COPY run-protractor-docker /usr/local/bin/run-protractor
COPY supervisor-protractor.conf /etc/supervisor/conf.d/protractor.conf

# Add project files.
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN rm -rf /usr/src/app/node_modules \
    rm -rf /usr/src/app/projects/ngx-smart-popover/node_modules

# Make things writeable/executable.
RUN chmod -R a+w /usr/src/app/ && \
    chmod 777 /usr/local/bin/run-protractor

# Executing supervisord in the foreground
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]
