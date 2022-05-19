import { Item } from "./item";

export interface Order {
  id:number;
  status:string;
  itemcount:number;
  items:Item[];
}
