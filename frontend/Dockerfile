# Stage 1: Build the React application
FROM node:alpine AS build

ARG BACKEND_URL

ENV VITE_BACKEND_URL=${BACKEND_URL}

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --no-save

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the React application using Caddy
FROM caddy:alpine

# Copy the build files from the previous stage
COPY --from=build /app/dist /usr/share/caddy

# Copy the Caddy configuration file
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80
EXPOSE 80

# Start Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
