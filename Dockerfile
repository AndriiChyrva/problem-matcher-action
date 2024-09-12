FROM node:latest

# 1. Set the working directory inside the container
WORKDIR /usr/src
RUN ls -la

# 2. Copy source file(s) required for the action
COPY entrypoint.sh .
COPY /action       ./action

# 3. Change permissions to source file(s)
RUN chmod +rwx entrypoint.sh
RUN chmod +rwx ./action
RUN chmod +rwx ./action/dist/index.js

# 4. Configure the container to be run as an executable
ENTRYPOINT ["/usr/src/entrypoint.sh"]