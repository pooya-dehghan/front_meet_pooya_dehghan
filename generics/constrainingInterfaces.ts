
interface IPrintId {
  id : number,
  print() : void
}

interface IPrintName {
  name : string,
  print() : void
}


function useT< T extends IPrintId | IPrintName> (item : T):void{
  item.print();
  //item.id;
  //item.name; 
}