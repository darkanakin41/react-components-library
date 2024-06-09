FROM nginx:alpine as dev

RUN mkdir -p /srv/app

COPY ./.docker/nginx/vhost.conf /etc/nginx/conf.d/default.conf
COPY ./storybook-static /srv/app/public
