tar cvf env.tar \
.env \
.env.develop \
.env.production
travis encrypt-file env.tar