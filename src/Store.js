import { atom } from "recoil";

export const $menuState = atom({
	key: "$menuState",
	default: false,
});
export const $dashboardMenuState = atom({
	key: "$dashboardMenuState",
	default: false,
});

export const $login = atom({
	key: "$login",
	default: false,
});

export const $lang = atom({
	key: "$lang",
	default: 'en',
});

export const $editFormState = atom({
	key: "$editFormState",
	default: false,
});
export const $addFormState = atom({
	key: "$addFormState",
	default: false,
});
export const $modal = atom({
	key: "$modal",
	default: false,
});
export const $theme = atom({
	key: "$theme",
	default: localStorage.getItem("theme") ?? "light",
});
export const $loggedIn = atom({
	key: "$loggedIn",
	default: JSON.parse(localStorage.getItem('AuthUser')),
});
export const $loggedInModal = atom({
	key: "$loggedInModal",
	default: false,
});
export const $admin = atom({
	key: "$admin",
	default: {
		user: null
	},
});

export const $bookedTourInfo = atom({
	key: "$bookedTourInfo",
	default: {
		tourImage: null,
		tourTitle: null,
		tourPrice: null,
		clientName: null,
		clientEmail: null,
		bookedDate: null,
	}
});
export const $tours = atom({
	key: "$tours",
	default: [],
});