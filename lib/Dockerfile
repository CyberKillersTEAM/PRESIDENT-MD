FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/MrIsuru/PRESIDENT-MD /root/MrIsuru
WORKDIR /root/MrIsuru
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
