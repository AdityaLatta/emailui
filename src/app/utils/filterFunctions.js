export const filterFavorites = (data, favorite) => {
	const newData = [];

	data?.list.map((data) => {
		if (favorite.includes(data.id)) {
			newData.unshift(data);
		} else {
			newData.push(data);
		}
	});
	return newData;
};

export const filterRead = (data, read) => {
	const newData = [];

	data?.list.map((data) => {
		if (read.includes(data.id)) {
			newData.unshift(data);
		} else {
			newData.push(data);
		}
	});
	return newData;
};

export const filterUnread = (data, read, favorite) => {
	const newData = [];

	data?.list.map((data) => {
		if (read.includes(data.id) || favorite.includes(data.id)) {
			newData.push(data);
		} else {
			newData.unshift(data);
		}
	});
	return newData;
};
