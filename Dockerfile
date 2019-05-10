FROM node:alpine

# RUN apk --no-cache add \
#   nodejs \
#   python \
#   make \
#   g++

RUN npm i -gy yarn
RUN yarn global add aglio
RUN yarn global add hercule
RUN yarn global add dredd

RUN yarn global add create-react-app

WORKDIR /usr/app