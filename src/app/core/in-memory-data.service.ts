/**
 * Hero-oriented InMemoryDbService with method overrides.
 */
import { Injectable } from '@angular/core';

import { RequestInfo, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';

/** In-memory database data */
interface Db {
  [collectionName: string]: any[];
}

@Injectable()
export class InMemoryDataService {
  /** True if in-mem service is intercepting; all requests pass thru when false. */
  active = true;

  /** In-memory database data */
  db: Db = {};

  /** Create the in-memory database on start or by command */
  createDb(reqInfo?: RequestInfo) {
    this.db = getDbData();

    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        // tslint:disable-next-line:forin
        for (const coll in this.db) {
          this.db[coll].length = 0;
        }
      }

      this.active = !!body.active;
    }
    return this.db;
  }

  /**
   * Override `parseRequestUrl`
   * Manipulates the request URL or the parsed result.
   * If in-mem is inactive, clear collectionName so that service passes request thru.
   * If in-mem is active, after parsing with the default parser,
   * @param url from request URL
   * @param utils for manipulating parsed URL
   */
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const parsed = utils.parseRequestUrl(url);
    parsed.collectionName = this.active ? mapCollectionName(parsed.collectionName) : undefined;
    return parsed;
  }
}

/**
 * Remap a known singular collection name ("hero")
 * to the plural collection name ("heroes"); else return the name
 * @param name - collection name from the parsed URL
 */
function mapCollectionName(name: string): string {
  return (
    ({
      hero: 'heroes',
      villain: 'villains'
    } as any)[name] || name
  );
}

/**
 * Development data
 */
function getDbData() {
  const heroes: any[] = [
    {
      id: 11,
      name: 'Ragnar Lothbrok',
      description: 'aka Ragnar Sigurdsson'
    },
    {
      id: 12,
      name: 'Ivar the Boneless',
      description: 'commander of the Great Heathen Army'
    },
    {
      id: 13,
      name: 'Bjorn Ironside',
      description: 'king of 9th century Sweden'
    },
    {
      id: 14,
      name: 'Lagertha the Shieldmaiden',
      description: 'aka Hlaðgerðr'
    },
    {
      id: 15,
      name: 'Aslaug',
      description: 'warrior queen'
    },
    {
      id: 16,
      name: 'Thora Town-hart',
      description: 'daughter of Earl Herrauðr of Götaland'
    }
  ];

  const villains: any[] = [
    {
      id: 21,
      name: 'John',
      description: 'Slayer of JavaScript'
    },
    {
      id: 22,
      name: 'Simona',
      description: 'Wielder of the Service Worker'
    },
    {
      id: 23,
      name: 'Asim',
      description: 'The Hacker of Node'
    }
  ];

  return { heroes, villains } as Db;
}
