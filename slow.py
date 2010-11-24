from bottle import route, run
import time

@route('/')
def index():
    time.sleep(0.1)
    resp = '<html><body>'
    resp += '<link rel="icon" href="http://26.media.tumblr.com/avatar_d38b764a6830_16.png"/>'
    resp += 'The time from slow CMS is %s:%s:%s.<br />' % time.localtime()[3:6]
    resp += '<strong><esi:include src="/quick"/></strong>'
    resp += '</body></html>'
    return resp

run(host='localhost', port=8090)
