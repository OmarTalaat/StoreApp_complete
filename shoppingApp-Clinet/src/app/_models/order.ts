import { Item } from "./item";

export interface Order {
  id:number;
  status:string;
  itemcount:number;
  total:number;
  adress:string;
  items:Item[];
}
