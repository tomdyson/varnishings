Varnish experiments
-------------------

Start slow Python server

python slow.py

Start Varnish in the foreground on port 8088 with memory storage and test config.

/usr/local/sbin/varnishd -a 0.0.0.0:8088 -f slow.vcl -s malloc,50MB -F

Compare response times for slow app and cached version:

ab -n 10 http://127.0.0.1:8090/
ab -n 10 http://127.0.0.1:8088/

Run node on port 8089:

node quick.js