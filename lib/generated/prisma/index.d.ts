
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Promo
 * 
 */
export type Promo = $Result.DefaultSelection<Prisma.$PromoPayload>
/**
 * Model Entry
 * 
 */
export type Entry = $Result.DefaultSelection<Prisma.$EntryPayload>
/**
 * Model Draw
 * 
 */
export type Draw = $Result.DefaultSelection<Prisma.$DrawPayload>
/**
 * Model Winner
 * 
 */
export type Winner = $Result.DefaultSelection<Prisma.$WinnerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Promos
 * const promos = await prisma.promo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Promos
   * const promos = await prisma.promo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.promo`: Exposes CRUD operations for the **Promo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promos
    * const promos = await prisma.promo.findMany()
    * ```
    */
  get promo(): Prisma.PromoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entry`: Exposes CRUD operations for the **Entry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entries
    * const entries = await prisma.entry.findMany()
    * ```
    */
  get entry(): Prisma.EntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.draw`: Exposes CRUD operations for the **Draw** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Draws
    * const draws = await prisma.draw.findMany()
    * ```
    */
  get draw(): Prisma.DrawDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.winner`: Exposes CRUD operations for the **Winner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Winners
    * const winners = await prisma.winner.findMany()
    * ```
    */
  get winner(): Prisma.WinnerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Promo: 'Promo',
    Entry: 'Entry',
    Draw: 'Draw',
    Winner: 'Winner'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "promo" | "entry" | "draw" | "winner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Promo: {
        payload: Prisma.$PromoPayload<ExtArgs>
        fields: Prisma.PromoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          findFirst: {
            args: Prisma.PromoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          findMany: {
            args: Prisma.PromoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>[]
          }
          create: {
            args: Prisma.PromoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          createMany: {
            args: Prisma.PromoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>[]
          }
          delete: {
            args: Prisma.PromoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          update: {
            args: Prisma.PromoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          deleteMany: {
            args: Prisma.PromoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>[]
          }
          upsert: {
            args: Prisma.PromoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoPayload>
          }
          aggregate: {
            args: Prisma.PromoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromo>
          }
          groupBy: {
            args: Prisma.PromoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromoCountArgs<ExtArgs>
            result: $Utils.Optional<PromoCountAggregateOutputType> | number
          }
        }
      }
      Entry: {
        payload: Prisma.$EntryPayload<ExtArgs>
        fields: Prisma.EntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findFirst: {
            args: Prisma.EntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          findMany: {
            args: Prisma.EntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          create: {
            args: Prisma.EntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          createMany: {
            args: Prisma.EntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          delete: {
            args: Prisma.EntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          update: {
            args: Prisma.EntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          deleteMany: {
            args: Prisma.EntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>[]
          }
          upsert: {
            args: Prisma.EntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntryPayload>
          }
          aggregate: {
            args: Prisma.EntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntry>
          }
          groupBy: {
            args: Prisma.EntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntryCountArgs<ExtArgs>
            result: $Utils.Optional<EntryCountAggregateOutputType> | number
          }
        }
      }
      Draw: {
        payload: Prisma.$DrawPayload<ExtArgs>
        fields: Prisma.DrawFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrawFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrawFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          findFirst: {
            args: Prisma.DrawFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrawFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          findMany: {
            args: Prisma.DrawFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>[]
          }
          create: {
            args: Prisma.DrawCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          createMany: {
            args: Prisma.DrawCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrawCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>[]
          }
          delete: {
            args: Prisma.DrawDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          update: {
            args: Prisma.DrawUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          deleteMany: {
            args: Prisma.DrawDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrawUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrawUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>[]
          }
          upsert: {
            args: Prisma.DrawUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrawPayload>
          }
          aggregate: {
            args: Prisma.DrawAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDraw>
          }
          groupBy: {
            args: Prisma.DrawGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrawGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrawCountArgs<ExtArgs>
            result: $Utils.Optional<DrawCountAggregateOutputType> | number
          }
        }
      }
      Winner: {
        payload: Prisma.$WinnerPayload<ExtArgs>
        fields: Prisma.WinnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WinnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WinnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          findFirst: {
            args: Prisma.WinnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WinnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          findMany: {
            args: Prisma.WinnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          create: {
            args: Prisma.WinnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          createMany: {
            args: Prisma.WinnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WinnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          delete: {
            args: Prisma.WinnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          update: {
            args: Prisma.WinnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          deleteMany: {
            args: Prisma.WinnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WinnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WinnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          upsert: {
            args: Prisma.WinnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          aggregate: {
            args: Prisma.WinnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWinner>
          }
          groupBy: {
            args: Prisma.WinnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WinnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WinnerCountArgs<ExtArgs>
            result: $Utils.Optional<WinnerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    promo?: PromoOmit
    entry?: EntryOmit
    draw?: DrawOmit
    winner?: WinnerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PromoCountOutputType
   */

  export type PromoCountOutputType = {
    entries: number
    draws: number
  }

  export type PromoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | PromoCountOutputTypeCountEntriesArgs
    draws?: boolean | PromoCountOutputTypeCountDrawsArgs
  }

  // Custom InputTypes
  /**
   * PromoCountOutputType without action
   */
  export type PromoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCountOutputType
     */
    select?: PromoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromoCountOutputType without action
   */
  export type PromoCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
  }

  /**
   * PromoCountOutputType without action
   */
  export type PromoCountOutputTypeCountDrawsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawWhereInput
  }


  /**
   * Count Type EntryCountOutputType
   */

  export type EntryCountOutputType = {
    winners: number
  }

  export type EntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winners?: boolean | EntryCountOutputTypeCountWinnersArgs
  }

  // Custom InputTypes
  /**
   * EntryCountOutputType without action
   */
  export type EntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntryCountOutputType
     */
    select?: EntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntryCountOutputType without action
   */
  export type EntryCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
  }


  /**
   * Count Type DrawCountOutputType
   */

  export type DrawCountOutputType = {
    winners: number
  }

  export type DrawCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winners?: boolean | DrawCountOutputTypeCountWinnersArgs
  }

  // Custom InputTypes
  /**
   * DrawCountOutputType without action
   */
  export type DrawCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrawCountOutputType
     */
    select?: DrawCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrawCountOutputType without action
   */
  export type DrawCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Promo
   */

  export type AggregatePromo = {
    _count: PromoCountAggregateOutputType | null
    _min: PromoMinAggregateOutputType | null
    _max: PromoMaxAggregateOutputType | null
  }

  export type PromoMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromoCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromoMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromoMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromoCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promo to aggregate.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promos
    **/
    _count?: true | PromoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromoMaxAggregateInputType
  }

  export type GetPromoAggregateType<T extends PromoAggregateArgs> = {
        [P in keyof T & keyof AggregatePromo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromo[P]>
      : GetScalarType<T[P], AggregatePromo[P]>
  }




  export type PromoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromoWhereInput
    orderBy?: PromoOrderByWithAggregationInput | PromoOrderByWithAggregationInput[]
    by: PromoScalarFieldEnum[] | PromoScalarFieldEnum
    having?: PromoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromoCountAggregateInputType | true
    _min?: PromoMinAggregateInputType
    _max?: PromoMaxAggregateInputType
  }

  export type PromoGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PromoCountAggregateOutputType | null
    _min: PromoMinAggregateOutputType | null
    _max: PromoMaxAggregateOutputType | null
  }

  type GetPromoGroupByPayload<T extends PromoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromoGroupByOutputType[P]>
            : GetScalarType<T[P], PromoGroupByOutputType[P]>
        }
      >
    >


  export type PromoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entries?: boolean | Promo$entriesArgs<ExtArgs>
    draws?: boolean | Promo$drawsArgs<ExtArgs>
    _count?: boolean | PromoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promo"]>

  export type PromoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promo"]>

  export type PromoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promo"]>

  export type PromoSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["promo"]>
  export type PromoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | Promo$entriesArgs<ExtArgs>
    draws?: boolean | Promo$drawsArgs<ExtArgs>
    _count?: boolean | PromoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promo"
    objects: {
      entries: Prisma.$EntryPayload<ExtArgs>[]
      draws: Prisma.$DrawPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promo"]>
    composites: {}
  }

  type PromoGetPayload<S extends boolean | null | undefined | PromoDefaultArgs> = $Result.GetResult<Prisma.$PromoPayload, S>

  type PromoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromoCountAggregateInputType | true
    }

  export interface PromoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promo'], meta: { name: 'Promo' } }
    /**
     * Find zero or one Promo that matches the filter.
     * @param {PromoFindUniqueArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromoFindUniqueArgs>(args: SelectSubset<T, PromoFindUniqueArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromoFindUniqueOrThrowArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromoFindUniqueOrThrowArgs>(args: SelectSubset<T, PromoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindFirstArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromoFindFirstArgs>(args?: SelectSubset<T, PromoFindFirstArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindFirstOrThrowArgs} args - Arguments to find a Promo
     * @example
     * // Get one Promo
     * const promo = await prisma.promo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromoFindFirstOrThrowArgs>(args?: SelectSubset<T, PromoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promos
     * const promos = await prisma.promo.findMany()
     * 
     * // Get first 10 Promos
     * const promos = await prisma.promo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promoWithIdOnly = await prisma.promo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromoFindManyArgs>(args?: SelectSubset<T, PromoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promo.
     * @param {PromoCreateArgs} args - Arguments to create a Promo.
     * @example
     * // Create one Promo
     * const Promo = await prisma.promo.create({
     *   data: {
     *     // ... data to create a Promo
     *   }
     * })
     * 
     */
    create<T extends PromoCreateArgs>(args: SelectSubset<T, PromoCreateArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promos.
     * @param {PromoCreateManyArgs} args - Arguments to create many Promos.
     * @example
     * // Create many Promos
     * const promo = await prisma.promo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromoCreateManyArgs>(args?: SelectSubset<T, PromoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promos and returns the data saved in the database.
     * @param {PromoCreateManyAndReturnArgs} args - Arguments to create many Promos.
     * @example
     * // Create many Promos
     * const promo = await prisma.promo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promos and only return the `id`
     * const promoWithIdOnly = await prisma.promo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromoCreateManyAndReturnArgs>(args?: SelectSubset<T, PromoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promo.
     * @param {PromoDeleteArgs} args - Arguments to delete one Promo.
     * @example
     * // Delete one Promo
     * const Promo = await prisma.promo.delete({
     *   where: {
     *     // ... filter to delete one Promo
     *   }
     * })
     * 
     */
    delete<T extends PromoDeleteArgs>(args: SelectSubset<T, PromoDeleteArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promo.
     * @param {PromoUpdateArgs} args - Arguments to update one Promo.
     * @example
     * // Update one Promo
     * const promo = await prisma.promo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromoUpdateArgs>(args: SelectSubset<T, PromoUpdateArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promos.
     * @param {PromoDeleteManyArgs} args - Arguments to filter Promos to delete.
     * @example
     * // Delete a few Promos
     * const { count } = await prisma.promo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromoDeleteManyArgs>(args?: SelectSubset<T, PromoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promos
     * const promo = await prisma.promo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromoUpdateManyArgs>(args: SelectSubset<T, PromoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promos and returns the data updated in the database.
     * @param {PromoUpdateManyAndReturnArgs} args - Arguments to update many Promos.
     * @example
     * // Update many Promos
     * const promo = await prisma.promo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promos and only return the `id`
     * const promoWithIdOnly = await prisma.promo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromoUpdateManyAndReturnArgs>(args: SelectSubset<T, PromoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promo.
     * @param {PromoUpsertArgs} args - Arguments to update or create a Promo.
     * @example
     * // Update or create a Promo
     * const promo = await prisma.promo.upsert({
     *   create: {
     *     // ... data to create a Promo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promo we want to update
     *   }
     * })
     */
    upsert<T extends PromoUpsertArgs>(args: SelectSubset<T, PromoUpsertArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCountArgs} args - Arguments to filter Promos to count.
     * @example
     * // Count the number of Promos
     * const count = await prisma.promo.count({
     *   where: {
     *     // ... the filter for the Promos we want to count
     *   }
     * })
    **/
    count<T extends PromoCountArgs>(
      args?: Subset<T, PromoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromoAggregateArgs>(args: Subset<T, PromoAggregateArgs>): Prisma.PrismaPromise<GetPromoAggregateType<T>>

    /**
     * Group by Promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromoGroupByArgs['orderBy'] }
        : { orderBy?: PromoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promo model
   */
  readonly fields: PromoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends Promo$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Promo$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    draws<T extends Promo$drawsArgs<ExtArgs> = {}>(args?: Subset<T, Promo$drawsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promo model
   */
  interface PromoFieldRefs {
    readonly id: FieldRef<"Promo", 'String'>
    readonly name: FieldRef<"Promo", 'String'>
    readonly createdAt: FieldRef<"Promo", 'DateTime'>
    readonly updatedAt: FieldRef<"Promo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promo findUnique
   */
  export type PromoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo findUniqueOrThrow
   */
  export type PromoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo findFirst
   */
  export type PromoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promos.
     */
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo findFirstOrThrow
   */
  export type PromoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promo to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promos.
     */
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo findMany
   */
  export type PromoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter, which Promos to fetch.
     */
    where?: PromoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promos to fetch.
     */
    orderBy?: PromoOrderByWithRelationInput | PromoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promos.
     */
    cursor?: PromoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promos.
     */
    skip?: number
    distinct?: PromoScalarFieldEnum | PromoScalarFieldEnum[]
  }

  /**
   * Promo create
   */
  export type PromoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The data needed to create a Promo.
     */
    data: XOR<PromoCreateInput, PromoUncheckedCreateInput>
  }

  /**
   * Promo createMany
   */
  export type PromoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promos.
     */
    data: PromoCreateManyInput | PromoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promo createManyAndReturn
   */
  export type PromoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * The data used to create many Promos.
     */
    data: PromoCreateManyInput | PromoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promo update
   */
  export type PromoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The data needed to update a Promo.
     */
    data: XOR<PromoUpdateInput, PromoUncheckedUpdateInput>
    /**
     * Choose, which Promo to update.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo updateMany
   */
  export type PromoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promos.
     */
    data: XOR<PromoUpdateManyMutationInput, PromoUncheckedUpdateManyInput>
    /**
     * Filter which Promos to update
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to update.
     */
    limit?: number
  }

  /**
   * Promo updateManyAndReturn
   */
  export type PromoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * The data used to update Promos.
     */
    data: XOR<PromoUpdateManyMutationInput, PromoUncheckedUpdateManyInput>
    /**
     * Filter which Promos to update
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to update.
     */
    limit?: number
  }

  /**
   * Promo upsert
   */
  export type PromoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * The filter to search for the Promo to update in case it exists.
     */
    where: PromoWhereUniqueInput
    /**
     * In case the Promo found by the `where` argument doesn't exist, create a new Promo with this data.
     */
    create: XOR<PromoCreateInput, PromoUncheckedCreateInput>
    /**
     * In case the Promo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromoUpdateInput, PromoUncheckedUpdateInput>
  }

  /**
   * Promo delete
   */
  export type PromoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
    /**
     * Filter which Promo to delete.
     */
    where: PromoWhereUniqueInput
  }

  /**
   * Promo deleteMany
   */
  export type PromoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promos to delete
     */
    where?: PromoWhereInput
    /**
     * Limit how many Promos to delete.
     */
    limit?: number
  }

  /**
   * Promo.entries
   */
  export type Promo$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    cursor?: EntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Promo.draws
   */
  export type Promo$drawsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    where?: DrawWhereInput
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    cursor?: DrawWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Promo without action
   */
  export type PromoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promo
     */
    select?: PromoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promo
     */
    omit?: PromoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromoInclude<ExtArgs> | null
  }


  /**
   * Model Entry
   */

  export type AggregateEntry = {
    _count: EntryCountAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  export type EntryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    promoId: string | null
  }

  export type EntryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    promoId: string | null
  }

  export type EntryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    promoId: number
    _all: number
  }


  export type EntryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    promoId?: true
  }

  export type EntryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    promoId?: true
  }

  export type EntryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    promoId?: true
    _all?: true
  }

  export type EntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entry to aggregate.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entries
    **/
    _count?: true | EntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntryMaxAggregateInputType
  }

  export type GetEntryAggregateType<T extends EntryAggregateArgs> = {
        [P in keyof T & keyof AggregateEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntry[P]>
      : GetScalarType<T[P], AggregateEntry[P]>
  }




  export type EntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntryWhereInput
    orderBy?: EntryOrderByWithAggregationInput | EntryOrderByWithAggregationInput[]
    by: EntryScalarFieldEnum[] | EntryScalarFieldEnum
    having?: EntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntryCountAggregateInputType | true
    _min?: EntryMinAggregateInputType
    _max?: EntryMaxAggregateInputType
  }

  export type EntryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    promoId: string
    _count: EntryCountAggregateOutputType | null
    _min: EntryMinAggregateOutputType | null
    _max: EntryMaxAggregateOutputType | null
  }

  type GetEntryGroupByPayload<T extends EntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntryGroupByOutputType[P]>
            : GetScalarType<T[P], EntryGroupByOutputType[P]>
        }
      >
    >


  export type EntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    promoId?: boolean
    promo?: boolean | PromoDefaultArgs<ExtArgs>
    winners?: boolean | Entry$winnersArgs<ExtArgs>
    _count?: boolean | EntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    promoId?: boolean
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    promoId?: boolean
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entry"]>

  export type EntrySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    promoId?: boolean
  }

  export type EntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "promoId", ExtArgs["result"]["entry"]>
  export type EntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promo?: boolean | PromoDefaultArgs<ExtArgs>
    winners?: boolean | Entry$winnersArgs<ExtArgs>
    _count?: boolean | EntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }
  export type EntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }

  export type $EntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entry"
    objects: {
      promo: Prisma.$PromoPayload<ExtArgs>
      winners: Prisma.$WinnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      promoId: string
    }, ExtArgs["result"]["entry"]>
    composites: {}
  }

  type EntryGetPayload<S extends boolean | null | undefined | EntryDefaultArgs> = $Result.GetResult<Prisma.$EntryPayload, S>

  type EntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntryCountAggregateInputType | true
    }

  export interface EntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entry'], meta: { name: 'Entry' } }
    /**
     * Find zero or one Entry that matches the filter.
     * @param {EntryFindUniqueArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntryFindUniqueArgs>(args: SelectSubset<T, EntryFindUniqueArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntryFindUniqueOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntryFindUniqueOrThrowArgs>(args: SelectSubset<T, EntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntryFindFirstArgs>(args?: SelectSubset<T, EntryFindFirstArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindFirstOrThrowArgs} args - Arguments to find a Entry
     * @example
     * // Get one Entry
     * const entry = await prisma.entry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntryFindFirstOrThrowArgs>(args?: SelectSubset<T, EntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entries
     * const entries = await prisma.entry.findMany()
     * 
     * // Get first 10 Entries
     * const entries = await prisma.entry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entryWithIdOnly = await prisma.entry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntryFindManyArgs>(args?: SelectSubset<T, EntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entry.
     * @param {EntryCreateArgs} args - Arguments to create a Entry.
     * @example
     * // Create one Entry
     * const Entry = await prisma.entry.create({
     *   data: {
     *     // ... data to create a Entry
     *   }
     * })
     * 
     */
    create<T extends EntryCreateArgs>(args: SelectSubset<T, EntryCreateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entries.
     * @param {EntryCreateManyArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntryCreateManyArgs>(args?: SelectSubset<T, EntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entries and returns the data saved in the database.
     * @param {EntryCreateManyAndReturnArgs} args - Arguments to create many Entries.
     * @example
     * // Create many Entries
     * const entry = await prisma.entry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntryCreateManyAndReturnArgs>(args?: SelectSubset<T, EntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entry.
     * @param {EntryDeleteArgs} args - Arguments to delete one Entry.
     * @example
     * // Delete one Entry
     * const Entry = await prisma.entry.delete({
     *   where: {
     *     // ... filter to delete one Entry
     *   }
     * })
     * 
     */
    delete<T extends EntryDeleteArgs>(args: SelectSubset<T, EntryDeleteArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entry.
     * @param {EntryUpdateArgs} args - Arguments to update one Entry.
     * @example
     * // Update one Entry
     * const entry = await prisma.entry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntryUpdateArgs>(args: SelectSubset<T, EntryUpdateArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entries.
     * @param {EntryDeleteManyArgs} args - Arguments to filter Entries to delete.
     * @example
     * // Delete a few Entries
     * const { count } = await prisma.entry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntryDeleteManyArgs>(args?: SelectSubset<T, EntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntryUpdateManyArgs>(args: SelectSubset<T, EntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entries and returns the data updated in the database.
     * @param {EntryUpdateManyAndReturnArgs} args - Arguments to update many Entries.
     * @example
     * // Update many Entries
     * const entry = await prisma.entry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entries and only return the `id`
     * const entryWithIdOnly = await prisma.entry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntryUpdateManyAndReturnArgs>(args: SelectSubset<T, EntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entry.
     * @param {EntryUpsertArgs} args - Arguments to update or create a Entry.
     * @example
     * // Update or create a Entry
     * const entry = await prisma.entry.upsert({
     *   create: {
     *     // ... data to create a Entry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entry we want to update
     *   }
     * })
     */
    upsert<T extends EntryUpsertArgs>(args: SelectSubset<T, EntryUpsertArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryCountArgs} args - Arguments to filter Entries to count.
     * @example
     * // Count the number of Entries
     * const count = await prisma.entry.count({
     *   where: {
     *     // ... the filter for the Entries we want to count
     *   }
     * })
    **/
    count<T extends EntryCountArgs>(
      args?: Subset<T, EntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntryAggregateArgs>(args: Subset<T, EntryAggregateArgs>): Prisma.PrismaPromise<GetEntryAggregateType<T>>

    /**
     * Group by Entry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntryGroupByArgs['orderBy'] }
        : { orderBy?: EntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entry model
   */
  readonly fields: EntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promo<T extends PromoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromoDefaultArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winners<T extends Entry$winnersArgs<ExtArgs> = {}>(args?: Subset<T, Entry$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entry model
   */
  interface EntryFieldRefs {
    readonly id: FieldRef<"Entry", 'String'>
    readonly name: FieldRef<"Entry", 'String'>
    readonly createdAt: FieldRef<"Entry", 'DateTime'>
    readonly promoId: FieldRef<"Entry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Entry findUnique
   */
  export type EntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findUniqueOrThrow
   */
  export type EntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry findFirst
   */
  export type EntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findFirstOrThrow
   */
  export type EntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entry to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entries.
     */
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry findMany
   */
  export type EntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter, which Entries to fetch.
     */
    where?: EntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entries to fetch.
     */
    orderBy?: EntryOrderByWithRelationInput | EntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entries.
     */
    cursor?: EntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entries.
     */
    skip?: number
    distinct?: EntryScalarFieldEnum | EntryScalarFieldEnum[]
  }

  /**
   * Entry create
   */
  export type EntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The data needed to create a Entry.
     */
    data: XOR<EntryCreateInput, EntryUncheckedCreateInput>
  }

  /**
   * Entry createMany
   */
  export type EntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entry createManyAndReturn
   */
  export type EntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to create many Entries.
     */
    data: EntryCreateManyInput | EntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entry update
   */
  export type EntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The data needed to update a Entry.
     */
    data: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
    /**
     * Choose, which Entry to update.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry updateMany
   */
  export type EntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
  }

  /**
   * Entry updateManyAndReturn
   */
  export type EntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * The data used to update Entries.
     */
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyInput>
    /**
     * Filter which Entries to update
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entry upsert
   */
  export type EntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * The filter to search for the Entry to update in case it exists.
     */
    where: EntryWhereUniqueInput
    /**
     * In case the Entry found by the `where` argument doesn't exist, create a new Entry with this data.
     */
    create: XOR<EntryCreateInput, EntryUncheckedCreateInput>
    /**
     * In case the Entry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntryUpdateInput, EntryUncheckedUpdateInput>
  }

  /**
   * Entry delete
   */
  export type EntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
    /**
     * Filter which Entry to delete.
     */
    where: EntryWhereUniqueInput
  }

  /**
   * Entry deleteMany
   */
  export type EntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entries to delete
     */
    where?: EntryWhereInput
    /**
     * Limit how many Entries to delete.
     */
    limit?: number
  }

  /**
   * Entry.winners
   */
  export type Entry$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    cursor?: WinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Entry without action
   */
  export type EntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entry
     */
    select?: EntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entry
     */
    omit?: EntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntryInclude<ExtArgs> | null
  }


  /**
   * Model Draw
   */

  export type AggregateDraw = {
    _count: DrawCountAggregateOutputType | null
    _avg: DrawAvgAggregateOutputType | null
    _sum: DrawSumAggregateOutputType | null
    _min: DrawMinAggregateOutputType | null
    _max: DrawMaxAggregateOutputType | null
  }

  export type DrawAvgAggregateOutputType = {
    numRounds: number | null
    shuffleCount: number | null
  }

  export type DrawSumAggregateOutputType = {
    numRounds: number | null
    shuffleCount: number | null
  }

  export type DrawMinAggregateOutputType = {
    id: string | null
    promoId: string | null
    numRounds: number | null
    shuffleCount: number | null
    usingQuantum: boolean | null
    createdAt: Date | null
  }

  export type DrawMaxAggregateOutputType = {
    id: string | null
    promoId: string | null
    numRounds: number | null
    shuffleCount: number | null
    usingQuantum: boolean | null
    createdAt: Date | null
  }

  export type DrawCountAggregateOutputType = {
    id: number
    promoId: number
    numRounds: number
    shuffleCount: number
    usingQuantum: number
    createdAt: number
    _all: number
  }


  export type DrawAvgAggregateInputType = {
    numRounds?: true
    shuffleCount?: true
  }

  export type DrawSumAggregateInputType = {
    numRounds?: true
    shuffleCount?: true
  }

  export type DrawMinAggregateInputType = {
    id?: true
    promoId?: true
    numRounds?: true
    shuffleCount?: true
    usingQuantum?: true
    createdAt?: true
  }

  export type DrawMaxAggregateInputType = {
    id?: true
    promoId?: true
    numRounds?: true
    shuffleCount?: true
    usingQuantum?: true
    createdAt?: true
  }

  export type DrawCountAggregateInputType = {
    id?: true
    promoId?: true
    numRounds?: true
    shuffleCount?: true
    usingQuantum?: true
    createdAt?: true
    _all?: true
  }

  export type DrawAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Draw to aggregate.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Draws
    **/
    _count?: true | DrawCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrawAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrawSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrawMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrawMaxAggregateInputType
  }

  export type GetDrawAggregateType<T extends DrawAggregateArgs> = {
        [P in keyof T & keyof AggregateDraw]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDraw[P]>
      : GetScalarType<T[P], AggregateDraw[P]>
  }




  export type DrawGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrawWhereInput
    orderBy?: DrawOrderByWithAggregationInput | DrawOrderByWithAggregationInput[]
    by: DrawScalarFieldEnum[] | DrawScalarFieldEnum
    having?: DrawScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrawCountAggregateInputType | true
    _avg?: DrawAvgAggregateInputType
    _sum?: DrawSumAggregateInputType
    _min?: DrawMinAggregateInputType
    _max?: DrawMaxAggregateInputType
  }

  export type DrawGroupByOutputType = {
    id: string
    promoId: string
    numRounds: number
    shuffleCount: number
    usingQuantum: boolean
    createdAt: Date
    _count: DrawCountAggregateOutputType | null
    _avg: DrawAvgAggregateOutputType | null
    _sum: DrawSumAggregateOutputType | null
    _min: DrawMinAggregateOutputType | null
    _max: DrawMaxAggregateOutputType | null
  }

  type GetDrawGroupByPayload<T extends DrawGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrawGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrawGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrawGroupByOutputType[P]>
            : GetScalarType<T[P], DrawGroupByOutputType[P]>
        }
      >
    >


  export type DrawSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promoId?: boolean
    numRounds?: boolean
    shuffleCount?: boolean
    usingQuantum?: boolean
    createdAt?: boolean
    promo?: boolean | PromoDefaultArgs<ExtArgs>
    winners?: boolean | Draw$winnersArgs<ExtArgs>
    _count?: boolean | DrawCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draw"]>

  export type DrawSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promoId?: boolean
    numRounds?: boolean
    shuffleCount?: boolean
    usingQuantum?: boolean
    createdAt?: boolean
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draw"]>

  export type DrawSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promoId?: boolean
    numRounds?: boolean
    shuffleCount?: boolean
    usingQuantum?: boolean
    createdAt?: boolean
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draw"]>

  export type DrawSelectScalar = {
    id?: boolean
    promoId?: boolean
    numRounds?: boolean
    shuffleCount?: boolean
    usingQuantum?: boolean
    createdAt?: boolean
  }

  export type DrawOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "promoId" | "numRounds" | "shuffleCount" | "usingQuantum" | "createdAt", ExtArgs["result"]["draw"]>
  export type DrawInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promo?: boolean | PromoDefaultArgs<ExtArgs>
    winners?: boolean | Draw$winnersArgs<ExtArgs>
    _count?: boolean | DrawCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DrawIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }
  export type DrawIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promo?: boolean | PromoDefaultArgs<ExtArgs>
  }

  export type $DrawPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Draw"
    objects: {
      promo: Prisma.$PromoPayload<ExtArgs>
      winners: Prisma.$WinnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      promoId: string
      numRounds: number
      shuffleCount: number
      usingQuantum: boolean
      createdAt: Date
    }, ExtArgs["result"]["draw"]>
    composites: {}
  }

  type DrawGetPayload<S extends boolean | null | undefined | DrawDefaultArgs> = $Result.GetResult<Prisma.$DrawPayload, S>

  type DrawCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrawFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrawCountAggregateInputType | true
    }

  export interface DrawDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Draw'], meta: { name: 'Draw' } }
    /**
     * Find zero or one Draw that matches the filter.
     * @param {DrawFindUniqueArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrawFindUniqueArgs>(args: SelectSubset<T, DrawFindUniqueArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Draw that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrawFindUniqueOrThrowArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrawFindUniqueOrThrowArgs>(args: SelectSubset<T, DrawFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draw that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindFirstArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrawFindFirstArgs>(args?: SelectSubset<T, DrawFindFirstArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draw that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindFirstOrThrowArgs} args - Arguments to find a Draw
     * @example
     * // Get one Draw
     * const draw = await prisma.draw.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrawFindFirstOrThrowArgs>(args?: SelectSubset<T, DrawFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Draws that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Draws
     * const draws = await prisma.draw.findMany()
     * 
     * // Get first 10 Draws
     * const draws = await prisma.draw.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drawWithIdOnly = await prisma.draw.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrawFindManyArgs>(args?: SelectSubset<T, DrawFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Draw.
     * @param {DrawCreateArgs} args - Arguments to create a Draw.
     * @example
     * // Create one Draw
     * const Draw = await prisma.draw.create({
     *   data: {
     *     // ... data to create a Draw
     *   }
     * })
     * 
     */
    create<T extends DrawCreateArgs>(args: SelectSubset<T, DrawCreateArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Draws.
     * @param {DrawCreateManyArgs} args - Arguments to create many Draws.
     * @example
     * // Create many Draws
     * const draw = await prisma.draw.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrawCreateManyArgs>(args?: SelectSubset<T, DrawCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Draws and returns the data saved in the database.
     * @param {DrawCreateManyAndReturnArgs} args - Arguments to create many Draws.
     * @example
     * // Create many Draws
     * const draw = await prisma.draw.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Draws and only return the `id`
     * const drawWithIdOnly = await prisma.draw.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrawCreateManyAndReturnArgs>(args?: SelectSubset<T, DrawCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Draw.
     * @param {DrawDeleteArgs} args - Arguments to delete one Draw.
     * @example
     * // Delete one Draw
     * const Draw = await prisma.draw.delete({
     *   where: {
     *     // ... filter to delete one Draw
     *   }
     * })
     * 
     */
    delete<T extends DrawDeleteArgs>(args: SelectSubset<T, DrawDeleteArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Draw.
     * @param {DrawUpdateArgs} args - Arguments to update one Draw.
     * @example
     * // Update one Draw
     * const draw = await prisma.draw.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrawUpdateArgs>(args: SelectSubset<T, DrawUpdateArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Draws.
     * @param {DrawDeleteManyArgs} args - Arguments to filter Draws to delete.
     * @example
     * // Delete a few Draws
     * const { count } = await prisma.draw.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrawDeleteManyArgs>(args?: SelectSubset<T, DrawDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Draws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Draws
     * const draw = await prisma.draw.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrawUpdateManyArgs>(args: SelectSubset<T, DrawUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Draws and returns the data updated in the database.
     * @param {DrawUpdateManyAndReturnArgs} args - Arguments to update many Draws.
     * @example
     * // Update many Draws
     * const draw = await prisma.draw.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Draws and only return the `id`
     * const drawWithIdOnly = await prisma.draw.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DrawUpdateManyAndReturnArgs>(args: SelectSubset<T, DrawUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Draw.
     * @param {DrawUpsertArgs} args - Arguments to update or create a Draw.
     * @example
     * // Update or create a Draw
     * const draw = await prisma.draw.upsert({
     *   create: {
     *     // ... data to create a Draw
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Draw we want to update
     *   }
     * })
     */
    upsert<T extends DrawUpsertArgs>(args: SelectSubset<T, DrawUpsertArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Draws.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawCountArgs} args - Arguments to filter Draws to count.
     * @example
     * // Count the number of Draws
     * const count = await prisma.draw.count({
     *   where: {
     *     // ... the filter for the Draws we want to count
     *   }
     * })
    **/
    count<T extends DrawCountArgs>(
      args?: Subset<T, DrawCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrawCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Draw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DrawAggregateArgs>(args: Subset<T, DrawAggregateArgs>): Prisma.PrismaPromise<GetDrawAggregateType<T>>

    /**
     * Group by Draw.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrawGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DrawGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrawGroupByArgs['orderBy'] }
        : { orderBy?: DrawGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DrawGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrawGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Draw model
   */
  readonly fields: DrawFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Draw.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrawClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promo<T extends PromoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromoDefaultArgs<ExtArgs>>): Prisma__PromoClient<$Result.GetResult<Prisma.$PromoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winners<T extends Draw$winnersArgs<ExtArgs> = {}>(args?: Subset<T, Draw$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Draw model
   */
  interface DrawFieldRefs {
    readonly id: FieldRef<"Draw", 'String'>
    readonly promoId: FieldRef<"Draw", 'String'>
    readonly numRounds: FieldRef<"Draw", 'Int'>
    readonly shuffleCount: FieldRef<"Draw", 'Int'>
    readonly usingQuantum: FieldRef<"Draw", 'Boolean'>
    readonly createdAt: FieldRef<"Draw", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Draw findUnique
   */
  export type DrawFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw findUniqueOrThrow
   */
  export type DrawFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw findFirst
   */
  export type DrawFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Draws.
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Draws.
     */
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Draw findFirstOrThrow
   */
  export type DrawFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter, which Draw to fetch.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Draws.
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Draws.
     */
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Draw findMany
   */
  export type DrawFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter, which Draws to fetch.
     */
    where?: DrawWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Draws to fetch.
     */
    orderBy?: DrawOrderByWithRelationInput | DrawOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Draws.
     */
    cursor?: DrawWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Draws from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Draws.
     */
    skip?: number
    distinct?: DrawScalarFieldEnum | DrawScalarFieldEnum[]
  }

  /**
   * Draw create
   */
  export type DrawCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * The data needed to create a Draw.
     */
    data: XOR<DrawCreateInput, DrawUncheckedCreateInput>
  }

  /**
   * Draw createMany
   */
  export type DrawCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Draws.
     */
    data: DrawCreateManyInput | DrawCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Draw createManyAndReturn
   */
  export type DrawCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * The data used to create many Draws.
     */
    data: DrawCreateManyInput | DrawCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Draw update
   */
  export type DrawUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * The data needed to update a Draw.
     */
    data: XOR<DrawUpdateInput, DrawUncheckedUpdateInput>
    /**
     * Choose, which Draw to update.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw updateMany
   */
  export type DrawUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Draws.
     */
    data: XOR<DrawUpdateManyMutationInput, DrawUncheckedUpdateManyInput>
    /**
     * Filter which Draws to update
     */
    where?: DrawWhereInput
    /**
     * Limit how many Draws to update.
     */
    limit?: number
  }

  /**
   * Draw updateManyAndReturn
   */
  export type DrawUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * The data used to update Draws.
     */
    data: XOR<DrawUpdateManyMutationInput, DrawUncheckedUpdateManyInput>
    /**
     * Filter which Draws to update
     */
    where?: DrawWhereInput
    /**
     * Limit how many Draws to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Draw upsert
   */
  export type DrawUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * The filter to search for the Draw to update in case it exists.
     */
    where: DrawWhereUniqueInput
    /**
     * In case the Draw found by the `where` argument doesn't exist, create a new Draw with this data.
     */
    create: XOR<DrawCreateInput, DrawUncheckedCreateInput>
    /**
     * In case the Draw was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrawUpdateInput, DrawUncheckedUpdateInput>
  }

  /**
   * Draw delete
   */
  export type DrawDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
    /**
     * Filter which Draw to delete.
     */
    where: DrawWhereUniqueInput
  }

  /**
   * Draw deleteMany
   */
  export type DrawDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Draws to delete
     */
    where?: DrawWhereInput
    /**
     * Limit how many Draws to delete.
     */
    limit?: number
  }

  /**
   * Draw.winners
   */
  export type Draw$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    cursor?: WinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Draw without action
   */
  export type DrawDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draw
     */
    select?: DrawSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draw
     */
    omit?: DrawOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrawInclude<ExtArgs> | null
  }


  /**
   * Model Winner
   */

  export type AggregateWinner = {
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  export type WinnerAvgAggregateOutputType = {
    rank: number | null
  }

  export type WinnerSumAggregateOutputType = {
    rank: number | null
  }

  export type WinnerMinAggregateOutputType = {
    id: string | null
    drawId: string | null
    entryId: string | null
    rank: number | null
    createdAt: Date | null
  }

  export type WinnerMaxAggregateOutputType = {
    id: string | null
    drawId: string | null
    entryId: string | null
    rank: number | null
    createdAt: Date | null
  }

  export type WinnerCountAggregateOutputType = {
    id: number
    drawId: number
    entryId: number
    rank: number
    createdAt: number
    _all: number
  }


  export type WinnerAvgAggregateInputType = {
    rank?: true
  }

  export type WinnerSumAggregateInputType = {
    rank?: true
  }

  export type WinnerMinAggregateInputType = {
    id?: true
    drawId?: true
    entryId?: true
    rank?: true
    createdAt?: true
  }

  export type WinnerMaxAggregateInputType = {
    id?: true
    drawId?: true
    entryId?: true
    rank?: true
    createdAt?: true
  }

  export type WinnerCountAggregateInputType = {
    id?: true
    drawId?: true
    entryId?: true
    rank?: true
    createdAt?: true
    _all?: true
  }

  export type WinnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Winner to aggregate.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Winners
    **/
    _count?: true | WinnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WinnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WinnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WinnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WinnerMaxAggregateInputType
  }

  export type GetWinnerAggregateType<T extends WinnerAggregateArgs> = {
        [P in keyof T & keyof AggregateWinner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWinner[P]>
      : GetScalarType<T[P], AggregateWinner[P]>
  }




  export type WinnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithAggregationInput | WinnerOrderByWithAggregationInput[]
    by: WinnerScalarFieldEnum[] | WinnerScalarFieldEnum
    having?: WinnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WinnerCountAggregateInputType | true
    _avg?: WinnerAvgAggregateInputType
    _sum?: WinnerSumAggregateInputType
    _min?: WinnerMinAggregateInputType
    _max?: WinnerMaxAggregateInputType
  }

  export type WinnerGroupByOutputType = {
    id: string
    drawId: string
    entryId: string
    rank: number
    createdAt: Date
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  type GetWinnerGroupByPayload<T extends WinnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WinnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WinnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WinnerGroupByOutputType[P]>
            : GetScalarType<T[P], WinnerGroupByOutputType[P]>
        }
      >
    >


  export type WinnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    entryId?: boolean
    rank?: boolean
    createdAt?: boolean
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    entryId?: boolean
    rank?: boolean
    createdAt?: boolean
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    drawId?: boolean
    entryId?: boolean
    rank?: boolean
    createdAt?: boolean
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectScalar = {
    id?: boolean
    drawId?: boolean
    entryId?: boolean
    rank?: boolean
    createdAt?: boolean
  }

  export type WinnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "drawId" | "entryId" | "rank" | "createdAt", ExtArgs["result"]["winner"]>
  export type WinnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type WinnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }
  export type WinnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draw?: boolean | DrawDefaultArgs<ExtArgs>
    entry?: boolean | EntryDefaultArgs<ExtArgs>
  }

  export type $WinnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Winner"
    objects: {
      draw: Prisma.$DrawPayload<ExtArgs>
      entry: Prisma.$EntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      drawId: string
      entryId: string
      rank: number
      createdAt: Date
    }, ExtArgs["result"]["winner"]>
    composites: {}
  }

  type WinnerGetPayload<S extends boolean | null | undefined | WinnerDefaultArgs> = $Result.GetResult<Prisma.$WinnerPayload, S>

  type WinnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WinnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WinnerCountAggregateInputType | true
    }

  export interface WinnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Winner'], meta: { name: 'Winner' } }
    /**
     * Find zero or one Winner that matches the filter.
     * @param {WinnerFindUniqueArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WinnerFindUniqueArgs>(args: SelectSubset<T, WinnerFindUniqueArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Winner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WinnerFindUniqueOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WinnerFindUniqueOrThrowArgs>(args: SelectSubset<T, WinnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindFirstArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WinnerFindFirstArgs>(args?: SelectSubset<T, WinnerFindFirstArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindFirstOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WinnerFindFirstOrThrowArgs>(args?: SelectSubset<T, WinnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Winners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Winners
     * const winners = await prisma.winner.findMany()
     * 
     * // Get first 10 Winners
     * const winners = await prisma.winner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const winnerWithIdOnly = await prisma.winner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WinnerFindManyArgs>(args?: SelectSubset<T, WinnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Winner.
     * @param {WinnerCreateArgs} args - Arguments to create a Winner.
     * @example
     * // Create one Winner
     * const Winner = await prisma.winner.create({
     *   data: {
     *     // ... data to create a Winner
     *   }
     * })
     * 
     */
    create<T extends WinnerCreateArgs>(args: SelectSubset<T, WinnerCreateArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Winners.
     * @param {WinnerCreateManyArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WinnerCreateManyArgs>(args?: SelectSubset<T, WinnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Winners and returns the data saved in the database.
     * @param {WinnerCreateManyAndReturnArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Winners and only return the `id`
     * const winnerWithIdOnly = await prisma.winner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WinnerCreateManyAndReturnArgs>(args?: SelectSubset<T, WinnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Winner.
     * @param {WinnerDeleteArgs} args - Arguments to delete one Winner.
     * @example
     * // Delete one Winner
     * const Winner = await prisma.winner.delete({
     *   where: {
     *     // ... filter to delete one Winner
     *   }
     * })
     * 
     */
    delete<T extends WinnerDeleteArgs>(args: SelectSubset<T, WinnerDeleteArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Winner.
     * @param {WinnerUpdateArgs} args - Arguments to update one Winner.
     * @example
     * // Update one Winner
     * const winner = await prisma.winner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WinnerUpdateArgs>(args: SelectSubset<T, WinnerUpdateArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Winners.
     * @param {WinnerDeleteManyArgs} args - Arguments to filter Winners to delete.
     * @example
     * // Delete a few Winners
     * const { count } = await prisma.winner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WinnerDeleteManyArgs>(args?: SelectSubset<T, WinnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WinnerUpdateManyArgs>(args: SelectSubset<T, WinnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners and returns the data updated in the database.
     * @param {WinnerUpdateManyAndReturnArgs} args - Arguments to update many Winners.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Winners and only return the `id`
     * const winnerWithIdOnly = await prisma.winner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WinnerUpdateManyAndReturnArgs>(args: SelectSubset<T, WinnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Winner.
     * @param {WinnerUpsertArgs} args - Arguments to update or create a Winner.
     * @example
     * // Update or create a Winner
     * const winner = await prisma.winner.upsert({
     *   create: {
     *     // ... data to create a Winner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Winner we want to update
     *   }
     * })
     */
    upsert<T extends WinnerUpsertArgs>(args: SelectSubset<T, WinnerUpsertArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerCountArgs} args - Arguments to filter Winners to count.
     * @example
     * // Count the number of Winners
     * const count = await prisma.winner.count({
     *   where: {
     *     // ... the filter for the Winners we want to count
     *   }
     * })
    **/
    count<T extends WinnerCountArgs>(
      args?: Subset<T, WinnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WinnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WinnerAggregateArgs>(args: Subset<T, WinnerAggregateArgs>): Prisma.PrismaPromise<GetWinnerAggregateType<T>>

    /**
     * Group by Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WinnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WinnerGroupByArgs['orderBy'] }
        : { orderBy?: WinnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WinnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWinnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Winner model
   */
  readonly fields: WinnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Winner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WinnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    draw<T extends DrawDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrawDefaultArgs<ExtArgs>>): Prisma__DrawClient<$Result.GetResult<Prisma.$DrawPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entry<T extends EntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntryDefaultArgs<ExtArgs>>): Prisma__EntryClient<$Result.GetResult<Prisma.$EntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Winner model
   */
  interface WinnerFieldRefs {
    readonly id: FieldRef<"Winner", 'String'>
    readonly drawId: FieldRef<"Winner", 'String'>
    readonly entryId: FieldRef<"Winner", 'String'>
    readonly rank: FieldRef<"Winner", 'Int'>
    readonly createdAt: FieldRef<"Winner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Winner findUnique
   */
  export type WinnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner findUniqueOrThrow
   */
  export type WinnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner findFirst
   */
  export type WinnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner findFirstOrThrow
   */
  export type WinnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner findMany
   */
  export type WinnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winners to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner create
   */
  export type WinnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Winner.
     */
    data: XOR<WinnerCreateInput, WinnerUncheckedCreateInput>
  }

  /**
   * Winner createMany
   */
  export type WinnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Winners.
     */
    data: WinnerCreateManyInput | WinnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Winner createManyAndReturn
   */
  export type WinnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * The data used to create many Winners.
     */
    data: WinnerCreateManyInput | WinnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Winner update
   */
  export type WinnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Winner.
     */
    data: XOR<WinnerUpdateInput, WinnerUncheckedUpdateInput>
    /**
     * Choose, which Winner to update.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner updateMany
   */
  export type WinnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Winners.
     */
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyInput>
    /**
     * Filter which Winners to update
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to update.
     */
    limit?: number
  }

  /**
   * Winner updateManyAndReturn
   */
  export type WinnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * The data used to update Winners.
     */
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyInput>
    /**
     * Filter which Winners to update
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Winner upsert
   */
  export type WinnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Winner to update in case it exists.
     */
    where: WinnerWhereUniqueInput
    /**
     * In case the Winner found by the `where` argument doesn't exist, create a new Winner with this data.
     */
    create: XOR<WinnerCreateInput, WinnerUncheckedCreateInput>
    /**
     * In case the Winner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WinnerUpdateInput, WinnerUncheckedUpdateInput>
  }

  /**
   * Winner delete
   */
  export type WinnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter which Winner to delete.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner deleteMany
   */
  export type WinnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Winners to delete
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to delete.
     */
    limit?: number
  }

  /**
   * Winner without action
   */
  export type WinnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PromoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromoScalarFieldEnum = (typeof PromoScalarFieldEnum)[keyof typeof PromoScalarFieldEnum]


  export const EntryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    promoId: 'promoId'
  };

  export type EntryScalarFieldEnum = (typeof EntryScalarFieldEnum)[keyof typeof EntryScalarFieldEnum]


  export const DrawScalarFieldEnum: {
    id: 'id',
    promoId: 'promoId',
    numRounds: 'numRounds',
    shuffleCount: 'shuffleCount',
    usingQuantum: 'usingQuantum',
    createdAt: 'createdAt'
  };

  export type DrawScalarFieldEnum = (typeof DrawScalarFieldEnum)[keyof typeof DrawScalarFieldEnum]


  export const WinnerScalarFieldEnum: {
    id: 'id',
    drawId: 'drawId',
    entryId: 'entryId',
    rank: 'rank',
    createdAt: 'createdAt'
  };

  export type WinnerScalarFieldEnum = (typeof WinnerScalarFieldEnum)[keyof typeof WinnerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PromoWhereInput = {
    AND?: PromoWhereInput | PromoWhereInput[]
    OR?: PromoWhereInput[]
    NOT?: PromoWhereInput | PromoWhereInput[]
    id?: StringFilter<"Promo"> | string
    name?: StringFilter<"Promo"> | string
    createdAt?: DateTimeFilter<"Promo"> | Date | string
    updatedAt?: DateTimeFilter<"Promo"> | Date | string
    entries?: EntryListRelationFilter
    draws?: DrawListRelationFilter
  }

  export type PromoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entries?: EntryOrderByRelationAggregateInput
    draws?: DrawOrderByRelationAggregateInput
  }

  export type PromoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PromoWhereInput | PromoWhereInput[]
    OR?: PromoWhereInput[]
    NOT?: PromoWhereInput | PromoWhereInput[]
    createdAt?: DateTimeFilter<"Promo"> | Date | string
    updatedAt?: DateTimeFilter<"Promo"> | Date | string
    entries?: EntryListRelationFilter
    draws?: DrawListRelationFilter
  }, "id" | "name">

  export type PromoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromoCountOrderByAggregateInput
    _max?: PromoMaxOrderByAggregateInput
    _min?: PromoMinOrderByAggregateInput
  }

  export type PromoScalarWhereWithAggregatesInput = {
    AND?: PromoScalarWhereWithAggregatesInput | PromoScalarWhereWithAggregatesInput[]
    OR?: PromoScalarWhereWithAggregatesInput[]
    NOT?: PromoScalarWhereWithAggregatesInput | PromoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promo"> | string
    name?: StringWithAggregatesFilter<"Promo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Promo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Promo"> | Date | string
  }

  export type EntryWhereInput = {
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    id?: StringFilter<"Entry"> | string
    name?: StringFilter<"Entry"> | string
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    promoId?: StringFilter<"Entry"> | string
    promo?: XOR<PromoScalarRelationFilter, PromoWhereInput>
    winners?: WinnerListRelationFilter
  }

  export type EntryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    promoId?: SortOrder
    promo?: PromoOrderByWithRelationInput
    winners?: WinnerOrderByRelationAggregateInput
  }

  export type EntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    promoId_name?: EntryPromoIdNameCompoundUniqueInput
    AND?: EntryWhereInput | EntryWhereInput[]
    OR?: EntryWhereInput[]
    NOT?: EntryWhereInput | EntryWhereInput[]
    name?: StringFilter<"Entry"> | string
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    promoId?: StringFilter<"Entry"> | string
    promo?: XOR<PromoScalarRelationFilter, PromoWhereInput>
    winners?: WinnerListRelationFilter
  }, "id" | "promoId_name">

  export type EntryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    promoId?: SortOrder
    _count?: EntryCountOrderByAggregateInput
    _max?: EntryMaxOrderByAggregateInput
    _min?: EntryMinOrderByAggregateInput
  }

  export type EntryScalarWhereWithAggregatesInput = {
    AND?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    OR?: EntryScalarWhereWithAggregatesInput[]
    NOT?: EntryScalarWhereWithAggregatesInput | EntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entry"> | string
    name?: StringWithAggregatesFilter<"Entry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Entry"> | Date | string
    promoId?: StringWithAggregatesFilter<"Entry"> | string
  }

  export type DrawWhereInput = {
    AND?: DrawWhereInput | DrawWhereInput[]
    OR?: DrawWhereInput[]
    NOT?: DrawWhereInput | DrawWhereInput[]
    id?: StringFilter<"Draw"> | string
    promoId?: StringFilter<"Draw"> | string
    numRounds?: IntFilter<"Draw"> | number
    shuffleCount?: IntFilter<"Draw"> | number
    usingQuantum?: BoolFilter<"Draw"> | boolean
    createdAt?: DateTimeFilter<"Draw"> | Date | string
    promo?: XOR<PromoScalarRelationFilter, PromoWhereInput>
    winners?: WinnerListRelationFilter
  }

  export type DrawOrderByWithRelationInput = {
    id?: SortOrder
    promoId?: SortOrder
    numRounds?: SortOrder
    shuffleCount?: SortOrder
    usingQuantum?: SortOrder
    createdAt?: SortOrder
    promo?: PromoOrderByWithRelationInput
    winners?: WinnerOrderByRelationAggregateInput
  }

  export type DrawWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DrawWhereInput | DrawWhereInput[]
    OR?: DrawWhereInput[]
    NOT?: DrawWhereInput | DrawWhereInput[]
    promoId?: StringFilter<"Draw"> | string
    numRounds?: IntFilter<"Draw"> | number
    shuffleCount?: IntFilter<"Draw"> | number
    usingQuantum?: BoolFilter<"Draw"> | boolean
    createdAt?: DateTimeFilter<"Draw"> | Date | string
    promo?: XOR<PromoScalarRelationFilter, PromoWhereInput>
    winners?: WinnerListRelationFilter
  }, "id">

  export type DrawOrderByWithAggregationInput = {
    id?: SortOrder
    promoId?: SortOrder
    numRounds?: SortOrder
    shuffleCount?: SortOrder
    usingQuantum?: SortOrder
    createdAt?: SortOrder
    _count?: DrawCountOrderByAggregateInput
    _avg?: DrawAvgOrderByAggregateInput
    _max?: DrawMaxOrderByAggregateInput
    _min?: DrawMinOrderByAggregateInput
    _sum?: DrawSumOrderByAggregateInput
  }

  export type DrawScalarWhereWithAggregatesInput = {
    AND?: DrawScalarWhereWithAggregatesInput | DrawScalarWhereWithAggregatesInput[]
    OR?: DrawScalarWhereWithAggregatesInput[]
    NOT?: DrawScalarWhereWithAggregatesInput | DrawScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Draw"> | string
    promoId?: StringWithAggregatesFilter<"Draw"> | string
    numRounds?: IntWithAggregatesFilter<"Draw"> | number
    shuffleCount?: IntWithAggregatesFilter<"Draw"> | number
    usingQuantum?: BoolWithAggregatesFilter<"Draw"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Draw"> | Date | string
  }

  export type WinnerWhereInput = {
    AND?: WinnerWhereInput | WinnerWhereInput[]
    OR?: WinnerWhereInput[]
    NOT?: WinnerWhereInput | WinnerWhereInput[]
    id?: StringFilter<"Winner"> | string
    drawId?: StringFilter<"Winner"> | string
    entryId?: StringFilter<"Winner"> | string
    rank?: IntFilter<"Winner"> | number
    createdAt?: DateTimeFilter<"Winner"> | Date | string
    draw?: XOR<DrawScalarRelationFilter, DrawWhereInput>
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }

  export type WinnerOrderByWithRelationInput = {
    id?: SortOrder
    drawId?: SortOrder
    entryId?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
    draw?: DrawOrderByWithRelationInput
    entry?: EntryOrderByWithRelationInput
  }

  export type WinnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WinnerWhereInput | WinnerWhereInput[]
    OR?: WinnerWhereInput[]
    NOT?: WinnerWhereInput | WinnerWhereInput[]
    drawId?: StringFilter<"Winner"> | string
    entryId?: StringFilter<"Winner"> | string
    rank?: IntFilter<"Winner"> | number
    createdAt?: DateTimeFilter<"Winner"> | Date | string
    draw?: XOR<DrawScalarRelationFilter, DrawWhereInput>
    entry?: XOR<EntryScalarRelationFilter, EntryWhereInput>
  }, "id">

  export type WinnerOrderByWithAggregationInput = {
    id?: SortOrder
    drawId?: SortOrder
    entryId?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
    _count?: WinnerCountOrderByAggregateInput
    _avg?: WinnerAvgOrderByAggregateInput
    _max?: WinnerMaxOrderByAggregateInput
    _min?: WinnerMinOrderByAggregateInput
    _sum?: WinnerSumOrderByAggregateInput
  }

  export type WinnerScalarWhereWithAggregatesInput = {
    AND?: WinnerScalarWhereWithAggregatesInput | WinnerScalarWhereWithAggregatesInput[]
    OR?: WinnerScalarWhereWithAggregatesInput[]
    NOT?: WinnerScalarWhereWithAggregatesInput | WinnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Winner"> | string
    drawId?: StringWithAggregatesFilter<"Winner"> | string
    entryId?: StringWithAggregatesFilter<"Winner"> | string
    rank?: IntWithAggregatesFilter<"Winner"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Winner"> | Date | string
  }

  export type PromoCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryCreateNestedManyWithoutPromoInput
    draws?: DrawCreateNestedManyWithoutPromoInput
  }

  export type PromoUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryUncheckedCreateNestedManyWithoutPromoInput
    draws?: DrawUncheckedCreateNestedManyWithoutPromoInput
  }

  export type PromoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUpdateManyWithoutPromoNestedInput
    draws?: DrawUpdateManyWithoutPromoNestedInput
  }

  export type PromoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUncheckedUpdateManyWithoutPromoNestedInput
    draws?: DrawUncheckedUpdateManyWithoutPromoNestedInput
  }

  export type PromoCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    promo: PromoCreateNestedOneWithoutEntriesInput
    winners?: WinnerCreateNestedManyWithoutEntryInput
  }

  export type EntryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    promoId: string
    winners?: WinnerUncheckedCreateNestedManyWithoutEntryInput
  }

  export type EntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promo?: PromoUpdateOneRequiredWithoutEntriesNestedInput
    winners?: WinnerUpdateManyWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promoId?: StringFieldUpdateOperationsInput | string
    winners?: WinnerUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type EntryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    promoId: string
  }

  export type EntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promoId?: StringFieldUpdateOperationsInput | string
  }

  export type DrawCreateInput = {
    id?: string
    numRounds: number
    shuffleCount: number
    usingQuantum?: boolean
    createdAt?: Date | string
    promo: PromoCreateNestedOneWithoutDrawsInput
    winners?: WinnerCreateNestedManyWithoutDrawInput
  }

  export type DrawUncheckedCreateInput = {
    id?: string
    promoId: string
    numRounds: number
    shuffleCount: number
    usingQuantum?: boolean
    createdAt?: Date | string
    winners?: WinnerUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numRounds?: IntFieldUpdateOperationsInput | number
    shuffleCount?: IntFieldUpdateOperationsInput | number
    usingQuantum?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promo?: PromoUpdateOneRequiredWithoutDrawsNestedInput
    winners?: WinnerUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    promoId?: StringFieldUpdateOperationsInput | string
    numRounds?: IntFieldUpdateOperationsInput | number
    shuffleCount?: IntFieldUpdateOperationsInput | number
    usingQuantum?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: WinnerUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type DrawCreateManyInput = {
    id?: string
    promoId: string
    numRounds: number
    shuffleCount: number
    usingQuantum?: boolean
    createdAt?: Date | string
  }

  export type DrawUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numRounds?: IntFieldUpdateOperationsInput | number
    shuffleCount?: IntFieldUpdateOperationsInput | number
    usingQuantum?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    promoId?: StringFieldUpdateOperationsInput | string
    numRounds?: IntFieldUpdateOperationsInput | number
    shuffleCount?: IntFieldUpdateOperationsInput | number
    usingQuantum?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerCreateInput = {
    id?: string
    rank?: number
    createdAt?: Date | string
    draw: DrawCreateNestedOneWithoutWinnersInput
    entry: EntryCreateNestedOneWithoutWinnersInput
  }

  export type WinnerUncheckedCreateInput = {
    id?: string
    drawId: string
    entryId: string
    rank?: number
    createdAt?: Date | string
  }

  export type WinnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draw?: DrawUpdateOneRequiredWithoutWinnersNestedInput
    entry?: EntryUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type WinnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerCreateManyInput = {
    id?: string
    drawId: string
    entryId: string
    rank?: number
    createdAt?: Date | string
  }

  export type WinnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EntryListRelationFilter = {
    every?: EntryWhereInput
    some?: EntryWhereInput
    none?: EntryWhereInput
  }

  export type DrawListRelationFilter = {
    every?: DrawWhereInput
    some?: DrawWhereInput
    none?: DrawWhereInput
  }

  export type EntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrawOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PromoScalarRelationFilter = {
    is?: PromoWhereInput
    isNot?: PromoWhereInput
  }

  export type WinnerListRelationFilter = {
    every?: WinnerWhereInput
    some?: WinnerWhereInput
    none?: WinnerWhereInput
  }

  export type WinnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntryPromoIdNameCompoundUniqueInput = {
    promoId: string
    name: string
  }

  export type EntryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    promoId?: SortOrder
  }

  export type EntryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    promoId?: SortOrder
  }

  export type EntryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    promoId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DrawCountOrderByAggregateInput = {
    id?: SortOrder
    promoId?: SortOrder
    numRounds?: SortOrder
    shuffleCount?: SortOrder
    usingQuantum?: SortOrder
    createdAt?: SortOrder
  }

  export type DrawAvgOrderByAggregateInput = {
    numRounds?: SortOrder
    shuffleCount?: SortOrder
  }

  export type DrawMaxOrderByAggregateInput = {
    id?: SortOrder
    promoId?: SortOrder
    numRounds?: SortOrder
    shuffleCount?: SortOrder
    usingQuantum?: SortOrder
    createdAt?: SortOrder
  }

  export type DrawMinOrderByAggregateInput = {
    id?: SortOrder
    promoId?: SortOrder
    numRounds?: SortOrder
    shuffleCount?: SortOrder
    usingQuantum?: SortOrder
    createdAt?: SortOrder
  }

  export type DrawSumOrderByAggregateInput = {
    numRounds?: SortOrder
    shuffleCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DrawScalarRelationFilter = {
    is?: DrawWhereInput
    isNot?: DrawWhereInput
  }

  export type EntryScalarRelationFilter = {
    is?: EntryWhereInput
    isNot?: EntryWhereInput
  }

  export type WinnerCountOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    entryId?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type WinnerAvgOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type WinnerMaxOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    entryId?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type WinnerMinOrderByAggregateInput = {
    id?: SortOrder
    drawId?: SortOrder
    entryId?: SortOrder
    rank?: SortOrder
    createdAt?: SortOrder
  }

  export type WinnerSumOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type EntryCreateNestedManyWithoutPromoInput = {
    create?: XOR<EntryCreateWithoutPromoInput, EntryUncheckedCreateWithoutPromoInput> | EntryCreateWithoutPromoInput[] | EntryUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutPromoInput | EntryCreateOrConnectWithoutPromoInput[]
    createMany?: EntryCreateManyPromoInputEnvelope
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
  }

  export type DrawCreateNestedManyWithoutPromoInput = {
    create?: XOR<DrawCreateWithoutPromoInput, DrawUncheckedCreateWithoutPromoInput> | DrawCreateWithoutPromoInput[] | DrawUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutPromoInput | DrawCreateOrConnectWithoutPromoInput[]
    createMany?: DrawCreateManyPromoInputEnvelope
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
  }

  export type EntryUncheckedCreateNestedManyWithoutPromoInput = {
    create?: XOR<EntryCreateWithoutPromoInput, EntryUncheckedCreateWithoutPromoInput> | EntryCreateWithoutPromoInput[] | EntryUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutPromoInput | EntryCreateOrConnectWithoutPromoInput[]
    createMany?: EntryCreateManyPromoInputEnvelope
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
  }

  export type DrawUncheckedCreateNestedManyWithoutPromoInput = {
    create?: XOR<DrawCreateWithoutPromoInput, DrawUncheckedCreateWithoutPromoInput> | DrawCreateWithoutPromoInput[] | DrawUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutPromoInput | DrawCreateOrConnectWithoutPromoInput[]
    createMany?: DrawCreateManyPromoInputEnvelope
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EntryUpdateManyWithoutPromoNestedInput = {
    create?: XOR<EntryCreateWithoutPromoInput, EntryUncheckedCreateWithoutPromoInput> | EntryCreateWithoutPromoInput[] | EntryUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutPromoInput | EntryCreateOrConnectWithoutPromoInput[]
    upsert?: EntryUpsertWithWhereUniqueWithoutPromoInput | EntryUpsertWithWhereUniqueWithoutPromoInput[]
    createMany?: EntryCreateManyPromoInputEnvelope
    set?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    disconnect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    delete?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    update?: EntryUpdateWithWhereUniqueWithoutPromoInput | EntryUpdateWithWhereUniqueWithoutPromoInput[]
    updateMany?: EntryUpdateManyWithWhereWithoutPromoInput | EntryUpdateManyWithWhereWithoutPromoInput[]
    deleteMany?: EntryScalarWhereInput | EntryScalarWhereInput[]
  }

  export type DrawUpdateManyWithoutPromoNestedInput = {
    create?: XOR<DrawCreateWithoutPromoInput, DrawUncheckedCreateWithoutPromoInput> | DrawCreateWithoutPromoInput[] | DrawUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutPromoInput | DrawCreateOrConnectWithoutPromoInput[]
    upsert?: DrawUpsertWithWhereUniqueWithoutPromoInput | DrawUpsertWithWhereUniqueWithoutPromoInput[]
    createMany?: DrawCreateManyPromoInputEnvelope
    set?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    disconnect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    delete?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    update?: DrawUpdateWithWhereUniqueWithoutPromoInput | DrawUpdateWithWhereUniqueWithoutPromoInput[]
    updateMany?: DrawUpdateManyWithWhereWithoutPromoInput | DrawUpdateManyWithWhereWithoutPromoInput[]
    deleteMany?: DrawScalarWhereInput | DrawScalarWhereInput[]
  }

  export type EntryUncheckedUpdateManyWithoutPromoNestedInput = {
    create?: XOR<EntryCreateWithoutPromoInput, EntryUncheckedCreateWithoutPromoInput> | EntryCreateWithoutPromoInput[] | EntryUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: EntryCreateOrConnectWithoutPromoInput | EntryCreateOrConnectWithoutPromoInput[]
    upsert?: EntryUpsertWithWhereUniqueWithoutPromoInput | EntryUpsertWithWhereUniqueWithoutPromoInput[]
    createMany?: EntryCreateManyPromoInputEnvelope
    set?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    disconnect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    delete?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    connect?: EntryWhereUniqueInput | EntryWhereUniqueInput[]
    update?: EntryUpdateWithWhereUniqueWithoutPromoInput | EntryUpdateWithWhereUniqueWithoutPromoInput[]
    updateMany?: EntryUpdateManyWithWhereWithoutPromoInput | EntryUpdateManyWithWhereWithoutPromoInput[]
    deleteMany?: EntryScalarWhereInput | EntryScalarWhereInput[]
  }

  export type DrawUncheckedUpdateManyWithoutPromoNestedInput = {
    create?: XOR<DrawCreateWithoutPromoInput, DrawUncheckedCreateWithoutPromoInput> | DrawCreateWithoutPromoInput[] | DrawUncheckedCreateWithoutPromoInput[]
    connectOrCreate?: DrawCreateOrConnectWithoutPromoInput | DrawCreateOrConnectWithoutPromoInput[]
    upsert?: DrawUpsertWithWhereUniqueWithoutPromoInput | DrawUpsertWithWhereUniqueWithoutPromoInput[]
    createMany?: DrawCreateManyPromoInputEnvelope
    set?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    disconnect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    delete?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    connect?: DrawWhereUniqueInput | DrawWhereUniqueInput[]
    update?: DrawUpdateWithWhereUniqueWithoutPromoInput | DrawUpdateWithWhereUniqueWithoutPromoInput[]
    updateMany?: DrawUpdateManyWithWhereWithoutPromoInput | DrawUpdateManyWithWhereWithoutPromoInput[]
    deleteMany?: DrawScalarWhereInput | DrawScalarWhereInput[]
  }

  export type PromoCreateNestedOneWithoutEntriesInput = {
    create?: XOR<PromoCreateWithoutEntriesInput, PromoUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: PromoCreateOrConnectWithoutEntriesInput
    connect?: PromoWhereUniqueInput
  }

  export type WinnerCreateNestedManyWithoutEntryInput = {
    create?: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput> | WinnerCreateWithoutEntryInput[] | WinnerUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutEntryInput | WinnerCreateOrConnectWithoutEntryInput[]
    createMany?: WinnerCreateManyEntryInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type WinnerUncheckedCreateNestedManyWithoutEntryInput = {
    create?: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput> | WinnerCreateWithoutEntryInput[] | WinnerUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutEntryInput | WinnerCreateOrConnectWithoutEntryInput[]
    createMany?: WinnerCreateManyEntryInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type PromoUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<PromoCreateWithoutEntriesInput, PromoUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: PromoCreateOrConnectWithoutEntriesInput
    upsert?: PromoUpsertWithoutEntriesInput
    connect?: PromoWhereUniqueInput
    update?: XOR<XOR<PromoUpdateToOneWithWhereWithoutEntriesInput, PromoUpdateWithoutEntriesInput>, PromoUncheckedUpdateWithoutEntriesInput>
  }

  export type WinnerUpdateManyWithoutEntryNestedInput = {
    create?: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput> | WinnerCreateWithoutEntryInput[] | WinnerUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutEntryInput | WinnerCreateOrConnectWithoutEntryInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutEntryInput | WinnerUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: WinnerCreateManyEntryInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutEntryInput | WinnerUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutEntryInput | WinnerUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type WinnerUncheckedUpdateManyWithoutEntryNestedInput = {
    create?: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput> | WinnerCreateWithoutEntryInput[] | WinnerUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutEntryInput | WinnerCreateOrConnectWithoutEntryInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutEntryInput | WinnerUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: WinnerCreateManyEntryInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutEntryInput | WinnerUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutEntryInput | WinnerUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type PromoCreateNestedOneWithoutDrawsInput = {
    create?: XOR<PromoCreateWithoutDrawsInput, PromoUncheckedCreateWithoutDrawsInput>
    connectOrCreate?: PromoCreateOrConnectWithoutDrawsInput
    connect?: PromoWhereUniqueInput
  }

  export type WinnerCreateNestedManyWithoutDrawInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type WinnerUncheckedCreateNestedManyWithoutDrawInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PromoUpdateOneRequiredWithoutDrawsNestedInput = {
    create?: XOR<PromoCreateWithoutDrawsInput, PromoUncheckedCreateWithoutDrawsInput>
    connectOrCreate?: PromoCreateOrConnectWithoutDrawsInput
    upsert?: PromoUpsertWithoutDrawsInput
    connect?: PromoWhereUniqueInput
    update?: XOR<XOR<PromoUpdateToOneWithWhereWithoutDrawsInput, PromoUpdateWithoutDrawsInput>, PromoUncheckedUpdateWithoutDrawsInput>
  }

  export type WinnerUpdateManyWithoutDrawNestedInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutDrawInput | WinnerUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutDrawInput | WinnerUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutDrawInput | WinnerUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type WinnerUncheckedUpdateManyWithoutDrawNestedInput = {
    create?: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput> | WinnerCreateWithoutDrawInput[] | WinnerUncheckedCreateWithoutDrawInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutDrawInput | WinnerCreateOrConnectWithoutDrawInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutDrawInput | WinnerUpsertWithWhereUniqueWithoutDrawInput[]
    createMany?: WinnerCreateManyDrawInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutDrawInput | WinnerUpdateWithWhereUniqueWithoutDrawInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutDrawInput | WinnerUpdateManyWithWhereWithoutDrawInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type DrawCreateNestedOneWithoutWinnersInput = {
    create?: XOR<DrawCreateWithoutWinnersInput, DrawUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: DrawCreateOrConnectWithoutWinnersInput
    connect?: DrawWhereUniqueInput
  }

  export type EntryCreateNestedOneWithoutWinnersInput = {
    create?: XOR<EntryCreateWithoutWinnersInput, EntryUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: EntryCreateOrConnectWithoutWinnersInput
    connect?: EntryWhereUniqueInput
  }

  export type DrawUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<DrawCreateWithoutWinnersInput, DrawUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: DrawCreateOrConnectWithoutWinnersInput
    upsert?: DrawUpsertWithoutWinnersInput
    connect?: DrawWhereUniqueInput
    update?: XOR<XOR<DrawUpdateToOneWithWhereWithoutWinnersInput, DrawUpdateWithoutWinnersInput>, DrawUncheckedUpdateWithoutWinnersInput>
  }

  export type EntryUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<EntryCreateWithoutWinnersInput, EntryUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: EntryCreateOrConnectWithoutWinnersInput
    upsert?: EntryUpsertWithoutWinnersInput
    connect?: EntryWhereUniqueInput
    update?: XOR<XOR<EntryUpdateToOneWithWhereWithoutWinnersInput, EntryUpdateWithoutWinnersInput>, EntryUncheckedUpdateWithoutWinnersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EntryCreateWithoutPromoInput = {
    id?: string
    name: string
    createdAt?: Date | string
    winners?: WinnerCreateNestedManyWithoutEntryInput
  }

  export type EntryUncheckedCreateWithoutPromoInput = {
    id?: string
    name: string
    createdAt?: Date | string
    winners?: WinnerUncheckedCreateNestedManyWithoutEntryInput
  }

  export type EntryCreateOrConnectWithoutPromoInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutPromoInput, EntryUncheckedCreateWithoutPromoInput>
  }

  export type EntryCreateManyPromoInputEnvelope = {
    data: EntryCreateManyPromoInput | EntryCreateManyPromoInput[]
    skipDuplicates?: boolean
  }

  export type DrawCreateWithoutPromoInput = {
    id?: string
    numRounds: number
    shuffleCount: number
    usingQuantum?: boolean
    createdAt?: Date | string
    winners?: WinnerCreateNestedManyWithoutDrawInput
  }

  export type DrawUncheckedCreateWithoutPromoInput = {
    id?: string
    numRounds: number
    shuffleCount: number
    usingQuantum?: boolean
    createdAt?: Date | string
    winners?: WinnerUncheckedCreateNestedManyWithoutDrawInput
  }

  export type DrawCreateOrConnectWithoutPromoInput = {
    where: DrawWhereUniqueInput
    create: XOR<DrawCreateWithoutPromoInput, DrawUncheckedCreateWithoutPromoInput>
  }

  export type DrawCreateManyPromoInputEnvelope = {
    data: DrawCreateManyPromoInput | DrawCreateManyPromoInput[]
    skipDuplicates?: boolean
  }

  export type EntryUpsertWithWhereUniqueWithoutPromoInput = {
    where: EntryWhereUniqueInput
    update: XOR<EntryUpdateWithoutPromoInput, EntryUncheckedUpdateWithoutPromoInput>
    create: XOR<EntryCreateWithoutPromoInput, EntryUncheckedCreateWithoutPromoInput>
  }

  export type EntryUpdateWithWhereUniqueWithoutPromoInput = {
    where: EntryWhereUniqueInput
    data: XOR<EntryUpdateWithoutPromoInput, EntryUncheckedUpdateWithoutPromoInput>
  }

  export type EntryUpdateManyWithWhereWithoutPromoInput = {
    where: EntryScalarWhereInput
    data: XOR<EntryUpdateManyMutationInput, EntryUncheckedUpdateManyWithoutPromoInput>
  }

  export type EntryScalarWhereInput = {
    AND?: EntryScalarWhereInput | EntryScalarWhereInput[]
    OR?: EntryScalarWhereInput[]
    NOT?: EntryScalarWhereInput | EntryScalarWhereInput[]
    id?: StringFilter<"Entry"> | string
    name?: StringFilter<"Entry"> | string
    createdAt?: DateTimeFilter<"Entry"> | Date | string
    promoId?: StringFilter<"Entry"> | string
  }

  export type DrawUpsertWithWhereUniqueWithoutPromoInput = {
    where: DrawWhereUniqueInput
    update: XOR<DrawUpdateWithoutPromoInput, DrawUncheckedUpdateWithoutPromoInput>
    create: XOR<DrawCreateWithoutPromoInput, DrawUncheckedCreateWithoutPromoInput>
  }

  export type DrawUpdateWithWhereUniqueWithoutPromoInput = {
    where: DrawWhereUniqueInput
    data: XOR<DrawUpdateWithoutPromoInput, DrawUncheckedUpdateWithoutPromoInput>
  }

  export type DrawUpdateManyWithWhereWithoutPromoInput = {
    where: DrawScalarWhereInput
    data: XOR<DrawUpdateManyMutationInput, DrawUncheckedUpdateManyWithoutPromoInput>
  }

  export type DrawScalarWhereInput = {
    AND?: DrawScalarWhereInput | DrawScalarWhereInput[]
    OR?: DrawScalarWhereInput[]
    NOT?: DrawScalarWhereInput | DrawScalarWhereInput[]
    id?: StringFilter<"Draw"> | string
    promoId?: StringFilter<"Draw"> | string
    numRounds?: IntFilter<"Draw"> | number
    shuffleCount?: IntFilter<"Draw"> | number
    usingQuantum?: BoolFilter<"Draw"> | boolean
    createdAt?: DateTimeFilter<"Draw"> | Date | string
  }

  export type PromoCreateWithoutEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    draws?: DrawCreateNestedManyWithoutPromoInput
  }

  export type PromoUncheckedCreateWithoutEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    draws?: DrawUncheckedCreateNestedManyWithoutPromoInput
  }

  export type PromoCreateOrConnectWithoutEntriesInput = {
    where: PromoWhereUniqueInput
    create: XOR<PromoCreateWithoutEntriesInput, PromoUncheckedCreateWithoutEntriesInput>
  }

  export type WinnerCreateWithoutEntryInput = {
    id?: string
    rank?: number
    createdAt?: Date | string
    draw: DrawCreateNestedOneWithoutWinnersInput
  }

  export type WinnerUncheckedCreateWithoutEntryInput = {
    id?: string
    drawId: string
    rank?: number
    createdAt?: Date | string
  }

  export type WinnerCreateOrConnectWithoutEntryInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput>
  }

  export type WinnerCreateManyEntryInputEnvelope = {
    data: WinnerCreateManyEntryInput | WinnerCreateManyEntryInput[]
    skipDuplicates?: boolean
  }

  export type PromoUpsertWithoutEntriesInput = {
    update: XOR<PromoUpdateWithoutEntriesInput, PromoUncheckedUpdateWithoutEntriesInput>
    create: XOR<PromoCreateWithoutEntriesInput, PromoUncheckedCreateWithoutEntriesInput>
    where?: PromoWhereInput
  }

  export type PromoUpdateToOneWithWhereWithoutEntriesInput = {
    where?: PromoWhereInput
    data: XOR<PromoUpdateWithoutEntriesInput, PromoUncheckedUpdateWithoutEntriesInput>
  }

  export type PromoUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draws?: DrawUpdateManyWithoutPromoNestedInput
  }

  export type PromoUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draws?: DrawUncheckedUpdateManyWithoutPromoNestedInput
  }

  export type WinnerUpsertWithWhereUniqueWithoutEntryInput = {
    where: WinnerWhereUniqueInput
    update: XOR<WinnerUpdateWithoutEntryInput, WinnerUncheckedUpdateWithoutEntryInput>
    create: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput>
  }

  export type WinnerUpdateWithWhereUniqueWithoutEntryInput = {
    where: WinnerWhereUniqueInput
    data: XOR<WinnerUpdateWithoutEntryInput, WinnerUncheckedUpdateWithoutEntryInput>
  }

  export type WinnerUpdateManyWithWhereWithoutEntryInput = {
    where: WinnerScalarWhereInput
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyWithoutEntryInput>
  }

  export type WinnerScalarWhereInput = {
    AND?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
    OR?: WinnerScalarWhereInput[]
    NOT?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
    id?: StringFilter<"Winner"> | string
    drawId?: StringFilter<"Winner"> | string
    entryId?: StringFilter<"Winner"> | string
    rank?: IntFilter<"Winner"> | number
    createdAt?: DateTimeFilter<"Winner"> | Date | string
  }

  export type PromoCreateWithoutDrawsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryCreateNestedManyWithoutPromoInput
  }

  export type PromoUncheckedCreateWithoutDrawsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: EntryUncheckedCreateNestedManyWithoutPromoInput
  }

  export type PromoCreateOrConnectWithoutDrawsInput = {
    where: PromoWhereUniqueInput
    create: XOR<PromoCreateWithoutDrawsInput, PromoUncheckedCreateWithoutDrawsInput>
  }

  export type WinnerCreateWithoutDrawInput = {
    id?: string
    rank?: number
    createdAt?: Date | string
    entry: EntryCreateNestedOneWithoutWinnersInput
  }

  export type WinnerUncheckedCreateWithoutDrawInput = {
    id?: string
    entryId: string
    rank?: number
    createdAt?: Date | string
  }

  export type WinnerCreateOrConnectWithoutDrawInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput>
  }

  export type WinnerCreateManyDrawInputEnvelope = {
    data: WinnerCreateManyDrawInput | WinnerCreateManyDrawInput[]
    skipDuplicates?: boolean
  }

  export type PromoUpsertWithoutDrawsInput = {
    update: XOR<PromoUpdateWithoutDrawsInput, PromoUncheckedUpdateWithoutDrawsInput>
    create: XOR<PromoCreateWithoutDrawsInput, PromoUncheckedCreateWithoutDrawsInput>
    where?: PromoWhereInput
  }

  export type PromoUpdateToOneWithWhereWithoutDrawsInput = {
    where?: PromoWhereInput
    data: XOR<PromoUpdateWithoutDrawsInput, PromoUncheckedUpdateWithoutDrawsInput>
  }

  export type PromoUpdateWithoutDrawsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUpdateManyWithoutPromoNestedInput
  }

  export type PromoUncheckedUpdateWithoutDrawsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: EntryUncheckedUpdateManyWithoutPromoNestedInput
  }

  export type WinnerUpsertWithWhereUniqueWithoutDrawInput = {
    where: WinnerWhereUniqueInput
    update: XOR<WinnerUpdateWithoutDrawInput, WinnerUncheckedUpdateWithoutDrawInput>
    create: XOR<WinnerCreateWithoutDrawInput, WinnerUncheckedCreateWithoutDrawInput>
  }

  export type WinnerUpdateWithWhereUniqueWithoutDrawInput = {
    where: WinnerWhereUniqueInput
    data: XOR<WinnerUpdateWithoutDrawInput, WinnerUncheckedUpdateWithoutDrawInput>
  }

  export type WinnerUpdateManyWithWhereWithoutDrawInput = {
    where: WinnerScalarWhereInput
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyWithoutDrawInput>
  }

  export type DrawCreateWithoutWinnersInput = {
    id?: string
    numRounds: number
    shuffleCount: number
    usingQuantum?: boolean
    createdAt?: Date | string
    promo: PromoCreateNestedOneWithoutDrawsInput
  }

  export type DrawUncheckedCreateWithoutWinnersInput = {
    id?: string
    promoId: string
    numRounds: number
    shuffleCount: number
    usingQuantum?: boolean
    createdAt?: Date | string
  }

  export type DrawCreateOrConnectWithoutWinnersInput = {
    where: DrawWhereUniqueInput
    create: XOR<DrawCreateWithoutWinnersInput, DrawUncheckedCreateWithoutWinnersInput>
  }

  export type EntryCreateWithoutWinnersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    promo: PromoCreateNestedOneWithoutEntriesInput
  }

  export type EntryUncheckedCreateWithoutWinnersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    promoId: string
  }

  export type EntryCreateOrConnectWithoutWinnersInput = {
    where: EntryWhereUniqueInput
    create: XOR<EntryCreateWithoutWinnersInput, EntryUncheckedCreateWithoutWinnersInput>
  }

  export type DrawUpsertWithoutWinnersInput = {
    update: XOR<DrawUpdateWithoutWinnersInput, DrawUncheckedUpdateWithoutWinnersInput>
    create: XOR<DrawCreateWithoutWinnersInput, DrawUncheckedCreateWithoutWinnersInput>
    where?: DrawWhereInput
  }

  export type DrawUpdateToOneWithWhereWithoutWinnersInput = {
    where?: DrawWhereInput
    data: XOR<DrawUpdateWithoutWinnersInput, DrawUncheckedUpdateWithoutWinnersInput>
  }

  export type DrawUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    numRounds?: IntFieldUpdateOperationsInput | number
    shuffleCount?: IntFieldUpdateOperationsInput | number
    usingQuantum?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promo?: PromoUpdateOneRequiredWithoutDrawsNestedInput
  }

  export type DrawUncheckedUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    promoId?: StringFieldUpdateOperationsInput | string
    numRounds?: IntFieldUpdateOperationsInput | number
    shuffleCount?: IntFieldUpdateOperationsInput | number
    usingQuantum?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntryUpsertWithoutWinnersInput = {
    update: XOR<EntryUpdateWithoutWinnersInput, EntryUncheckedUpdateWithoutWinnersInput>
    create: XOR<EntryCreateWithoutWinnersInput, EntryUncheckedCreateWithoutWinnersInput>
    where?: EntryWhereInput
  }

  export type EntryUpdateToOneWithWhereWithoutWinnersInput = {
    where?: EntryWhereInput
    data: XOR<EntryUpdateWithoutWinnersInput, EntryUncheckedUpdateWithoutWinnersInput>
  }

  export type EntryUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promo?: PromoUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type EntryUncheckedUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promoId?: StringFieldUpdateOperationsInput | string
  }

  export type EntryCreateManyPromoInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type DrawCreateManyPromoInput = {
    id?: string
    numRounds: number
    shuffleCount: number
    usingQuantum?: boolean
    createdAt?: Date | string
  }

  export type EntryUpdateWithoutPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: WinnerUpdateManyWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateWithoutPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: WinnerUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type EntryUncheckedUpdateManyWithoutPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrawUpdateWithoutPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numRounds?: IntFieldUpdateOperationsInput | number
    shuffleCount?: IntFieldUpdateOperationsInput | number
    usingQuantum?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: WinnerUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateWithoutPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numRounds?: IntFieldUpdateOperationsInput | number
    shuffleCount?: IntFieldUpdateOperationsInput | number
    usingQuantum?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: WinnerUncheckedUpdateManyWithoutDrawNestedInput
  }

  export type DrawUncheckedUpdateManyWithoutPromoInput = {
    id?: StringFieldUpdateOperationsInput | string
    numRounds?: IntFieldUpdateOperationsInput | number
    shuffleCount?: IntFieldUpdateOperationsInput | number
    usingQuantum?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerCreateManyEntryInput = {
    id?: string
    drawId: string
    rank?: number
    createdAt?: Date | string
  }

  export type WinnerUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draw?: DrawUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type WinnerUncheckedUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    drawId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerCreateManyDrawInput = {
    id?: string
    entryId: string
    rank?: number
    createdAt?: Date | string
  }

  export type WinnerUpdateWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: EntryUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type WinnerUncheckedUpdateWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyWithoutDrawInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}