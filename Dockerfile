# Stage 1: Build
FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src src
COPY config config

# Stage 2: Run
FROM node:14-alpine 
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src ./src
COPY --from=builder /app/config ./config
CMD npm start