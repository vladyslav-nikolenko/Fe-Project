#!/bin/sh
set -xe

envsubst  < /nginx/config.js | sed ':a;N;$!ba;s/\n/ /g' > config.js

echo "Setting up environment scripts started"
ENV="<script>$(cat config.js | sed ':a;N;$!ba;s/\n/ /g')</script>"
find ${NGINX_APP_PATH} -type f -name "index.html" -exec sed -i "s@</head>@${ENV}&@" {} +
echo "Done"