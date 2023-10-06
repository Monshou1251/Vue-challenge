# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all local files into the container
COPY . .

# Build for production
RUN npm run build

# Expose the port that the app runs on
EXPOSE 8080

# Define the command to run your app
CMD [ "npm", "run", "serve" ]
