export interface ISku {
	image: string;
	name: string;
	price: number;
	quantity: number;
}
export interface IProducts {
	yesterday: ISku[];
	last7Days: ISku[];
	last30Days: ISku[];
	lastMonth: ISku[];
	custom: ISku[];
}
