export const localRead = () => {
	if (typeof window !== "undefined") {
		return JSON.parse(localStorage.getItem("read")) || [];
	}
	return [];
};

export const localFavorite = () => {
	if (typeof window !== "undefined") {
		return JSON.parse(localStorage.getItem("favorite")) || [];
	}
	return [];
};
