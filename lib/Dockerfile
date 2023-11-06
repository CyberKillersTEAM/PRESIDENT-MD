FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/yasiyaofc1/FORZEN-MD /root/yasiyaofc1
WORKDIR /root/yasiyaofc1
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
