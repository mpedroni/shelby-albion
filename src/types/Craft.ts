import Item from '@/types/Item';
import Profit from '@/types/Profit';

type Craft = {
  id: number;

  item: Item;

  name: string;

  dailyProfit?: number;

  invested?: number;

  profit?: Profit;

  quantityProduced?: number;
};

export default Craft;
