import { Database } from 'sqlite3';
import Logger from '@faasjs/logger';

class ProviderSqlite {
  public pool: Database;
  public logger: Logger;

  constructor (opts: {
    filename: string;
    [key: string]: any;
  }) {
    this.logger = new Logger('@faasjs/provider-sqlite');

    this.logger.debug('conncet: %o', opts);
    this.pool = new Database(opts.filename);
  }

  public query (sql: string, values?: any) {
    this.logger.debug('query begin: %s %o', sql, values);
    this.logger.time(sql);

    return new Promise((resolve, reject) => {
      this.pool.all(sql, values, (error, results) => {
        this.logger.timeEnd(sql, 'query end: %s %o', sql, results);
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }

  public execute (sql: string, values?: any) {
    this.logger.debug('execute begin: %s %o', sql, values);
    this.logger.time(sql);

    return new Promise((resolve, reject) => {
      this.pool.all(sql, values, (error, results) => {
        this.logger.timeEnd(sql, 'execute end: %s %o', sql, results);
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  }
}

export function handler (opts: {
  config: {
    filename: string;
    [key: string]: any;
  };
  [key: string]: any;
}) {
  return new ProviderSqlite(opts.config);
}
