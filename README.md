Varnish experiments
-------------------

Start a slow Python server (port 8090):

    python slow.py

Start a fast Node server (port 8089):

    node quick.js

Start Varnish in the foreground (port 8088):

    /usr/local/sbin/varnishd -a 0.0.0.0:8088 -f join.vcl -s malloc,50MB -F

Compare response times:

    ab -n 10 http://127.0.0.1:8090/
    ab -n 10 http://127.0.0.1:8088/

