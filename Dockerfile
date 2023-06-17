FROM ubuntu:22.04

WORKDIR /app/

COPY package.json /app/

CMD [ "/bin/bash" ]

RUN apt-get update && \
    apt-get -y install curl tzdata default-jre-headless software-properties-common xvfb apt-transport-https ca-certificates

RUN TZ="Asia/Jakarta"

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get -y install nodejs

RUN cd /app/ && \
    npm install

ENV NODE_PATH=/app/node_modules

RUN cd /app/ && \
    apt-get -y install firefox

RUN cd /app/ && \
    curl -fSsL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | tee /usr/share/keyrings/microsoft-edge.gpg > /dev/null && \
    echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-edge.gpg] https://packages.microsoft.com/repos/edge stable main' | tee /etc/apt/sources.list.d/microsoft-edge.list && \
    apt-get update && \
    apt-get install -y microsoft-edge-stable

RUN cd /app/ && \
    curl -fSsL https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor | tee /usr/share/keyrings/google-chrome.gpg > /dev/null && \
    echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main' | tee /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable

ENV PATH=/app:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

RUN apt-get -y autoclean && \
    apt-get -y autoremove