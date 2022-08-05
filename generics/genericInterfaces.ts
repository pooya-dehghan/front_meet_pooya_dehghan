//4
interface IPrint { 
  print(): void;
}

interface ILogInterface<T extends IPrint> {
  logToConsole(iPrintObj : T) : void;
}

class LogClass<T extends IPrint> implements ILogInterface<T> {
  logToConsole(iPrintObj: T): void {
    iPrintObj.print();
  }
}