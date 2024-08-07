import { atom } from "recoil";

export const $menuState = atom({
	key: "$menuState",
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
export const $theme = atom({
	key: "$theme",
	default: localStorage.getItem("theme") ?? "light",
});