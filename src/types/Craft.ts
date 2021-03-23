import Profit from '@/types/Profit';

type Craft = {
  id: number;

  name: string;

  dailyProfit?: number;

  invested?: number;

  profit?: Profit;

  quantityProduced?: number;
};

export default Craft;
