FROM gitlab.godeltech.com:4567/javascript/compliance/k8s/docker-images/nginx:latest

ARG version_number
ENV VERSION=$version_number

COPY ./build /app
COPY ./deploy/nginx/40-entrypoint.sh /docker-entrypoint.d/
COPY ./deploy/nginx/template.js /nginx/config.js

RUN chmod +x /docker-entrypoint.d/40-entrypoint.sh