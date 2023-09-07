export const type = [
	{ label: "type 1", value: "type 1" },
	{ label: "type 2", value: "type 2" },
	{ label: "type 3", value: "type 3" },
	{ label: "type 4", value: "type 4" },
];

export const style = [
	{ label: "stye 1", value: "stye 1" },
	{ label: "stye 2", value: "stye 2" },
	{ label: "stye 3", value: "stye 3" },
	{ label: "stye 4", value: "stye 4" },
	{ label: "stye 5", value: "stye 5" },
];

export const province = [
	{
		label: "Nusa Tenggara Barat",
		value: "Nusa Tenggara Barat",
		city: [
			{ label: "Dompu", value: "Dompu" },
			{ label: "Sumbawa", value: "Sumbawa" },
			{ label: "Mataram", value: "Mataram" },
			{ label: "Bima", value: "Bima" },
			{ label: "Lombok Tengah", value: "Lombok Tengah" },
		],
	},
	{
		label: "Jawa Timur",
		value: "Jawa Timur",
		city: [
			{ label: "Surabaya", value: "Surabaya" },
			{ label: "Malang", value: "Malang" },
			{ label: "Blitar", value: "Blitar" },
			{ label: "Madiun", value: "Madiun" },
			{ label: "Keidri", value: "Keidri" },
		],
	},
	{
		label: "Jawa Barat",
		value: "Jawa Barat",
		city: [
			{ label: "Bandung", value: "Bandung" },
			{ label: "Banjar", value: "Banjar" },
			{ label: "Cimahi", value: "Cimahi" },
			{ label: "Sukabumi", value: "Sukabumi" },
			{ label: "Bogor", value: "Bogor" },
		],
	},
	{
		label: "Jawa Tengah",
		value: "Jawa Tengah",
		city: [
			{ label: "Semarang", value: "Semarang" },
			{ label: "Magelang", value: "Magelang" },
			{ label: "Jepara", value: "Jepara" },
			{ label: "Demak", value: "Demak" },
			{ label: "Cilacap", value: "Cilacap" },
		],
	},
	{
		label: "Nanggroe Aceh Darussalam",
		value: "Nanggroe Aceh Darussalam",
		city: [
			{ label: "Banda Aceh", value: "Banda Aceh" },
			{ label: "Sabang", value: "Sabang" },
			{ label: "Gampong", value: "Gampong" },
			{ label: "Sigli", value: "Sigli" },
			{ label: "Langsa", value: "Langsa" },
		],
	},
];

// export const region = {
// 	city: [
// 		{
// 			label: ["Surabaya", "Malang", "Lombok", "Mataram", "Jakarta"],
// 			value: ["Surabaya", "Malang", "Lombok", "Mataram", "Jakarta"],
// 		},
// 	],
// 	province: [
// 		{
// 			label: ["Jawa Timur", "Jawa Barat", "NTB", "DKI Jakarta"],
// 			value: ["Jawa Timur", "Jawa Barat", "NTB", "DKI Jakarta"],
// 		},
// 	],
// };

export const region = {
	city:{name:"Jakarta", provnsi:1, id:1},
	province: {name:"DKI Jakarta", id:1},
};
