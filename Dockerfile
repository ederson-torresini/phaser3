FROM node:lts

ARG BUILD_DATE
ARG VCS_REF
LABEL maintainer="boidacarapreta@gmail.com" \
  org.label-schema.build-date=$BUILD_DATE \
  org.label-schema.name="phaser3" \
  org.label-schema.description="Projeto Integrador: desenvolvimento de jogos Web com Phaser 3" \
  org.label-schema.license="mit" \
  org.label-schema.url="https://phaser3.sj.ifsc.edu.br" \
  org.label-schema.vcs-ref=$VCS_REF \
  org.label-schema.vcs-url="https://github.com/boidacarapreta/phaser3" \
  org.label-schema.vendor="IFSC" \
  org.label-schema.version="12.13" \
  org.label-schema.schema-version="1.0"

RUN git clone https://github.com/boidacarapreta/phaser3 /game && \
  cd /game && \
  npm install
COPY server.js /game

EXPOSE 3000
WORKDIR /game
CMD ["node", "server.js"]