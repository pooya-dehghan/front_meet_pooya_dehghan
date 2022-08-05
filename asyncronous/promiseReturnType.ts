interface IConnection {
  server: string;
  port: number;
}

interface IError {
  code: number;
  message: string;
}

interface IDataRow {
  id: number;
  name: string;
  surename: string;
}

function complexPromise(
  connect: IConnection,
  accessKey: string
): Promise<IDataRow[]> {
  return new Promise<IDataRow[]>(
    (resolve: (value: IDataRow[]) => void, reject: (value: IError) => void) => {
      //code
    }
  );
}

complexPromise(
  {
    server: 'test server',
    port: 400,
  },
  'my access key'
)
  .then((value: IDataRow[]) => console.log('console.log' + value))
  .catch((err: IError) => console.log('err' + err));
