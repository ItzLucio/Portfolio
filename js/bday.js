function fetchDays(month, day) {
	const todayDate = new Date();
	const thisYear = todayDate.getFullYear();
	const bday = new Date(thisYear, month - 1, day);

	if (bday < todayDate) {
		bday.setFullYear(thisYear + 1);
	}

	const msForDay = 1000 * 60 * 60 * 24;
	const diffMs = bday - todayDate;
	const days = Math.ceil(diffMs / msForDay);

	return days;
}

window.addEventListener("DOMContentLoaded", () => {
	const text = document.getElementById("bday");
	const bdayIn = fetchDays(3, 25);

	text.textContent = bdayIn;
});
