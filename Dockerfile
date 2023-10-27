FROM node:16-alpine as builder

# create work directory in app folder
WORKDIR /app

# install required packages for node image
RUN apk --no-cache add openssh g++ make python3 git

# copy over package.json files
COPY package.json /app/
COPY package-lock.json /app/

# install all depencies
RUN yarn

# copy over all files to the work directory
ADD . /app

# build the project
RUN yarn build

# start final image
FROM node:16-alpine


WORKDIR /app

# copy over build files from builder step
COPY --from=builder /app  /app

# expose the host and port 3000 to the server
ENV HOST 0.0.0.0
EXPOSE 3000

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]