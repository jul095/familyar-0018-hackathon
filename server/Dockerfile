# FROM node:10.15-alpine
FROM ubuntu:18.04

#
# NODEJS
#
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get update -qqy && apt-get -qqy install -y nodejs wget gnupg curl && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/*


#
# YARN
#
RUN wget -q -O - https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
    apt-get update -qqy && apt-get -qqy install yarn && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/*


#
# DOCKER ENTRYPOINT
#
#COPY docker-entrypoint.sh /work-private/docker-entrypoint.sh
#RUN chmod u+rx,g+rx,o+rx,a-w /work-private/docker-entrypoint.sh
WORKDIR /family


# Add package.json and install => avoid yarn install on code change => speed up retests
COPY ./dist/package.json /family/package.json
RUN yarn install

# Add server
COPY ./dist /family

# Switch to user space
#RUN chown -R worker /family

#USER worker

#ENTRYPOINT ["/work-private/docker-entrypoint.sh"]
CMD ["node", "index.js"]