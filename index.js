var check = function () {
	if (
		document.getElementById("password").value ==
		document.getElementById("checkPassword").value
	) {
		document.getElementById("alertPassword").style.color = "#8CC63E";
		document.getElementById("alertPassword").innerHTML =
			'<span><i class="fas fa-check-circle"></i>Match !</span>';
	} else {
		document.getElementById("alertPassword").style.color = "#EE2B39";
		document.getElementById("alertPassword").innerHTML =
			'<span><i class="fas fa-exclamation-triangle"></i>not matching</span>';
	}
};
