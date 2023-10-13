# FROM node:18.18.1-slim AS builder
# RUN ["mkdir", "app"]
# COPY ./src ./app/src
# COPY ./public ./app/public
# COPY package.json ./app/package.json
# COPY package-lock.json ./app/package-lock.json
# WORKDIR /app
# RUN npm i
# RUN npm run build
FROM nginx
RUN ["rm" ,"-rf", "/usr/share/nginx/html/*"]
COPY ./default.conf /etc/nginx/conf.d/p.conf
# COPY --from=builder /app/build /usr/share/nginx/app
COPY build /usr/share/nginx/app
EXPOSE 3000



# ENTRYPOINT [ "nginx","-g","demon off;"]
#docker build -t front .
#docker stop
#docker rm
#docker run -p 80:80 --name front -d front
##########################################################
# FROM node:18.18.1-slim
# RUN ["mkdir","app"]
# COPY ./src ./app/src
# COPY ./public ./app/public
# COPY package.json ./app/package.json
# COPY package-lock.json ./app/package-lock.json
# WORKDIR ./app
# RUN ["npm","install"]
# ENTRYPOINT [ "npm","start" ]
#docker build -t front .
#docker stop
#docker rm
#docker run -p 80:80 --name front -d front

