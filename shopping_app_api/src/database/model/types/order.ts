import Item from "./item";



type Order =  {
   orderid: number;
   status: string;
   adress?: string;
   userId: number;
   items:Item[];
}


export default Order;

