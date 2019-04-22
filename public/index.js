$('#getToken').click(() => {
  let id = $('#email').val();
  let pw = $('#password').val();
  fetch(`http://localhost:5000/auth?id=${id}&pass=${encodeURIComponent(pw)}`)
    .then(e => e.json())
    .then(e => {
		var cookies = "";
		e.session_cookies.forEach(s => {
			cookies += s.name + "=" + s.value + ";";
		});
		$('#result').html(e.access_token + "<br/>Cookies: " + cookies);
    });
});
