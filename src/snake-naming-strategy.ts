import {
  NamingStrategyInterface,
  DefaultNamingStrategy,
} from 'typeorm';
// import { snakeCase } from 'typeorm/util/StringUtils';
import * as snakeCase from 'to-snake-case';

export class SnakeNamingStrategy extends DefaultNamingStrategy
  implements NamingStrategyInterface {
  tableName(className: string, customName: string): string {
    return customName ? customName : snakeCase(className);
  }

  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[],
  ): string {
    // todo: simplify
    if (embeddedPrefixes.length)
      return (
        snakeCase(embeddedPrefixes.join('_')) +
        (customName ? customName : snakeCase(propertyName))
      );
    console.log(snakeCase(propertyName))
    return customName ? customName : snakeCase(propertyName);
  }

  columnNameCustomized(customName: string): string {
    return customName;
  }

  relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }

  joinColumnInverseSideName(
    joinColumnName: string,
    propertyName: string,
  ): string {
    return joinColumnName || this.relationName(propertyName);
  }
}
