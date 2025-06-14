# Dockerfile for React frontend services

# Use a Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code into the container
COPY . .

# Expose the port the React app will run on (usually 3000)
EXPOSE 3000

# Command to start the React application in development mode
CMD ["npm", "start"]
