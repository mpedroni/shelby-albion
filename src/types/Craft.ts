import Profit from '@/types/Profit';

class Craft {
  id: string;

  name: string;

  dailyProfit?: number | null;

  invested?: number | null;

  profit?: Profit | null;

  quantityProduced?: number | null;

  constructor(
    id: string,
    name: string,
    dailyProfit: number,
    invested: number,
    profit: Profit,
    quantityProduced: number
  ) {
    this.id = id;
    this.name = name;
    this.invested = invested;
    this.dailyProfit = dailyProfit;
    this.profit = profit;
    this.quantityProduced = quantityProduced;
  }
}

export default Craft;
