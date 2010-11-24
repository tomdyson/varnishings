backend slow {
    .host = "127.0.0.1";
    .port = "8090";
}

backend quick {
  .host = "127.0.0.1";
  .port = "8089";
}

sub vcl_fetch {
	esi;
}

sub vcl_recv {
    unset req.http.Cookie;
	if (req.url ~ "^/quick") {
		set req.backend = quick;
		return(pass);
	}
}

