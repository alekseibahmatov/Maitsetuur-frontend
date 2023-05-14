FROM node:16.13.2-alpine as builder
WORKDIR /app

#FROM nginx:1.19.0
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY --from=builder /app/build/ .
#COPY default.conf /etc/nginx/conf.d/default.conf
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
