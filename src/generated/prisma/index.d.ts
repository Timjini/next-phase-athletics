
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
 * Model CampProgram
 * 
 */
export type CampProgram = $Result.DefaultSelection<Prisma.$CampProgramPayload>
/**
 * Model CampSession
 * 
 */
export type CampSession = $Result.DefaultSelection<Prisma.$CampSessionPayload>
/**
 * Model Host
 * 
 */
export type Host = $Result.DefaultSelection<Prisma.$HostPayload>
/**
 * Model CampProgramHost
 * 
 */
export type CampProgramHost = $Result.DefaultSelection<Prisma.$CampProgramHostPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SessionPeriod: {
  MORNING: 'MORNING',
  AFTERNOON: 'AFTERNOON',
  EVENING: 'EVENING'
};

export type SessionPeriod = (typeof SessionPeriod)[keyof typeof SessionPeriod]


export const CampStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  FULL: 'FULL',
  CANCELLED: 'CANCELLED'
};

export type CampStatus = (typeof CampStatus)[keyof typeof CampStatus]


export const AttendanceStatus: {
  PENDING: 'PENDING',
  ATTENDED: 'ATTENDED',
  NO_SHOW: 'NO_SHOW'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentStatus: {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const UserRoles: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles]

}

export type SessionPeriod = $Enums.SessionPeriod

export const SessionPeriod: typeof $Enums.SessionPeriod

export type CampStatus = $Enums.CampStatus

export const CampStatus: typeof $Enums.CampStatus

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type UserRoles = $Enums.UserRoles

export const UserRoles: typeof $Enums.UserRoles

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CampPrograms
 * const campPrograms = await prisma.campProgram.findMany()
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
   * // Fetch zero or more CampPrograms
   * const campPrograms = await prisma.campProgram.findMany()
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
   * `prisma.campProgram`: Exposes CRUD operations for the **CampProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampPrograms
    * const campPrograms = await prisma.campProgram.findMany()
    * ```
    */
  get campProgram(): Prisma.CampProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campSession`: Exposes CRUD operations for the **CampSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampSessions
    * const campSessions = await prisma.campSession.findMany()
    * ```
    */
  get campSession(): Prisma.CampSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.host`: Exposes CRUD operations for the **Host** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hosts
    * const hosts = await prisma.host.findMany()
    * ```
    */
  get host(): Prisma.HostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campProgramHost`: Exposes CRUD operations for the **CampProgramHost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampProgramHosts
    * const campProgramHosts = await prisma.campProgramHost.findMany()
    * ```
    */
  get campProgramHost(): Prisma.CampProgramHostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    CampProgram: 'CampProgram',
    CampSession: 'CampSession',
    Host: 'Host',
    CampProgramHost: 'CampProgramHost',
    Booking: 'Booking',
    User: 'User',
    Post: 'Post',
    Company: 'Company',
    Contact: 'Contact'
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
      modelProps: "campProgram" | "campSession" | "host" | "campProgramHost" | "booking" | "user" | "post" | "company" | "contact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CampProgram: {
        payload: Prisma.$CampProgramPayload<ExtArgs>
        fields: Prisma.CampProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload>
          }
          findFirst: {
            args: Prisma.CampProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload>
          }
          findMany: {
            args: Prisma.CampProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload>[]
          }
          create: {
            args: Prisma.CampProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload>
          }
          createMany: {
            args: Prisma.CampProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload>[]
          }
          delete: {
            args: Prisma.CampProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload>
          }
          update: {
            args: Prisma.CampProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload>
          }
          deleteMany: {
            args: Prisma.CampProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload>[]
          }
          upsert: {
            args: Prisma.CampProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramPayload>
          }
          aggregate: {
            args: Prisma.CampProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampProgram>
          }
          groupBy: {
            args: Prisma.CampProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampProgramCountArgs<ExtArgs>
            result: $Utils.Optional<CampProgramCountAggregateOutputType> | number
          }
        }
      }
      CampSession: {
        payload: Prisma.$CampSessionPayload<ExtArgs>
        fields: Prisma.CampSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload>
          }
          findFirst: {
            args: Prisma.CampSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload>
          }
          findMany: {
            args: Prisma.CampSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload>[]
          }
          create: {
            args: Prisma.CampSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload>
          }
          createMany: {
            args: Prisma.CampSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload>[]
          }
          delete: {
            args: Prisma.CampSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload>
          }
          update: {
            args: Prisma.CampSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload>
          }
          deleteMany: {
            args: Prisma.CampSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload>[]
          }
          upsert: {
            args: Prisma.CampSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampSessionPayload>
          }
          aggregate: {
            args: Prisma.CampSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampSession>
          }
          groupBy: {
            args: Prisma.CampSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampSessionCountArgs<ExtArgs>
            result: $Utils.Optional<CampSessionCountAggregateOutputType> | number
          }
        }
      }
      Host: {
        payload: Prisma.$HostPayload<ExtArgs>
        fields: Prisma.HostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          findFirst: {
            args: Prisma.HostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          findMany: {
            args: Prisma.HostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>[]
          }
          create: {
            args: Prisma.HostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          createMany: {
            args: Prisma.HostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>[]
          }
          delete: {
            args: Prisma.HostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          update: {
            args: Prisma.HostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          deleteMany: {
            args: Prisma.HostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>[]
          }
          upsert: {
            args: Prisma.HostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostPayload>
          }
          aggregate: {
            args: Prisma.HostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHost>
          }
          groupBy: {
            args: Prisma.HostGroupByArgs<ExtArgs>
            result: $Utils.Optional<HostGroupByOutputType>[]
          }
          count: {
            args: Prisma.HostCountArgs<ExtArgs>
            result: $Utils.Optional<HostCountAggregateOutputType> | number
          }
        }
      }
      CampProgramHost: {
        payload: Prisma.$CampProgramHostPayload<ExtArgs>
        fields: Prisma.CampProgramHostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampProgramHostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampProgramHostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload>
          }
          findFirst: {
            args: Prisma.CampProgramHostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampProgramHostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload>
          }
          findMany: {
            args: Prisma.CampProgramHostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload>[]
          }
          create: {
            args: Prisma.CampProgramHostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload>
          }
          createMany: {
            args: Prisma.CampProgramHostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampProgramHostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload>[]
          }
          delete: {
            args: Prisma.CampProgramHostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload>
          }
          update: {
            args: Prisma.CampProgramHostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload>
          }
          deleteMany: {
            args: Prisma.CampProgramHostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampProgramHostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampProgramHostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload>[]
          }
          upsert: {
            args: Prisma.CampProgramHostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampProgramHostPayload>
          }
          aggregate: {
            args: Prisma.CampProgramHostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampProgramHost>
          }
          groupBy: {
            args: Prisma.CampProgramHostGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampProgramHostGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampProgramHostCountArgs<ExtArgs>
            result: $Utils.Optional<CampProgramHostCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
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
    campProgram?: CampProgramOmit
    campSession?: CampSessionOmit
    host?: HostOmit
    campProgramHost?: CampProgramHostOmit
    booking?: BookingOmit
    user?: UserOmit
    post?: PostOmit
    company?: CompanyOmit
    contact?: ContactOmit
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
   * Count Type CampProgramCountOutputType
   */

  export type CampProgramCountOutputType = {
    sessions: number
    hosts: number
  }

  export type CampProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | CampProgramCountOutputTypeCountSessionsArgs
    hosts?: boolean | CampProgramCountOutputTypeCountHostsArgs
  }

  // Custom InputTypes
  /**
   * CampProgramCountOutputType without action
   */
  export type CampProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramCountOutputType
     */
    select?: CampProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampProgramCountOutputType without action
   */
  export type CampProgramCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampSessionWhereInput
  }

  /**
   * CampProgramCountOutputType without action
   */
  export type CampProgramCountOutputTypeCountHostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampProgramHostWhereInput
  }


  /**
   * Count Type CampSessionCountOutputType
   */

  export type CampSessionCountOutputType = {
    bookings: number
  }

  export type CampSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CampSessionCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CampSessionCountOutputType without action
   */
  export type CampSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSessionCountOutputType
     */
    select?: CampSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampSessionCountOutputType without action
   */
  export type CampSessionCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type HostCountOutputType
   */

  export type HostCountOutputType = {
    campPrograms: number
  }

  export type HostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campPrograms?: boolean | HostCountOutputTypeCountCampProgramsArgs
  }

  // Custom InputTypes
  /**
   * HostCountOutputType without action
   */
  export type HostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostCountOutputType
     */
    select?: HostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HostCountOutputType without action
   */
  export type HostCountOutputTypeCountCampProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampProgramHostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CampProgram
   */

  export type AggregateCampProgram = {
    _count: CampProgramCountAggregateOutputType | null
    _avg: CampProgramAvgAggregateOutputType | null
    _sum: CampProgramSumAggregateOutputType | null
    _min: CampProgramMinAggregateOutputType | null
    _max: CampProgramMaxAggregateOutputType | null
  }

  export type CampProgramAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type CampProgramSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type CampProgramMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    videoUrl: string | null
    slug: string | null
    location: string | null
    lat: number | null
    lng: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampProgramMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    videoUrl: string | null
    slug: string | null
    location: string | null
    lat: number | null
    lng: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampProgramCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    videoUrl: number
    slug: number
    location: number
    lat: number
    lng: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampProgramAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type CampProgramSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type CampProgramMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    videoUrl?: true
    slug?: true
    location?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampProgramMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    videoUrl?: true
    slug?: true
    location?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampProgramCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    videoUrl?: true
    slug?: true
    location?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampProgram to aggregate.
     */
    where?: CampProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampPrograms to fetch.
     */
    orderBy?: CampProgramOrderByWithRelationInput | CampProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampPrograms
    **/
    _count?: true | CampProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampProgramMaxAggregateInputType
  }

  export type GetCampProgramAggregateType<T extends CampProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateCampProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampProgram[P]>
      : GetScalarType<T[P], AggregateCampProgram[P]>
  }




  export type CampProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampProgramWhereInput
    orderBy?: CampProgramOrderByWithAggregationInput | CampProgramOrderByWithAggregationInput[]
    by: CampProgramScalarFieldEnum[] | CampProgramScalarFieldEnum
    having?: CampProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampProgramCountAggregateInputType | true
    _avg?: CampProgramAvgAggregateInputType
    _sum?: CampProgramSumAggregateInputType
    _min?: CampProgramMinAggregateInputType
    _max?: CampProgramMaxAggregateInputType
  }

  export type CampProgramGroupByOutputType = {
    id: string
    title: string
    description: string | null
    imageUrl: string | null
    videoUrl: string | null
    slug: string
    location: string
    lat: number
    lng: number
    createdAt: Date
    updatedAt: Date
    _count: CampProgramCountAggregateOutputType | null
    _avg: CampProgramAvgAggregateOutputType | null
    _sum: CampProgramSumAggregateOutputType | null
    _min: CampProgramMinAggregateOutputType | null
    _max: CampProgramMaxAggregateOutputType | null
  }

  type GetCampProgramGroupByPayload<T extends CampProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampProgramGroupByOutputType[P]>
            : GetScalarType<T[P], CampProgramGroupByOutputType[P]>
        }
      >
    >


  export type CampProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    slug?: boolean
    location?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | CampProgram$sessionsArgs<ExtArgs>
    hosts?: boolean | CampProgram$hostsArgs<ExtArgs>
    _count?: boolean | CampProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campProgram"]>

  export type CampProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    slug?: boolean
    location?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campProgram"]>

  export type CampProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    slug?: boolean
    location?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campProgram"]>

  export type CampProgramSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    slug?: boolean
    location?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "videoUrl" | "slug" | "location" | "lat" | "lng" | "createdAt" | "updatedAt", ExtArgs["result"]["campProgram"]>
  export type CampProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | CampProgram$sessionsArgs<ExtArgs>
    hosts?: boolean | CampProgram$hostsArgs<ExtArgs>
    _count?: boolean | CampProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampProgram"
    objects: {
      sessions: Prisma.$CampSessionPayload<ExtArgs>[]
      hosts: Prisma.$CampProgramHostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      imageUrl: string | null
      videoUrl: string | null
      slug: string
      location: string
      lat: number
      lng: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campProgram"]>
    composites: {}
  }

  type CampProgramGetPayload<S extends boolean | null | undefined | CampProgramDefaultArgs> = $Result.GetResult<Prisma.$CampProgramPayload, S>

  type CampProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampProgramCountAggregateInputType | true
    }

  export interface CampProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampProgram'], meta: { name: 'CampProgram' } }
    /**
     * Find zero or one CampProgram that matches the filter.
     * @param {CampProgramFindUniqueArgs} args - Arguments to find a CampProgram
     * @example
     * // Get one CampProgram
     * const campProgram = await prisma.campProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampProgramFindUniqueArgs>(args: SelectSubset<T, CampProgramFindUniqueArgs<ExtArgs>>): Prisma__CampProgramClient<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampProgram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampProgramFindUniqueOrThrowArgs} args - Arguments to find a CampProgram
     * @example
     * // Get one CampProgram
     * const campProgram = await prisma.campProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, CampProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampProgramClient<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramFindFirstArgs} args - Arguments to find a CampProgram
     * @example
     * // Get one CampProgram
     * const campProgram = await prisma.campProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampProgramFindFirstArgs>(args?: SelectSubset<T, CampProgramFindFirstArgs<ExtArgs>>): Prisma__CampProgramClient<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramFindFirstOrThrowArgs} args - Arguments to find a CampProgram
     * @example
     * // Get one CampProgram
     * const campProgram = await prisma.campProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, CampProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampProgramClient<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampPrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampPrograms
     * const campPrograms = await prisma.campProgram.findMany()
     * 
     * // Get first 10 CampPrograms
     * const campPrograms = await prisma.campProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campProgramWithIdOnly = await prisma.campProgram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampProgramFindManyArgs>(args?: SelectSubset<T, CampProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampProgram.
     * @param {CampProgramCreateArgs} args - Arguments to create a CampProgram.
     * @example
     * // Create one CampProgram
     * const CampProgram = await prisma.campProgram.create({
     *   data: {
     *     // ... data to create a CampProgram
     *   }
     * })
     * 
     */
    create<T extends CampProgramCreateArgs>(args: SelectSubset<T, CampProgramCreateArgs<ExtArgs>>): Prisma__CampProgramClient<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampPrograms.
     * @param {CampProgramCreateManyArgs} args - Arguments to create many CampPrograms.
     * @example
     * // Create many CampPrograms
     * const campProgram = await prisma.campProgram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampProgramCreateManyArgs>(args?: SelectSubset<T, CampProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampPrograms and returns the data saved in the database.
     * @param {CampProgramCreateManyAndReturnArgs} args - Arguments to create many CampPrograms.
     * @example
     * // Create many CampPrograms
     * const campProgram = await prisma.campProgram.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampPrograms and only return the `id`
     * const campProgramWithIdOnly = await prisma.campProgram.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, CampProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampProgram.
     * @param {CampProgramDeleteArgs} args - Arguments to delete one CampProgram.
     * @example
     * // Delete one CampProgram
     * const CampProgram = await prisma.campProgram.delete({
     *   where: {
     *     // ... filter to delete one CampProgram
     *   }
     * })
     * 
     */
    delete<T extends CampProgramDeleteArgs>(args: SelectSubset<T, CampProgramDeleteArgs<ExtArgs>>): Prisma__CampProgramClient<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampProgram.
     * @param {CampProgramUpdateArgs} args - Arguments to update one CampProgram.
     * @example
     * // Update one CampProgram
     * const campProgram = await prisma.campProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampProgramUpdateArgs>(args: SelectSubset<T, CampProgramUpdateArgs<ExtArgs>>): Prisma__CampProgramClient<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampPrograms.
     * @param {CampProgramDeleteManyArgs} args - Arguments to filter CampPrograms to delete.
     * @example
     * // Delete a few CampPrograms
     * const { count } = await prisma.campProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampProgramDeleteManyArgs>(args?: SelectSubset<T, CampProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampPrograms
     * const campProgram = await prisma.campProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampProgramUpdateManyArgs>(args: SelectSubset<T, CampProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampPrograms and returns the data updated in the database.
     * @param {CampProgramUpdateManyAndReturnArgs} args - Arguments to update many CampPrograms.
     * @example
     * // Update many CampPrograms
     * const campProgram = await prisma.campProgram.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampPrograms and only return the `id`
     * const campProgramWithIdOnly = await prisma.campProgram.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, CampProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampProgram.
     * @param {CampProgramUpsertArgs} args - Arguments to update or create a CampProgram.
     * @example
     * // Update or create a CampProgram
     * const campProgram = await prisma.campProgram.upsert({
     *   create: {
     *     // ... data to create a CampProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampProgram we want to update
     *   }
     * })
     */
    upsert<T extends CampProgramUpsertArgs>(args: SelectSubset<T, CampProgramUpsertArgs<ExtArgs>>): Prisma__CampProgramClient<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramCountArgs} args - Arguments to filter CampPrograms to count.
     * @example
     * // Count the number of CampPrograms
     * const count = await prisma.campProgram.count({
     *   where: {
     *     // ... the filter for the CampPrograms we want to count
     *   }
     * })
    **/
    count<T extends CampProgramCountArgs>(
      args?: Subset<T, CampProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampProgramAggregateArgs>(args: Subset<T, CampProgramAggregateArgs>): Prisma.PrismaPromise<GetCampProgramAggregateType<T>>

    /**
     * Group by CampProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramGroupByArgs} args - Group by arguments.
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
      T extends CampProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampProgramGroupByArgs['orderBy'] }
        : { orderBy?: CampProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampProgram model
   */
  readonly fields: CampProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends CampProgram$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, CampProgram$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hosts<T extends CampProgram$hostsArgs<ExtArgs> = {}>(args?: Subset<T, CampProgram$hostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CampProgram model
   */
  interface CampProgramFieldRefs {
    readonly id: FieldRef<"CampProgram", 'String'>
    readonly title: FieldRef<"CampProgram", 'String'>
    readonly description: FieldRef<"CampProgram", 'String'>
    readonly imageUrl: FieldRef<"CampProgram", 'String'>
    readonly videoUrl: FieldRef<"CampProgram", 'String'>
    readonly slug: FieldRef<"CampProgram", 'String'>
    readonly location: FieldRef<"CampProgram", 'String'>
    readonly lat: FieldRef<"CampProgram", 'Float'>
    readonly lng: FieldRef<"CampProgram", 'Float'>
    readonly createdAt: FieldRef<"CampProgram", 'DateTime'>
    readonly updatedAt: FieldRef<"CampProgram", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampProgram findUnique
   */
  export type CampProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramInclude<ExtArgs> | null
    /**
     * Filter, which CampProgram to fetch.
     */
    where: CampProgramWhereUniqueInput
  }

  /**
   * CampProgram findUniqueOrThrow
   */
  export type CampProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramInclude<ExtArgs> | null
    /**
     * Filter, which CampProgram to fetch.
     */
    where: CampProgramWhereUniqueInput
  }

  /**
   * CampProgram findFirst
   */
  export type CampProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramInclude<ExtArgs> | null
    /**
     * Filter, which CampProgram to fetch.
     */
    where?: CampProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampPrograms to fetch.
     */
    orderBy?: CampProgramOrderByWithRelationInput | CampProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampPrograms.
     */
    cursor?: CampProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampPrograms.
     */
    distinct?: CampProgramScalarFieldEnum | CampProgramScalarFieldEnum[]
  }

  /**
   * CampProgram findFirstOrThrow
   */
  export type CampProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramInclude<ExtArgs> | null
    /**
     * Filter, which CampProgram to fetch.
     */
    where?: CampProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampPrograms to fetch.
     */
    orderBy?: CampProgramOrderByWithRelationInput | CampProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampPrograms.
     */
    cursor?: CampProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampPrograms.
     */
    distinct?: CampProgramScalarFieldEnum | CampProgramScalarFieldEnum[]
  }

  /**
   * CampProgram findMany
   */
  export type CampProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramInclude<ExtArgs> | null
    /**
     * Filter, which CampPrograms to fetch.
     */
    where?: CampProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampPrograms to fetch.
     */
    orderBy?: CampProgramOrderByWithRelationInput | CampProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampPrograms.
     */
    cursor?: CampProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampPrograms.
     */
    skip?: number
    distinct?: CampProgramScalarFieldEnum | CampProgramScalarFieldEnum[]
  }

  /**
   * CampProgram create
   */
  export type CampProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a CampProgram.
     */
    data: XOR<CampProgramCreateInput, CampProgramUncheckedCreateInput>
  }

  /**
   * CampProgram createMany
   */
  export type CampProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampPrograms.
     */
    data: CampProgramCreateManyInput | CampProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampProgram createManyAndReturn
   */
  export type CampProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * The data used to create many CampPrograms.
     */
    data: CampProgramCreateManyInput | CampProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampProgram update
   */
  export type CampProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a CampProgram.
     */
    data: XOR<CampProgramUpdateInput, CampProgramUncheckedUpdateInput>
    /**
     * Choose, which CampProgram to update.
     */
    where: CampProgramWhereUniqueInput
  }

  /**
   * CampProgram updateMany
   */
  export type CampProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampPrograms.
     */
    data: XOR<CampProgramUpdateManyMutationInput, CampProgramUncheckedUpdateManyInput>
    /**
     * Filter which CampPrograms to update
     */
    where?: CampProgramWhereInput
    /**
     * Limit how many CampPrograms to update.
     */
    limit?: number
  }

  /**
   * CampProgram updateManyAndReturn
   */
  export type CampProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * The data used to update CampPrograms.
     */
    data: XOR<CampProgramUpdateManyMutationInput, CampProgramUncheckedUpdateManyInput>
    /**
     * Filter which CampPrograms to update
     */
    where?: CampProgramWhereInput
    /**
     * Limit how many CampPrograms to update.
     */
    limit?: number
  }

  /**
   * CampProgram upsert
   */
  export type CampProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the CampProgram to update in case it exists.
     */
    where: CampProgramWhereUniqueInput
    /**
     * In case the CampProgram found by the `where` argument doesn't exist, create a new CampProgram with this data.
     */
    create: XOR<CampProgramCreateInput, CampProgramUncheckedCreateInput>
    /**
     * In case the CampProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampProgramUpdateInput, CampProgramUncheckedUpdateInput>
  }

  /**
   * CampProgram delete
   */
  export type CampProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramInclude<ExtArgs> | null
    /**
     * Filter which CampProgram to delete.
     */
    where: CampProgramWhereUniqueInput
  }

  /**
   * CampProgram deleteMany
   */
  export type CampProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampPrograms to delete
     */
    where?: CampProgramWhereInput
    /**
     * Limit how many CampPrograms to delete.
     */
    limit?: number
  }

  /**
   * CampProgram.sessions
   */
  export type CampProgram$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
    where?: CampSessionWhereInput
    orderBy?: CampSessionOrderByWithRelationInput | CampSessionOrderByWithRelationInput[]
    cursor?: CampSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampSessionScalarFieldEnum | CampSessionScalarFieldEnum[]
  }

  /**
   * CampProgram.hosts
   */
  export type CampProgram$hostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    where?: CampProgramHostWhereInput
    orderBy?: CampProgramHostOrderByWithRelationInput | CampProgramHostOrderByWithRelationInput[]
    cursor?: CampProgramHostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampProgramHostScalarFieldEnum | CampProgramHostScalarFieldEnum[]
  }

  /**
   * CampProgram without action
   */
  export type CampProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgram
     */
    select?: CampProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgram
     */
    omit?: CampProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramInclude<ExtArgs> | null
  }


  /**
   * Model CampSession
   */

  export type AggregateCampSession = {
    _count: CampSessionCountAggregateOutputType | null
    _avg: CampSessionAvgAggregateOutputType | null
    _sum: CampSessionSumAggregateOutputType | null
    _min: CampSessionMinAggregateOutputType | null
    _max: CampSessionMaxAggregateOutputType | null
  }

  export type CampSessionAvgAggregateOutputType = {
    priority: number | null
    availableSlots: number | null
    price: number | null
  }

  export type CampSessionSumAggregateOutputType = {
    priority: number | null
    availableSlots: number | null
    price: number | null
  }

  export type CampSessionMinAggregateOutputType = {
    id: string | null
    label: string | null
    priority: number | null
    startDate: Date | null
    startDateString: string | null
    endDateString: string | null
    endDate: Date | null
    period: $Enums.SessionPeriod | null
    availableSlots: number | null
    price: number | null
    status: $Enums.CampStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    campProgramId: string | null
  }

  export type CampSessionMaxAggregateOutputType = {
    id: string | null
    label: string | null
    priority: number | null
    startDate: Date | null
    startDateString: string | null
    endDateString: string | null
    endDate: Date | null
    period: $Enums.SessionPeriod | null
    availableSlots: number | null
    price: number | null
    status: $Enums.CampStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    campProgramId: string | null
  }

  export type CampSessionCountAggregateOutputType = {
    id: number
    label: number
    priority: number
    startDate: number
    startDateString: number
    endDateString: number
    endDate: number
    period: number
    availableSlots: number
    price: number
    status: number
    createdAt: number
    updatedAt: number
    campProgramId: number
    _all: number
  }


  export type CampSessionAvgAggregateInputType = {
    priority?: true
    availableSlots?: true
    price?: true
  }

  export type CampSessionSumAggregateInputType = {
    priority?: true
    availableSlots?: true
    price?: true
  }

  export type CampSessionMinAggregateInputType = {
    id?: true
    label?: true
    priority?: true
    startDate?: true
    startDateString?: true
    endDateString?: true
    endDate?: true
    period?: true
    availableSlots?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campProgramId?: true
  }

  export type CampSessionMaxAggregateInputType = {
    id?: true
    label?: true
    priority?: true
    startDate?: true
    startDateString?: true
    endDateString?: true
    endDate?: true
    period?: true
    availableSlots?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campProgramId?: true
  }

  export type CampSessionCountAggregateInputType = {
    id?: true
    label?: true
    priority?: true
    startDate?: true
    startDateString?: true
    endDateString?: true
    endDate?: true
    period?: true
    availableSlots?: true
    price?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    campProgramId?: true
    _all?: true
  }

  export type CampSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampSession to aggregate.
     */
    where?: CampSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampSessions to fetch.
     */
    orderBy?: CampSessionOrderByWithRelationInput | CampSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampSessions
    **/
    _count?: true | CampSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampSessionMaxAggregateInputType
  }

  export type GetCampSessionAggregateType<T extends CampSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateCampSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampSession[P]>
      : GetScalarType<T[P], AggregateCampSession[P]>
  }




  export type CampSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampSessionWhereInput
    orderBy?: CampSessionOrderByWithAggregationInput | CampSessionOrderByWithAggregationInput[]
    by: CampSessionScalarFieldEnum[] | CampSessionScalarFieldEnum
    having?: CampSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampSessionCountAggregateInputType | true
    _avg?: CampSessionAvgAggregateInputType
    _sum?: CampSessionSumAggregateInputType
    _min?: CampSessionMinAggregateInputType
    _max?: CampSessionMaxAggregateInputType
  }

  export type CampSessionGroupByOutputType = {
    id: string
    label: string
    priority: number
    startDate: Date
    startDateString: string
    endDateString: string
    endDate: Date
    period: $Enums.SessionPeriod
    availableSlots: number
    price: number
    status: $Enums.CampStatus
    createdAt: Date
    updatedAt: Date
    campProgramId: string
    _count: CampSessionCountAggregateOutputType | null
    _avg: CampSessionAvgAggregateOutputType | null
    _sum: CampSessionSumAggregateOutputType | null
    _min: CampSessionMinAggregateOutputType | null
    _max: CampSessionMaxAggregateOutputType | null
  }

  type GetCampSessionGroupByPayload<T extends CampSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampSessionGroupByOutputType[P]>
            : GetScalarType<T[P], CampSessionGroupByOutputType[P]>
        }
      >
    >


  export type CampSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    priority?: boolean
    startDate?: boolean
    startDateString?: boolean
    endDateString?: boolean
    endDate?: boolean
    period?: boolean
    availableSlots?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campProgramId?: boolean
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
    bookings?: boolean | CampSession$bookingsArgs<ExtArgs>
    _count?: boolean | CampSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campSession"]>

  export type CampSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    priority?: boolean
    startDate?: boolean
    startDateString?: boolean
    endDateString?: boolean
    endDate?: boolean
    period?: boolean
    availableSlots?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campProgramId?: boolean
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campSession"]>

  export type CampSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    priority?: boolean
    startDate?: boolean
    startDateString?: boolean
    endDateString?: boolean
    endDate?: boolean
    period?: boolean
    availableSlots?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campProgramId?: boolean
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campSession"]>

  export type CampSessionSelectScalar = {
    id?: boolean
    label?: boolean
    priority?: boolean
    startDate?: boolean
    startDateString?: boolean
    endDateString?: boolean
    endDate?: boolean
    period?: boolean
    availableSlots?: boolean
    price?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campProgramId?: boolean
  }

  export type CampSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "priority" | "startDate" | "startDateString" | "endDateString" | "endDate" | "period" | "availableSlots" | "price" | "status" | "createdAt" | "updatedAt" | "campProgramId", ExtArgs["result"]["campSession"]>
  export type CampSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
    bookings?: boolean | CampSession$bookingsArgs<ExtArgs>
    _count?: boolean | CampSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
  }
  export type CampSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
  }

  export type $CampSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampSession"
    objects: {
      campProgram: Prisma.$CampProgramPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      priority: number
      startDate: Date
      startDateString: string
      endDateString: string
      endDate: Date
      period: $Enums.SessionPeriod
      availableSlots: number
      price: number
      status: $Enums.CampStatus
      createdAt: Date
      updatedAt: Date
      campProgramId: string
    }, ExtArgs["result"]["campSession"]>
    composites: {}
  }

  type CampSessionGetPayload<S extends boolean | null | undefined | CampSessionDefaultArgs> = $Result.GetResult<Prisma.$CampSessionPayload, S>

  type CampSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampSessionCountAggregateInputType | true
    }

  export interface CampSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampSession'], meta: { name: 'CampSession' } }
    /**
     * Find zero or one CampSession that matches the filter.
     * @param {CampSessionFindUniqueArgs} args - Arguments to find a CampSession
     * @example
     * // Get one CampSession
     * const campSession = await prisma.campSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampSessionFindUniqueArgs>(args: SelectSubset<T, CampSessionFindUniqueArgs<ExtArgs>>): Prisma__CampSessionClient<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampSessionFindUniqueOrThrowArgs} args - Arguments to find a CampSession
     * @example
     * // Get one CampSession
     * const campSession = await prisma.campSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, CampSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampSessionClient<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampSessionFindFirstArgs} args - Arguments to find a CampSession
     * @example
     * // Get one CampSession
     * const campSession = await prisma.campSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampSessionFindFirstArgs>(args?: SelectSubset<T, CampSessionFindFirstArgs<ExtArgs>>): Prisma__CampSessionClient<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampSessionFindFirstOrThrowArgs} args - Arguments to find a CampSession
     * @example
     * // Get one CampSession
     * const campSession = await prisma.campSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, CampSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampSessionClient<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampSessions
     * const campSessions = await prisma.campSession.findMany()
     * 
     * // Get first 10 CampSessions
     * const campSessions = await prisma.campSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campSessionWithIdOnly = await prisma.campSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampSessionFindManyArgs>(args?: SelectSubset<T, CampSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampSession.
     * @param {CampSessionCreateArgs} args - Arguments to create a CampSession.
     * @example
     * // Create one CampSession
     * const CampSession = await prisma.campSession.create({
     *   data: {
     *     // ... data to create a CampSession
     *   }
     * })
     * 
     */
    create<T extends CampSessionCreateArgs>(args: SelectSubset<T, CampSessionCreateArgs<ExtArgs>>): Prisma__CampSessionClient<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampSessions.
     * @param {CampSessionCreateManyArgs} args - Arguments to create many CampSessions.
     * @example
     * // Create many CampSessions
     * const campSession = await prisma.campSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampSessionCreateManyArgs>(args?: SelectSubset<T, CampSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampSessions and returns the data saved in the database.
     * @param {CampSessionCreateManyAndReturnArgs} args - Arguments to create many CampSessions.
     * @example
     * // Create many CampSessions
     * const campSession = await prisma.campSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampSessions and only return the `id`
     * const campSessionWithIdOnly = await prisma.campSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, CampSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampSession.
     * @param {CampSessionDeleteArgs} args - Arguments to delete one CampSession.
     * @example
     * // Delete one CampSession
     * const CampSession = await prisma.campSession.delete({
     *   where: {
     *     // ... filter to delete one CampSession
     *   }
     * })
     * 
     */
    delete<T extends CampSessionDeleteArgs>(args: SelectSubset<T, CampSessionDeleteArgs<ExtArgs>>): Prisma__CampSessionClient<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampSession.
     * @param {CampSessionUpdateArgs} args - Arguments to update one CampSession.
     * @example
     * // Update one CampSession
     * const campSession = await prisma.campSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampSessionUpdateArgs>(args: SelectSubset<T, CampSessionUpdateArgs<ExtArgs>>): Prisma__CampSessionClient<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampSessions.
     * @param {CampSessionDeleteManyArgs} args - Arguments to filter CampSessions to delete.
     * @example
     * // Delete a few CampSessions
     * const { count } = await prisma.campSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampSessionDeleteManyArgs>(args?: SelectSubset<T, CampSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampSessions
     * const campSession = await prisma.campSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampSessionUpdateManyArgs>(args: SelectSubset<T, CampSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampSessions and returns the data updated in the database.
     * @param {CampSessionUpdateManyAndReturnArgs} args - Arguments to update many CampSessions.
     * @example
     * // Update many CampSessions
     * const campSession = await prisma.campSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampSessions and only return the `id`
     * const campSessionWithIdOnly = await prisma.campSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, CampSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampSession.
     * @param {CampSessionUpsertArgs} args - Arguments to update or create a CampSession.
     * @example
     * // Update or create a CampSession
     * const campSession = await prisma.campSession.upsert({
     *   create: {
     *     // ... data to create a CampSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampSession we want to update
     *   }
     * })
     */
    upsert<T extends CampSessionUpsertArgs>(args: SelectSubset<T, CampSessionUpsertArgs<ExtArgs>>): Prisma__CampSessionClient<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampSessionCountArgs} args - Arguments to filter CampSessions to count.
     * @example
     * // Count the number of CampSessions
     * const count = await prisma.campSession.count({
     *   where: {
     *     // ... the filter for the CampSessions we want to count
     *   }
     * })
    **/
    count<T extends CampSessionCountArgs>(
      args?: Subset<T, CampSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampSessionAggregateArgs>(args: Subset<T, CampSessionAggregateArgs>): Prisma.PrismaPromise<GetCampSessionAggregateType<T>>

    /**
     * Group by CampSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampSessionGroupByArgs} args - Group by arguments.
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
      T extends CampSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampSessionGroupByArgs['orderBy'] }
        : { orderBy?: CampSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampSession model
   */
  readonly fields: CampSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campProgram<T extends CampProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampProgramDefaultArgs<ExtArgs>>): Prisma__CampProgramClient<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends CampSession$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, CampSession$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CampSession model
   */
  interface CampSessionFieldRefs {
    readonly id: FieldRef<"CampSession", 'String'>
    readonly label: FieldRef<"CampSession", 'String'>
    readonly priority: FieldRef<"CampSession", 'Int'>
    readonly startDate: FieldRef<"CampSession", 'DateTime'>
    readonly startDateString: FieldRef<"CampSession", 'String'>
    readonly endDateString: FieldRef<"CampSession", 'String'>
    readonly endDate: FieldRef<"CampSession", 'DateTime'>
    readonly period: FieldRef<"CampSession", 'SessionPeriod'>
    readonly availableSlots: FieldRef<"CampSession", 'Int'>
    readonly price: FieldRef<"CampSession", 'Float'>
    readonly status: FieldRef<"CampSession", 'CampStatus'>
    readonly createdAt: FieldRef<"CampSession", 'DateTime'>
    readonly updatedAt: FieldRef<"CampSession", 'DateTime'>
    readonly campProgramId: FieldRef<"CampSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CampSession findUnique
   */
  export type CampSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
    /**
     * Filter, which CampSession to fetch.
     */
    where: CampSessionWhereUniqueInput
  }

  /**
   * CampSession findUniqueOrThrow
   */
  export type CampSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
    /**
     * Filter, which CampSession to fetch.
     */
    where: CampSessionWhereUniqueInput
  }

  /**
   * CampSession findFirst
   */
  export type CampSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
    /**
     * Filter, which CampSession to fetch.
     */
    where?: CampSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampSessions to fetch.
     */
    orderBy?: CampSessionOrderByWithRelationInput | CampSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampSessions.
     */
    cursor?: CampSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampSessions.
     */
    distinct?: CampSessionScalarFieldEnum | CampSessionScalarFieldEnum[]
  }

  /**
   * CampSession findFirstOrThrow
   */
  export type CampSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
    /**
     * Filter, which CampSession to fetch.
     */
    where?: CampSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampSessions to fetch.
     */
    orderBy?: CampSessionOrderByWithRelationInput | CampSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampSessions.
     */
    cursor?: CampSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampSessions.
     */
    distinct?: CampSessionScalarFieldEnum | CampSessionScalarFieldEnum[]
  }

  /**
   * CampSession findMany
   */
  export type CampSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
    /**
     * Filter, which CampSessions to fetch.
     */
    where?: CampSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampSessions to fetch.
     */
    orderBy?: CampSessionOrderByWithRelationInput | CampSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampSessions.
     */
    cursor?: CampSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampSessions.
     */
    skip?: number
    distinct?: CampSessionScalarFieldEnum | CampSessionScalarFieldEnum[]
  }

  /**
   * CampSession create
   */
  export type CampSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a CampSession.
     */
    data: XOR<CampSessionCreateInput, CampSessionUncheckedCreateInput>
  }

  /**
   * CampSession createMany
   */
  export type CampSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampSessions.
     */
    data: CampSessionCreateManyInput | CampSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampSession createManyAndReturn
   */
  export type CampSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * The data used to create many CampSessions.
     */
    data: CampSessionCreateManyInput | CampSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampSession update
   */
  export type CampSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a CampSession.
     */
    data: XOR<CampSessionUpdateInput, CampSessionUncheckedUpdateInput>
    /**
     * Choose, which CampSession to update.
     */
    where: CampSessionWhereUniqueInput
  }

  /**
   * CampSession updateMany
   */
  export type CampSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampSessions.
     */
    data: XOR<CampSessionUpdateManyMutationInput, CampSessionUncheckedUpdateManyInput>
    /**
     * Filter which CampSessions to update
     */
    where?: CampSessionWhereInput
    /**
     * Limit how many CampSessions to update.
     */
    limit?: number
  }

  /**
   * CampSession updateManyAndReturn
   */
  export type CampSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * The data used to update CampSessions.
     */
    data: XOR<CampSessionUpdateManyMutationInput, CampSessionUncheckedUpdateManyInput>
    /**
     * Filter which CampSessions to update
     */
    where?: CampSessionWhereInput
    /**
     * Limit how many CampSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampSession upsert
   */
  export type CampSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the CampSession to update in case it exists.
     */
    where: CampSessionWhereUniqueInput
    /**
     * In case the CampSession found by the `where` argument doesn't exist, create a new CampSession with this data.
     */
    create: XOR<CampSessionCreateInput, CampSessionUncheckedCreateInput>
    /**
     * In case the CampSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampSessionUpdateInput, CampSessionUncheckedUpdateInput>
  }

  /**
   * CampSession delete
   */
  export type CampSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
    /**
     * Filter which CampSession to delete.
     */
    where: CampSessionWhereUniqueInput
  }

  /**
   * CampSession deleteMany
   */
  export type CampSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampSessions to delete
     */
    where?: CampSessionWhereInput
    /**
     * Limit how many CampSessions to delete.
     */
    limit?: number
  }

  /**
   * CampSession.bookings
   */
  export type CampSession$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * CampSession without action
   */
  export type CampSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampSession
     */
    select?: CampSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampSession
     */
    omit?: CampSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampSessionInclude<ExtArgs> | null
  }


  /**
   * Model Host
   */

  export type AggregateHost = {
    _count: HostCountAggregateOutputType | null
    _min: HostMinAggregateOutputType | null
    _max: HostMaxAggregateOutputType | null
  }

  export type HostMinAggregateOutputType = {
    id: string | null
    name: string | null
    bio: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HostMaxAggregateOutputType = {
    id: string | null
    name: string | null
    bio: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HostCountAggregateOutputType = {
    id: number
    name: number
    bio: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HostMinAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HostMaxAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HostCountAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Host to aggregate.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hosts
    **/
    _count?: true | HostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HostMaxAggregateInputType
  }

  export type GetHostAggregateType<T extends HostAggregateArgs> = {
        [P in keyof T & keyof AggregateHost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHost[P]>
      : GetScalarType<T[P], AggregateHost[P]>
  }




  export type HostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HostWhereInput
    orderBy?: HostOrderByWithAggregationInput | HostOrderByWithAggregationInput[]
    by: HostScalarFieldEnum[] | HostScalarFieldEnum
    having?: HostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HostCountAggregateInputType | true
    _min?: HostMinAggregateInputType
    _max?: HostMaxAggregateInputType
  }

  export type HostGroupByOutputType = {
    id: string
    name: string
    bio: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: HostCountAggregateOutputType | null
    _min: HostMinAggregateOutputType | null
    _max: HostMaxAggregateOutputType | null
  }

  type GetHostGroupByPayload<T extends HostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HostGroupByOutputType[P]>
            : GetScalarType<T[P], HostGroupByOutputType[P]>
        }
      >
    >


  export type HostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campPrograms?: boolean | Host$campProgramsArgs<ExtArgs>
    _count?: boolean | HostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["host"]>

  export type HostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["host"]>

  export type HostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["host"]>

  export type HostSelectScalar = {
    id?: boolean
    name?: boolean
    bio?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bio" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["host"]>
  export type HostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campPrograms?: boolean | Host$campProgramsArgs<ExtArgs>
    _count?: boolean | HostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Host"
    objects: {
      campPrograms: Prisma.$CampProgramHostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      bio: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["host"]>
    composites: {}
  }

  type HostGetPayload<S extends boolean | null | undefined | HostDefaultArgs> = $Result.GetResult<Prisma.$HostPayload, S>

  type HostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HostCountAggregateInputType | true
    }

  export interface HostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Host'], meta: { name: 'Host' } }
    /**
     * Find zero or one Host that matches the filter.
     * @param {HostFindUniqueArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HostFindUniqueArgs>(args: SelectSubset<T, HostFindUniqueArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Host that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HostFindUniqueOrThrowArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HostFindUniqueOrThrowArgs>(args: SelectSubset<T, HostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Host that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindFirstArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HostFindFirstArgs>(args?: SelectSubset<T, HostFindFirstArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Host that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindFirstOrThrowArgs} args - Arguments to find a Host
     * @example
     * // Get one Host
     * const host = await prisma.host.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HostFindFirstOrThrowArgs>(args?: SelectSubset<T, HostFindFirstOrThrowArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hosts
     * const hosts = await prisma.host.findMany()
     * 
     * // Get first 10 Hosts
     * const hosts = await prisma.host.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hostWithIdOnly = await prisma.host.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HostFindManyArgs>(args?: SelectSubset<T, HostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Host.
     * @param {HostCreateArgs} args - Arguments to create a Host.
     * @example
     * // Create one Host
     * const Host = await prisma.host.create({
     *   data: {
     *     // ... data to create a Host
     *   }
     * })
     * 
     */
    create<T extends HostCreateArgs>(args: SelectSubset<T, HostCreateArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hosts.
     * @param {HostCreateManyArgs} args - Arguments to create many Hosts.
     * @example
     * // Create many Hosts
     * const host = await prisma.host.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HostCreateManyArgs>(args?: SelectSubset<T, HostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hosts and returns the data saved in the database.
     * @param {HostCreateManyAndReturnArgs} args - Arguments to create many Hosts.
     * @example
     * // Create many Hosts
     * const host = await prisma.host.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hosts and only return the `id`
     * const hostWithIdOnly = await prisma.host.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HostCreateManyAndReturnArgs>(args?: SelectSubset<T, HostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Host.
     * @param {HostDeleteArgs} args - Arguments to delete one Host.
     * @example
     * // Delete one Host
     * const Host = await prisma.host.delete({
     *   where: {
     *     // ... filter to delete one Host
     *   }
     * })
     * 
     */
    delete<T extends HostDeleteArgs>(args: SelectSubset<T, HostDeleteArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Host.
     * @param {HostUpdateArgs} args - Arguments to update one Host.
     * @example
     * // Update one Host
     * const host = await prisma.host.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HostUpdateArgs>(args: SelectSubset<T, HostUpdateArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hosts.
     * @param {HostDeleteManyArgs} args - Arguments to filter Hosts to delete.
     * @example
     * // Delete a few Hosts
     * const { count } = await prisma.host.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HostDeleteManyArgs>(args?: SelectSubset<T, HostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hosts
     * const host = await prisma.host.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HostUpdateManyArgs>(args: SelectSubset<T, HostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hosts and returns the data updated in the database.
     * @param {HostUpdateManyAndReturnArgs} args - Arguments to update many Hosts.
     * @example
     * // Update many Hosts
     * const host = await prisma.host.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hosts and only return the `id`
     * const hostWithIdOnly = await prisma.host.updateManyAndReturn({
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
    updateManyAndReturn<T extends HostUpdateManyAndReturnArgs>(args: SelectSubset<T, HostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Host.
     * @param {HostUpsertArgs} args - Arguments to update or create a Host.
     * @example
     * // Update or create a Host
     * const host = await prisma.host.upsert({
     *   create: {
     *     // ... data to create a Host
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Host we want to update
     *   }
     * })
     */
    upsert<T extends HostUpsertArgs>(args: SelectSubset<T, HostUpsertArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostCountArgs} args - Arguments to filter Hosts to count.
     * @example
     * // Count the number of Hosts
     * const count = await prisma.host.count({
     *   where: {
     *     // ... the filter for the Hosts we want to count
     *   }
     * })
    **/
    count<T extends HostCountArgs>(
      args?: Subset<T, HostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Host.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HostAggregateArgs>(args: Subset<T, HostAggregateArgs>): Prisma.PrismaPromise<GetHostAggregateType<T>>

    /**
     * Group by Host.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostGroupByArgs} args - Group by arguments.
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
      T extends HostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HostGroupByArgs['orderBy'] }
        : { orderBy?: HostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Host model
   */
  readonly fields: HostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Host.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campPrograms<T extends Host$campProgramsArgs<ExtArgs> = {}>(args?: Subset<T, Host$campProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Host model
   */
  interface HostFieldRefs {
    readonly id: FieldRef<"Host", 'String'>
    readonly name: FieldRef<"Host", 'String'>
    readonly bio: FieldRef<"Host", 'String'>
    readonly imageUrl: FieldRef<"Host", 'String'>
    readonly createdAt: FieldRef<"Host", 'DateTime'>
    readonly updatedAt: FieldRef<"Host", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Host findUnique
   */
  export type HostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host findUniqueOrThrow
   */
  export type HostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host findFirst
   */
  export type HostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hosts.
     */
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }

  /**
   * Host findFirstOrThrow
   */
  export type HostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Host to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hosts.
     */
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }

  /**
   * Host findMany
   */
  export type HostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter, which Hosts to fetch.
     */
    where?: HostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hosts to fetch.
     */
    orderBy?: HostOrderByWithRelationInput | HostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hosts.
     */
    cursor?: HostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hosts.
     */
    skip?: number
    distinct?: HostScalarFieldEnum | HostScalarFieldEnum[]
  }

  /**
   * Host create
   */
  export type HostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * The data needed to create a Host.
     */
    data: XOR<HostCreateInput, HostUncheckedCreateInput>
  }

  /**
   * Host createMany
   */
  export type HostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hosts.
     */
    data: HostCreateManyInput | HostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Host createManyAndReturn
   */
  export type HostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * The data used to create many Hosts.
     */
    data: HostCreateManyInput | HostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Host update
   */
  export type HostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * The data needed to update a Host.
     */
    data: XOR<HostUpdateInput, HostUncheckedUpdateInput>
    /**
     * Choose, which Host to update.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host updateMany
   */
  export type HostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hosts.
     */
    data: XOR<HostUpdateManyMutationInput, HostUncheckedUpdateManyInput>
    /**
     * Filter which Hosts to update
     */
    where?: HostWhereInput
    /**
     * Limit how many Hosts to update.
     */
    limit?: number
  }

  /**
   * Host updateManyAndReturn
   */
  export type HostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * The data used to update Hosts.
     */
    data: XOR<HostUpdateManyMutationInput, HostUncheckedUpdateManyInput>
    /**
     * Filter which Hosts to update
     */
    where?: HostWhereInput
    /**
     * Limit how many Hosts to update.
     */
    limit?: number
  }

  /**
   * Host upsert
   */
  export type HostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * The filter to search for the Host to update in case it exists.
     */
    where: HostWhereUniqueInput
    /**
     * In case the Host found by the `where` argument doesn't exist, create a new Host with this data.
     */
    create: XOR<HostCreateInput, HostUncheckedCreateInput>
    /**
     * In case the Host was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HostUpdateInput, HostUncheckedUpdateInput>
  }

  /**
   * Host delete
   */
  export type HostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
    /**
     * Filter which Host to delete.
     */
    where: HostWhereUniqueInput
  }

  /**
   * Host deleteMany
   */
  export type HostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hosts to delete
     */
    where?: HostWhereInput
    /**
     * Limit how many Hosts to delete.
     */
    limit?: number
  }

  /**
   * Host.campPrograms
   */
  export type Host$campProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    where?: CampProgramHostWhereInput
    orderBy?: CampProgramHostOrderByWithRelationInput | CampProgramHostOrderByWithRelationInput[]
    cursor?: CampProgramHostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampProgramHostScalarFieldEnum | CampProgramHostScalarFieldEnum[]
  }

  /**
   * Host without action
   */
  export type HostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Host
     */
    select?: HostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Host
     */
    omit?: HostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostInclude<ExtArgs> | null
  }


  /**
   * Model CampProgramHost
   */

  export type AggregateCampProgramHost = {
    _count: CampProgramHostCountAggregateOutputType | null
    _min: CampProgramHostMinAggregateOutputType | null
    _max: CampProgramHostMaxAggregateOutputType | null
  }

  export type CampProgramHostMinAggregateOutputType = {
    id: string | null
    campProgramId: string | null
    hostId: string | null
  }

  export type CampProgramHostMaxAggregateOutputType = {
    id: string | null
    campProgramId: string | null
    hostId: string | null
  }

  export type CampProgramHostCountAggregateOutputType = {
    id: number
    campProgramId: number
    hostId: number
    _all: number
  }


  export type CampProgramHostMinAggregateInputType = {
    id?: true
    campProgramId?: true
    hostId?: true
  }

  export type CampProgramHostMaxAggregateInputType = {
    id?: true
    campProgramId?: true
    hostId?: true
  }

  export type CampProgramHostCountAggregateInputType = {
    id?: true
    campProgramId?: true
    hostId?: true
    _all?: true
  }

  export type CampProgramHostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampProgramHost to aggregate.
     */
    where?: CampProgramHostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampProgramHosts to fetch.
     */
    orderBy?: CampProgramHostOrderByWithRelationInput | CampProgramHostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampProgramHostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampProgramHosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampProgramHosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampProgramHosts
    **/
    _count?: true | CampProgramHostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampProgramHostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampProgramHostMaxAggregateInputType
  }

  export type GetCampProgramHostAggregateType<T extends CampProgramHostAggregateArgs> = {
        [P in keyof T & keyof AggregateCampProgramHost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampProgramHost[P]>
      : GetScalarType<T[P], AggregateCampProgramHost[P]>
  }




  export type CampProgramHostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampProgramHostWhereInput
    orderBy?: CampProgramHostOrderByWithAggregationInput | CampProgramHostOrderByWithAggregationInput[]
    by: CampProgramHostScalarFieldEnum[] | CampProgramHostScalarFieldEnum
    having?: CampProgramHostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampProgramHostCountAggregateInputType | true
    _min?: CampProgramHostMinAggregateInputType
    _max?: CampProgramHostMaxAggregateInputType
  }

  export type CampProgramHostGroupByOutputType = {
    id: string
    campProgramId: string
    hostId: string
    _count: CampProgramHostCountAggregateOutputType | null
    _min: CampProgramHostMinAggregateOutputType | null
    _max: CampProgramHostMaxAggregateOutputType | null
  }

  type GetCampProgramHostGroupByPayload<T extends CampProgramHostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampProgramHostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampProgramHostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampProgramHostGroupByOutputType[P]>
            : GetScalarType<T[P], CampProgramHostGroupByOutputType[P]>
        }
      >
    >


  export type CampProgramHostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campProgramId?: boolean
    hostId?: boolean
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campProgramHost"]>

  export type CampProgramHostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campProgramId?: boolean
    hostId?: boolean
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campProgramHost"]>

  export type CampProgramHostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campProgramId?: boolean
    hostId?: boolean
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campProgramHost"]>

  export type CampProgramHostSelectScalar = {
    id?: boolean
    campProgramId?: boolean
    hostId?: boolean
  }

  export type CampProgramHostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campProgramId" | "hostId", ExtArgs["result"]["campProgramHost"]>
  export type CampProgramHostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }
  export type CampProgramHostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }
  export type CampProgramHostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campProgram?: boolean | CampProgramDefaultArgs<ExtArgs>
    host?: boolean | HostDefaultArgs<ExtArgs>
  }

  export type $CampProgramHostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampProgramHost"
    objects: {
      campProgram: Prisma.$CampProgramPayload<ExtArgs>
      host: Prisma.$HostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campProgramId: string
      hostId: string
    }, ExtArgs["result"]["campProgramHost"]>
    composites: {}
  }

  type CampProgramHostGetPayload<S extends boolean | null | undefined | CampProgramHostDefaultArgs> = $Result.GetResult<Prisma.$CampProgramHostPayload, S>

  type CampProgramHostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampProgramHostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampProgramHostCountAggregateInputType | true
    }

  export interface CampProgramHostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampProgramHost'], meta: { name: 'CampProgramHost' } }
    /**
     * Find zero or one CampProgramHost that matches the filter.
     * @param {CampProgramHostFindUniqueArgs} args - Arguments to find a CampProgramHost
     * @example
     * // Get one CampProgramHost
     * const campProgramHost = await prisma.campProgramHost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampProgramHostFindUniqueArgs>(args: SelectSubset<T, CampProgramHostFindUniqueArgs<ExtArgs>>): Prisma__CampProgramHostClient<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampProgramHost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampProgramHostFindUniqueOrThrowArgs} args - Arguments to find a CampProgramHost
     * @example
     * // Get one CampProgramHost
     * const campProgramHost = await prisma.campProgramHost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampProgramHostFindUniqueOrThrowArgs>(args: SelectSubset<T, CampProgramHostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampProgramHostClient<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampProgramHost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramHostFindFirstArgs} args - Arguments to find a CampProgramHost
     * @example
     * // Get one CampProgramHost
     * const campProgramHost = await prisma.campProgramHost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampProgramHostFindFirstArgs>(args?: SelectSubset<T, CampProgramHostFindFirstArgs<ExtArgs>>): Prisma__CampProgramHostClient<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampProgramHost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramHostFindFirstOrThrowArgs} args - Arguments to find a CampProgramHost
     * @example
     * // Get one CampProgramHost
     * const campProgramHost = await prisma.campProgramHost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampProgramHostFindFirstOrThrowArgs>(args?: SelectSubset<T, CampProgramHostFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampProgramHostClient<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampProgramHosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramHostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampProgramHosts
     * const campProgramHosts = await prisma.campProgramHost.findMany()
     * 
     * // Get first 10 CampProgramHosts
     * const campProgramHosts = await prisma.campProgramHost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campProgramHostWithIdOnly = await prisma.campProgramHost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampProgramHostFindManyArgs>(args?: SelectSubset<T, CampProgramHostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampProgramHost.
     * @param {CampProgramHostCreateArgs} args - Arguments to create a CampProgramHost.
     * @example
     * // Create one CampProgramHost
     * const CampProgramHost = await prisma.campProgramHost.create({
     *   data: {
     *     // ... data to create a CampProgramHost
     *   }
     * })
     * 
     */
    create<T extends CampProgramHostCreateArgs>(args: SelectSubset<T, CampProgramHostCreateArgs<ExtArgs>>): Prisma__CampProgramHostClient<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampProgramHosts.
     * @param {CampProgramHostCreateManyArgs} args - Arguments to create many CampProgramHosts.
     * @example
     * // Create many CampProgramHosts
     * const campProgramHost = await prisma.campProgramHost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampProgramHostCreateManyArgs>(args?: SelectSubset<T, CampProgramHostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampProgramHosts and returns the data saved in the database.
     * @param {CampProgramHostCreateManyAndReturnArgs} args - Arguments to create many CampProgramHosts.
     * @example
     * // Create many CampProgramHosts
     * const campProgramHost = await prisma.campProgramHost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampProgramHosts and only return the `id`
     * const campProgramHostWithIdOnly = await prisma.campProgramHost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampProgramHostCreateManyAndReturnArgs>(args?: SelectSubset<T, CampProgramHostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampProgramHost.
     * @param {CampProgramHostDeleteArgs} args - Arguments to delete one CampProgramHost.
     * @example
     * // Delete one CampProgramHost
     * const CampProgramHost = await prisma.campProgramHost.delete({
     *   where: {
     *     // ... filter to delete one CampProgramHost
     *   }
     * })
     * 
     */
    delete<T extends CampProgramHostDeleteArgs>(args: SelectSubset<T, CampProgramHostDeleteArgs<ExtArgs>>): Prisma__CampProgramHostClient<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampProgramHost.
     * @param {CampProgramHostUpdateArgs} args - Arguments to update one CampProgramHost.
     * @example
     * // Update one CampProgramHost
     * const campProgramHost = await prisma.campProgramHost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampProgramHostUpdateArgs>(args: SelectSubset<T, CampProgramHostUpdateArgs<ExtArgs>>): Prisma__CampProgramHostClient<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampProgramHosts.
     * @param {CampProgramHostDeleteManyArgs} args - Arguments to filter CampProgramHosts to delete.
     * @example
     * // Delete a few CampProgramHosts
     * const { count } = await prisma.campProgramHost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampProgramHostDeleteManyArgs>(args?: SelectSubset<T, CampProgramHostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampProgramHosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramHostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampProgramHosts
     * const campProgramHost = await prisma.campProgramHost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampProgramHostUpdateManyArgs>(args: SelectSubset<T, CampProgramHostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampProgramHosts and returns the data updated in the database.
     * @param {CampProgramHostUpdateManyAndReturnArgs} args - Arguments to update many CampProgramHosts.
     * @example
     * // Update many CampProgramHosts
     * const campProgramHost = await prisma.campProgramHost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampProgramHosts and only return the `id`
     * const campProgramHostWithIdOnly = await prisma.campProgramHost.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampProgramHostUpdateManyAndReturnArgs>(args: SelectSubset<T, CampProgramHostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampProgramHost.
     * @param {CampProgramHostUpsertArgs} args - Arguments to update or create a CampProgramHost.
     * @example
     * // Update or create a CampProgramHost
     * const campProgramHost = await prisma.campProgramHost.upsert({
     *   create: {
     *     // ... data to create a CampProgramHost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampProgramHost we want to update
     *   }
     * })
     */
    upsert<T extends CampProgramHostUpsertArgs>(args: SelectSubset<T, CampProgramHostUpsertArgs<ExtArgs>>): Prisma__CampProgramHostClient<$Result.GetResult<Prisma.$CampProgramHostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampProgramHosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramHostCountArgs} args - Arguments to filter CampProgramHosts to count.
     * @example
     * // Count the number of CampProgramHosts
     * const count = await prisma.campProgramHost.count({
     *   where: {
     *     // ... the filter for the CampProgramHosts we want to count
     *   }
     * })
    **/
    count<T extends CampProgramHostCountArgs>(
      args?: Subset<T, CampProgramHostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampProgramHostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampProgramHost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramHostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampProgramHostAggregateArgs>(args: Subset<T, CampProgramHostAggregateArgs>): Prisma.PrismaPromise<GetCampProgramHostAggregateType<T>>

    /**
     * Group by CampProgramHost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampProgramHostGroupByArgs} args - Group by arguments.
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
      T extends CampProgramHostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampProgramHostGroupByArgs['orderBy'] }
        : { orderBy?: CampProgramHostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampProgramHostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampProgramHostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampProgramHost model
   */
  readonly fields: CampProgramHostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampProgramHost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampProgramHostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campProgram<T extends CampProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampProgramDefaultArgs<ExtArgs>>): Prisma__CampProgramClient<$Result.GetResult<Prisma.$CampProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    host<T extends HostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HostDefaultArgs<ExtArgs>>): Prisma__HostClient<$Result.GetResult<Prisma.$HostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CampProgramHost model
   */
  interface CampProgramHostFieldRefs {
    readonly id: FieldRef<"CampProgramHost", 'String'>
    readonly campProgramId: FieldRef<"CampProgramHost", 'String'>
    readonly hostId: FieldRef<"CampProgramHost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CampProgramHost findUnique
   */
  export type CampProgramHostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    /**
     * Filter, which CampProgramHost to fetch.
     */
    where: CampProgramHostWhereUniqueInput
  }

  /**
   * CampProgramHost findUniqueOrThrow
   */
  export type CampProgramHostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    /**
     * Filter, which CampProgramHost to fetch.
     */
    where: CampProgramHostWhereUniqueInput
  }

  /**
   * CampProgramHost findFirst
   */
  export type CampProgramHostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    /**
     * Filter, which CampProgramHost to fetch.
     */
    where?: CampProgramHostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampProgramHosts to fetch.
     */
    orderBy?: CampProgramHostOrderByWithRelationInput | CampProgramHostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampProgramHosts.
     */
    cursor?: CampProgramHostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampProgramHosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampProgramHosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampProgramHosts.
     */
    distinct?: CampProgramHostScalarFieldEnum | CampProgramHostScalarFieldEnum[]
  }

  /**
   * CampProgramHost findFirstOrThrow
   */
  export type CampProgramHostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    /**
     * Filter, which CampProgramHost to fetch.
     */
    where?: CampProgramHostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampProgramHosts to fetch.
     */
    orderBy?: CampProgramHostOrderByWithRelationInput | CampProgramHostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampProgramHosts.
     */
    cursor?: CampProgramHostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampProgramHosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampProgramHosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampProgramHosts.
     */
    distinct?: CampProgramHostScalarFieldEnum | CampProgramHostScalarFieldEnum[]
  }

  /**
   * CampProgramHost findMany
   */
  export type CampProgramHostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    /**
     * Filter, which CampProgramHosts to fetch.
     */
    where?: CampProgramHostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampProgramHosts to fetch.
     */
    orderBy?: CampProgramHostOrderByWithRelationInput | CampProgramHostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampProgramHosts.
     */
    cursor?: CampProgramHostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampProgramHosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampProgramHosts.
     */
    skip?: number
    distinct?: CampProgramHostScalarFieldEnum | CampProgramHostScalarFieldEnum[]
  }

  /**
   * CampProgramHost create
   */
  export type CampProgramHostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    /**
     * The data needed to create a CampProgramHost.
     */
    data: XOR<CampProgramHostCreateInput, CampProgramHostUncheckedCreateInput>
  }

  /**
   * CampProgramHost createMany
   */
  export type CampProgramHostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampProgramHosts.
     */
    data: CampProgramHostCreateManyInput | CampProgramHostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampProgramHost createManyAndReturn
   */
  export type CampProgramHostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * The data used to create many CampProgramHosts.
     */
    data: CampProgramHostCreateManyInput | CampProgramHostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampProgramHost update
   */
  export type CampProgramHostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    /**
     * The data needed to update a CampProgramHost.
     */
    data: XOR<CampProgramHostUpdateInput, CampProgramHostUncheckedUpdateInput>
    /**
     * Choose, which CampProgramHost to update.
     */
    where: CampProgramHostWhereUniqueInput
  }

  /**
   * CampProgramHost updateMany
   */
  export type CampProgramHostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampProgramHosts.
     */
    data: XOR<CampProgramHostUpdateManyMutationInput, CampProgramHostUncheckedUpdateManyInput>
    /**
     * Filter which CampProgramHosts to update
     */
    where?: CampProgramHostWhereInput
    /**
     * Limit how many CampProgramHosts to update.
     */
    limit?: number
  }

  /**
   * CampProgramHost updateManyAndReturn
   */
  export type CampProgramHostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * The data used to update CampProgramHosts.
     */
    data: XOR<CampProgramHostUpdateManyMutationInput, CampProgramHostUncheckedUpdateManyInput>
    /**
     * Filter which CampProgramHosts to update
     */
    where?: CampProgramHostWhereInput
    /**
     * Limit how many CampProgramHosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampProgramHost upsert
   */
  export type CampProgramHostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    /**
     * The filter to search for the CampProgramHost to update in case it exists.
     */
    where: CampProgramHostWhereUniqueInput
    /**
     * In case the CampProgramHost found by the `where` argument doesn't exist, create a new CampProgramHost with this data.
     */
    create: XOR<CampProgramHostCreateInput, CampProgramHostUncheckedCreateInput>
    /**
     * In case the CampProgramHost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampProgramHostUpdateInput, CampProgramHostUncheckedUpdateInput>
  }

  /**
   * CampProgramHost delete
   */
  export type CampProgramHostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
    /**
     * Filter which CampProgramHost to delete.
     */
    where: CampProgramHostWhereUniqueInput
  }

  /**
   * CampProgramHost deleteMany
   */
  export type CampProgramHostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampProgramHosts to delete
     */
    where?: CampProgramHostWhereInput
    /**
     * Limit how many CampProgramHosts to delete.
     */
    limit?: number
  }

  /**
   * CampProgramHost without action
   */
  export type CampProgramHostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampProgramHost
     */
    select?: CampProgramHostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampProgramHost
     */
    omit?: CampProgramHostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampProgramHostInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    amount: number | null
  }

  export type BookingSumAggregateOutputType = {
    amount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    stripeId: string | null
    amount: number | null
    campName: string | null
    athleteName: string | null
    email: string | null
    phone: string | null
    status: $Enums.BookingStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    rawData: string | null
    acceptedTerms: boolean | null
    attended: $Enums.AttendanceStatus | null
    qrCodeUsed: boolean | null
    qrCodeData: string | null
    qrCodeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    stripeId: string | null
    amount: number | null
    campName: string | null
    athleteName: string | null
    email: string | null
    phone: string | null
    status: $Enums.BookingStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    rawData: string | null
    acceptedTerms: boolean | null
    attended: $Enums.AttendanceStatus | null
    qrCodeUsed: boolean | null
    qrCodeData: string | null
    qrCodeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    sessionId: number
    stripeId: number
    amount: number
    campName: number
    athleteName: number
    email: number
    phone: number
    status: number
    paymentStatus: number
    rawData: number
    acceptedTerms: number
    attended: number
    qrCodeUsed: number
    qrCodeData: number
    qrCodeUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    amount?: true
  }

  export type BookingSumAggregateInputType = {
    amount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    sessionId?: true
    stripeId?: true
    amount?: true
    campName?: true
    athleteName?: true
    email?: true
    phone?: true
    status?: true
    paymentStatus?: true
    rawData?: true
    acceptedTerms?: true
    attended?: true
    qrCodeUsed?: true
    qrCodeData?: true
    qrCodeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    sessionId?: true
    stripeId?: true
    amount?: true
    campName?: true
    athleteName?: true
    email?: true
    phone?: true
    status?: true
    paymentStatus?: true
    rawData?: true
    acceptedTerms?: true
    attended?: true
    qrCodeUsed?: true
    qrCodeData?: true
    qrCodeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    sessionId?: true
    stripeId?: true
    amount?: true
    campName?: true
    athleteName?: true
    email?: true
    phone?: true
    status?: true
    paymentStatus?: true
    rawData?: true
    acceptedTerms?: true
    attended?: true
    qrCodeUsed?: true
    qrCodeData?: true
    qrCodeUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    sessionId: string
    stripeId: string
    amount: number
    campName: string
    athleteName: string
    email: string
    phone: string | null
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    rawData: string | null
    acceptedTerms: boolean
    attended: $Enums.AttendanceStatus
    qrCodeUsed: boolean
    qrCodeData: string | null
    qrCodeUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    stripeId?: boolean
    amount?: boolean
    campName?: boolean
    athleteName?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    paymentStatus?: boolean
    rawData?: boolean
    acceptedTerms?: boolean
    attended?: boolean
    qrCodeUsed?: boolean
    qrCodeData?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | CampSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    stripeId?: boolean
    amount?: boolean
    campName?: boolean
    athleteName?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    paymentStatus?: boolean
    rawData?: boolean
    acceptedTerms?: boolean
    attended?: boolean
    qrCodeUsed?: boolean
    qrCodeData?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | CampSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    stripeId?: boolean
    amount?: boolean
    campName?: boolean
    athleteName?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    paymentStatus?: boolean
    rawData?: boolean
    acceptedTerms?: boolean
    attended?: boolean
    qrCodeUsed?: boolean
    qrCodeData?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | CampSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    sessionId?: boolean
    stripeId?: boolean
    amount?: boolean
    campName?: boolean
    athleteName?: boolean
    email?: boolean
    phone?: boolean
    status?: boolean
    paymentStatus?: boolean
    rawData?: boolean
    acceptedTerms?: boolean
    attended?: boolean
    qrCodeUsed?: boolean
    qrCodeData?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "stripeId" | "amount" | "campName" | "athleteName" | "email" | "phone" | "status" | "paymentStatus" | "rawData" | "acceptedTerms" | "attended" | "qrCodeUsed" | "qrCodeData" | "qrCodeUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CampSessionDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CampSessionDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CampSessionDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      session: Prisma.$CampSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      stripeId: string
      amount: number
      campName: string
      athleteName: string
      email: string
      phone: string | null
      status: $Enums.BookingStatus
      paymentStatus: $Enums.PaymentStatus
      rawData: string | null
      acceptedTerms: boolean
      attended: $Enums.AttendanceStatus
      qrCodeUsed: boolean
      qrCodeData: string | null
      qrCodeUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends CampSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampSessionDefaultArgs<ExtArgs>>): Prisma__CampSessionClient<$Result.GetResult<Prisma.$CampSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly sessionId: FieldRef<"Booking", 'String'>
    readonly stripeId: FieldRef<"Booking", 'String'>
    readonly amount: FieldRef<"Booking", 'Float'>
    readonly campName: FieldRef<"Booking", 'String'>
    readonly athleteName: FieldRef<"Booking", 'String'>
    readonly email: FieldRef<"Booking", 'String'>
    readonly phone: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly paymentStatus: FieldRef<"Booking", 'PaymentStatus'>
    readonly rawData: FieldRef<"Booking", 'String'>
    readonly acceptedTerms: FieldRef<"Booking", 'Boolean'>
    readonly attended: FieldRef<"Booking", 'AttendanceStatus'>
    readonly qrCodeUsed: FieldRef<"Booking", 'Boolean'>
    readonly qrCodeData: FieldRef<"Booking", 'String'>
    readonly qrCodeUrl: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    auth_id: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.UserRoles | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    auth_id: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.UserRoles | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    auth_id: number
    email: number
    username: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    auth_id?: true
    email?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    auth_id?: true
    email?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    auth_id?: true
    email?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    auth_id: string
    email: string
    username: string
    password: string
    role: $Enums.UserRoles
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    auth_id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auth_id" | "email" | "username" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      auth_id: string
      email: string
      username: string
      password: string
      role: $Enums.UserRoles
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly auth_id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRoles'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    description: string | null
    tags: string | null
    url: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    description: string | null
    tags: string | null
    url: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    description: number
    tags: number
    url: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    description?: true
    tags?: true
    url?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    description?: true
    tags?: true
    url?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    description?: true
    tags?: true
    url?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    description: string
    tags: string
    url: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    tags?: boolean
    url?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    tags?: boolean
    url?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    tags?: boolean
    url?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    description?: boolean
    tags?: boolean
    url?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "tags" | "url" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      tags: string
      url: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly description: FieldRef<"Post", 'String'>
    readonly tags: FieldRef<"Post", 'String'>
    readonly url: FieldRef<"Post", 'String'>
    readonly imageUrl: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type CompanySumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    brandName: string | null
    shortDescription: string | null
    description: string | null
    logoUrl: string | null
    email: string | null
    phone: string | null
    address: string | null
    lat: number | null
    lng: number | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    tiktok: string | null
    youtube: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    brandName: string | null
    shortDescription: string | null
    description: string | null
    logoUrl: string | null
    email: string | null
    phone: string | null
    address: string | null
    lat: number | null
    lng: number | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    tiktok: string | null
    youtube: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    brandName: number
    shortDescription: number
    description: number
    logoUrl: number
    email: number
    phone: number
    address: number
    lat: number
    lng: number
    facebook: number
    instagram: number
    twitter: number
    tiktok: number
    youtube: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type CompanySumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    brandName?: true
    shortDescription?: true
    description?: true
    logoUrl?: true
    email?: true
    phone?: true
    address?: true
    lat?: true
    lng?: true
    facebook?: true
    instagram?: true
    twitter?: true
    tiktok?: true
    youtube?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    brandName?: true
    shortDescription?: true
    description?: true
    logoUrl?: true
    email?: true
    phone?: true
    address?: true
    lat?: true
    lng?: true
    facebook?: true
    instagram?: true
    twitter?: true
    tiktok?: true
    youtube?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    brandName?: true
    shortDescription?: true
    description?: true
    logoUrl?: true
    email?: true
    phone?: true
    address?: true
    lat?: true
    lng?: true
    facebook?: true
    instagram?: true
    twitter?: true
    tiktok?: true
    youtube?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    brandName: string
    shortDescription: string
    description: string
    logoUrl: string
    email: string
    phone: string
    address: string
    lat: number
    lng: number
    facebook: string
    instagram: string
    twitter: string
    tiktok: string
    youtube: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
    shortDescription?: boolean
    description?: boolean
    logoUrl?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    facebook?: boolean
    instagram?: boolean
    twitter?: boolean
    tiktok?: boolean
    youtube?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
    shortDescription?: boolean
    description?: boolean
    logoUrl?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    facebook?: boolean
    instagram?: boolean
    twitter?: boolean
    tiktok?: boolean
    youtube?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
    shortDescription?: boolean
    description?: boolean
    logoUrl?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    facebook?: boolean
    instagram?: boolean
    twitter?: boolean
    tiktok?: boolean
    youtube?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    brandName?: boolean
    shortDescription?: boolean
    description?: boolean
    logoUrl?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    facebook?: boolean
    instagram?: boolean
    twitter?: boolean
    tiktok?: boolean
    youtube?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brandName" | "shortDescription" | "description" | "logoUrl" | "email" | "phone" | "address" | "lat" | "lng" | "facebook" | "instagram" | "twitter" | "tiktok" | "youtube" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brandName: string
      shortDescription: string
      description: string
      logoUrl: string
      email: string
      phone: string
      address: string
      lat: number
      lng: number
      facebook: string
      instagram: string
      twitter: string
      tiktok: string
      youtube: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly brandName: FieldRef<"Company", 'String'>
    readonly shortDescription: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly logoUrl: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly lat: FieldRef<"Company", 'Float'>
    readonly lng: FieldRef<"Company", 'Float'>
    readonly facebook: FieldRef<"Company", 'String'>
    readonly instagram: FieldRef<"Company", 'String'>
    readonly twitter: FieldRef<"Company", 'String'>
    readonly tiktok: FieldRef<"Company", 'String'>
    readonly youtube: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly message: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
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


  export const CampProgramScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    videoUrl: 'videoUrl',
    slug: 'slug',
    location: 'location',
    lat: 'lat',
    lng: 'lng',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampProgramScalarFieldEnum = (typeof CampProgramScalarFieldEnum)[keyof typeof CampProgramScalarFieldEnum]


  export const CampSessionScalarFieldEnum: {
    id: 'id',
    label: 'label',
    priority: 'priority',
    startDate: 'startDate',
    startDateString: 'startDateString',
    endDateString: 'endDateString',
    endDate: 'endDate',
    period: 'period',
    availableSlots: 'availableSlots',
    price: 'price',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    campProgramId: 'campProgramId'
  };

  export type CampSessionScalarFieldEnum = (typeof CampSessionScalarFieldEnum)[keyof typeof CampSessionScalarFieldEnum]


  export const HostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bio: 'bio',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HostScalarFieldEnum = (typeof HostScalarFieldEnum)[keyof typeof HostScalarFieldEnum]


  export const CampProgramHostScalarFieldEnum: {
    id: 'id',
    campProgramId: 'campProgramId',
    hostId: 'hostId'
  };

  export type CampProgramHostScalarFieldEnum = (typeof CampProgramHostScalarFieldEnum)[keyof typeof CampProgramHostScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    stripeId: 'stripeId',
    amount: 'amount',
    campName: 'campName',
    athleteName: 'athleteName',
    email: 'email',
    phone: 'phone',
    status: 'status',
    paymentStatus: 'paymentStatus',
    rawData: 'rawData',
    acceptedTerms: 'acceptedTerms',
    attended: 'attended',
    qrCodeUsed: 'qrCodeUsed',
    qrCodeData: 'qrCodeData',
    qrCodeUrl: 'qrCodeUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    auth_id: 'auth_id',
    email: 'email',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    description: 'description',
    tags: 'tags',
    url: 'url',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    brandName: 'brandName',
    shortDescription: 'shortDescription',
    description: 'description',
    logoUrl: 'logoUrl',
    email: 'email',
    phone: 'phone',
    address: 'address',
    lat: 'lat',
    lng: 'lng',
    facebook: 'facebook',
    instagram: 'instagram',
    twitter: 'twitter',
    tiktok: 'tiktok',
    youtube: 'youtube',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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
   * Reference to a field of type 'SessionPeriod'
   */
  export type EnumSessionPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionPeriod'>
    


  /**
   * Reference to a field of type 'SessionPeriod[]'
   */
  export type ListEnumSessionPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionPeriod[]'>
    


  /**
   * Reference to a field of type 'CampStatus'
   */
  export type EnumCampStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampStatus'>
    


  /**
   * Reference to a field of type 'CampStatus[]'
   */
  export type ListEnumCampStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampStatus[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'UserRoles'
   */
  export type EnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles'>
    


  /**
   * Reference to a field of type 'UserRoles[]'
   */
  export type ListEnumUserRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRoles[]'>
    
  /**
   * Deep Input Types
   */


  export type CampProgramWhereInput = {
    AND?: CampProgramWhereInput | CampProgramWhereInput[]
    OR?: CampProgramWhereInput[]
    NOT?: CampProgramWhereInput | CampProgramWhereInput[]
    id?: StringFilter<"CampProgram"> | string
    title?: StringFilter<"CampProgram"> | string
    description?: StringNullableFilter<"CampProgram"> | string | null
    imageUrl?: StringNullableFilter<"CampProgram"> | string | null
    videoUrl?: StringNullableFilter<"CampProgram"> | string | null
    slug?: StringFilter<"CampProgram"> | string
    location?: StringFilter<"CampProgram"> | string
    lat?: FloatFilter<"CampProgram"> | number
    lng?: FloatFilter<"CampProgram"> | number
    createdAt?: DateTimeFilter<"CampProgram"> | Date | string
    updatedAt?: DateTimeFilter<"CampProgram"> | Date | string
    sessions?: CampSessionListRelationFilter
    hosts?: CampProgramHostListRelationFilter
  }

  export type CampProgramOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    slug?: SortOrder
    location?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: CampSessionOrderByRelationAggregateInput
    hosts?: CampProgramHostOrderByRelationAggregateInput
  }

  export type CampProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CampProgramWhereInput | CampProgramWhereInput[]
    OR?: CampProgramWhereInput[]
    NOT?: CampProgramWhereInput | CampProgramWhereInput[]
    title?: StringFilter<"CampProgram"> | string
    description?: StringNullableFilter<"CampProgram"> | string | null
    imageUrl?: StringNullableFilter<"CampProgram"> | string | null
    videoUrl?: StringNullableFilter<"CampProgram"> | string | null
    location?: StringFilter<"CampProgram"> | string
    lat?: FloatFilter<"CampProgram"> | number
    lng?: FloatFilter<"CampProgram"> | number
    createdAt?: DateTimeFilter<"CampProgram"> | Date | string
    updatedAt?: DateTimeFilter<"CampProgram"> | Date | string
    sessions?: CampSessionListRelationFilter
    hosts?: CampProgramHostListRelationFilter
  }, "id" | "slug">

  export type CampProgramOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    slug?: SortOrder
    location?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampProgramCountOrderByAggregateInput
    _avg?: CampProgramAvgOrderByAggregateInput
    _max?: CampProgramMaxOrderByAggregateInput
    _min?: CampProgramMinOrderByAggregateInput
    _sum?: CampProgramSumOrderByAggregateInput
  }

  export type CampProgramScalarWhereWithAggregatesInput = {
    AND?: CampProgramScalarWhereWithAggregatesInput | CampProgramScalarWhereWithAggregatesInput[]
    OR?: CampProgramScalarWhereWithAggregatesInput[]
    NOT?: CampProgramScalarWhereWithAggregatesInput | CampProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampProgram"> | string
    title?: StringWithAggregatesFilter<"CampProgram"> | string
    description?: StringNullableWithAggregatesFilter<"CampProgram"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"CampProgram"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"CampProgram"> | string | null
    slug?: StringWithAggregatesFilter<"CampProgram"> | string
    location?: StringWithAggregatesFilter<"CampProgram"> | string
    lat?: FloatWithAggregatesFilter<"CampProgram"> | number
    lng?: FloatWithAggregatesFilter<"CampProgram"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CampProgram"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampProgram"> | Date | string
  }

  export type CampSessionWhereInput = {
    AND?: CampSessionWhereInput | CampSessionWhereInput[]
    OR?: CampSessionWhereInput[]
    NOT?: CampSessionWhereInput | CampSessionWhereInput[]
    id?: StringFilter<"CampSession"> | string
    label?: StringFilter<"CampSession"> | string
    priority?: IntFilter<"CampSession"> | number
    startDate?: DateTimeFilter<"CampSession"> | Date | string
    startDateString?: StringFilter<"CampSession"> | string
    endDateString?: StringFilter<"CampSession"> | string
    endDate?: DateTimeFilter<"CampSession"> | Date | string
    period?: EnumSessionPeriodFilter<"CampSession"> | $Enums.SessionPeriod
    availableSlots?: IntFilter<"CampSession"> | number
    price?: FloatFilter<"CampSession"> | number
    status?: EnumCampStatusFilter<"CampSession"> | $Enums.CampStatus
    createdAt?: DateTimeFilter<"CampSession"> | Date | string
    updatedAt?: DateTimeFilter<"CampSession"> | Date | string
    campProgramId?: StringFilter<"CampSession"> | string
    campProgram?: XOR<CampProgramScalarRelationFilter, CampProgramWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type CampSessionOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    priority?: SortOrder
    startDate?: SortOrder
    startDateString?: SortOrder
    endDateString?: SortOrder
    endDate?: SortOrder
    period?: SortOrder
    availableSlots?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campProgramId?: SortOrder
    campProgram?: CampProgramOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type CampSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampSessionWhereInput | CampSessionWhereInput[]
    OR?: CampSessionWhereInput[]
    NOT?: CampSessionWhereInput | CampSessionWhereInput[]
    label?: StringFilter<"CampSession"> | string
    priority?: IntFilter<"CampSession"> | number
    startDate?: DateTimeFilter<"CampSession"> | Date | string
    startDateString?: StringFilter<"CampSession"> | string
    endDateString?: StringFilter<"CampSession"> | string
    endDate?: DateTimeFilter<"CampSession"> | Date | string
    period?: EnumSessionPeriodFilter<"CampSession"> | $Enums.SessionPeriod
    availableSlots?: IntFilter<"CampSession"> | number
    price?: FloatFilter<"CampSession"> | number
    status?: EnumCampStatusFilter<"CampSession"> | $Enums.CampStatus
    createdAt?: DateTimeFilter<"CampSession"> | Date | string
    updatedAt?: DateTimeFilter<"CampSession"> | Date | string
    campProgramId?: StringFilter<"CampSession"> | string
    campProgram?: XOR<CampProgramScalarRelationFilter, CampProgramWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type CampSessionOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    priority?: SortOrder
    startDate?: SortOrder
    startDateString?: SortOrder
    endDateString?: SortOrder
    endDate?: SortOrder
    period?: SortOrder
    availableSlots?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campProgramId?: SortOrder
    _count?: CampSessionCountOrderByAggregateInput
    _avg?: CampSessionAvgOrderByAggregateInput
    _max?: CampSessionMaxOrderByAggregateInput
    _min?: CampSessionMinOrderByAggregateInput
    _sum?: CampSessionSumOrderByAggregateInput
  }

  export type CampSessionScalarWhereWithAggregatesInput = {
    AND?: CampSessionScalarWhereWithAggregatesInput | CampSessionScalarWhereWithAggregatesInput[]
    OR?: CampSessionScalarWhereWithAggregatesInput[]
    NOT?: CampSessionScalarWhereWithAggregatesInput | CampSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampSession"> | string
    label?: StringWithAggregatesFilter<"CampSession"> | string
    priority?: IntWithAggregatesFilter<"CampSession"> | number
    startDate?: DateTimeWithAggregatesFilter<"CampSession"> | Date | string
    startDateString?: StringWithAggregatesFilter<"CampSession"> | string
    endDateString?: StringWithAggregatesFilter<"CampSession"> | string
    endDate?: DateTimeWithAggregatesFilter<"CampSession"> | Date | string
    period?: EnumSessionPeriodWithAggregatesFilter<"CampSession"> | $Enums.SessionPeriod
    availableSlots?: IntWithAggregatesFilter<"CampSession"> | number
    price?: FloatWithAggregatesFilter<"CampSession"> | number
    status?: EnumCampStatusWithAggregatesFilter<"CampSession"> | $Enums.CampStatus
    createdAt?: DateTimeWithAggregatesFilter<"CampSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampSession"> | Date | string
    campProgramId?: StringWithAggregatesFilter<"CampSession"> | string
  }

  export type HostWhereInput = {
    AND?: HostWhereInput | HostWhereInput[]
    OR?: HostWhereInput[]
    NOT?: HostWhereInput | HostWhereInput[]
    id?: StringFilter<"Host"> | string
    name?: StringFilter<"Host"> | string
    bio?: StringNullableFilter<"Host"> | string | null
    imageUrl?: StringNullableFilter<"Host"> | string | null
    createdAt?: DateTimeFilter<"Host"> | Date | string
    updatedAt?: DateTimeFilter<"Host"> | Date | string
    campPrograms?: CampProgramHostListRelationFilter
  }

  export type HostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campPrograms?: CampProgramHostOrderByRelationAggregateInput
  }

  export type HostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HostWhereInput | HostWhereInput[]
    OR?: HostWhereInput[]
    NOT?: HostWhereInput | HostWhereInput[]
    name?: StringFilter<"Host"> | string
    bio?: StringNullableFilter<"Host"> | string | null
    imageUrl?: StringNullableFilter<"Host"> | string | null
    createdAt?: DateTimeFilter<"Host"> | Date | string
    updatedAt?: DateTimeFilter<"Host"> | Date | string
    campPrograms?: CampProgramHostListRelationFilter
  }, "id">

  export type HostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HostCountOrderByAggregateInput
    _max?: HostMaxOrderByAggregateInput
    _min?: HostMinOrderByAggregateInput
  }

  export type HostScalarWhereWithAggregatesInput = {
    AND?: HostScalarWhereWithAggregatesInput | HostScalarWhereWithAggregatesInput[]
    OR?: HostScalarWhereWithAggregatesInput[]
    NOT?: HostScalarWhereWithAggregatesInput | HostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Host"> | string
    name?: StringWithAggregatesFilter<"Host"> | string
    bio?: StringNullableWithAggregatesFilter<"Host"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Host"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Host"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Host"> | Date | string
  }

  export type CampProgramHostWhereInput = {
    AND?: CampProgramHostWhereInput | CampProgramHostWhereInput[]
    OR?: CampProgramHostWhereInput[]
    NOT?: CampProgramHostWhereInput | CampProgramHostWhereInput[]
    id?: StringFilter<"CampProgramHost"> | string
    campProgramId?: StringFilter<"CampProgramHost"> | string
    hostId?: StringFilter<"CampProgramHost"> | string
    campProgram?: XOR<CampProgramScalarRelationFilter, CampProgramWhereInput>
    host?: XOR<HostScalarRelationFilter, HostWhereInput>
  }

  export type CampProgramHostOrderByWithRelationInput = {
    id?: SortOrder
    campProgramId?: SortOrder
    hostId?: SortOrder
    campProgram?: CampProgramOrderByWithRelationInput
    host?: HostOrderByWithRelationInput
  }

  export type CampProgramHostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampProgramHostWhereInput | CampProgramHostWhereInput[]
    OR?: CampProgramHostWhereInput[]
    NOT?: CampProgramHostWhereInput | CampProgramHostWhereInput[]
    campProgramId?: StringFilter<"CampProgramHost"> | string
    hostId?: StringFilter<"CampProgramHost"> | string
    campProgram?: XOR<CampProgramScalarRelationFilter, CampProgramWhereInput>
    host?: XOR<HostScalarRelationFilter, HostWhereInput>
  }, "id">

  export type CampProgramHostOrderByWithAggregationInput = {
    id?: SortOrder
    campProgramId?: SortOrder
    hostId?: SortOrder
    _count?: CampProgramHostCountOrderByAggregateInput
    _max?: CampProgramHostMaxOrderByAggregateInput
    _min?: CampProgramHostMinOrderByAggregateInput
  }

  export type CampProgramHostScalarWhereWithAggregatesInput = {
    AND?: CampProgramHostScalarWhereWithAggregatesInput | CampProgramHostScalarWhereWithAggregatesInput[]
    OR?: CampProgramHostScalarWhereWithAggregatesInput[]
    NOT?: CampProgramHostScalarWhereWithAggregatesInput | CampProgramHostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampProgramHost"> | string
    campProgramId?: StringWithAggregatesFilter<"CampProgramHost"> | string
    hostId?: StringWithAggregatesFilter<"CampProgramHost"> | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    sessionId?: StringFilter<"Booking"> | string
    stripeId?: StringFilter<"Booking"> | string
    amount?: FloatFilter<"Booking"> | number
    campName?: StringFilter<"Booking"> | string
    athleteName?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phone?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    rawData?: StringNullableFilter<"Booking"> | string | null
    acceptedTerms?: BoolFilter<"Booking"> | boolean
    attended?: EnumAttendanceStatusFilter<"Booking"> | $Enums.AttendanceStatus
    qrCodeUsed?: BoolFilter<"Booking"> | boolean
    qrCodeData?: StringNullableFilter<"Booking"> | string | null
    qrCodeUrl?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    session?: XOR<CampSessionScalarRelationFilter, CampSessionWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    stripeId?: SortOrder
    amount?: SortOrder
    campName?: SortOrder
    athleteName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    rawData?: SortOrderInput | SortOrder
    acceptedTerms?: SortOrder
    attended?: SortOrder
    qrCodeUsed?: SortOrder
    qrCodeData?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: CampSessionOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeId?: string
    qrCodeData?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    sessionId?: StringFilter<"Booking"> | string
    amount?: FloatFilter<"Booking"> | number
    campName?: StringFilter<"Booking"> | string
    athleteName?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phone?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    rawData?: StringNullableFilter<"Booking"> | string | null
    acceptedTerms?: BoolFilter<"Booking"> | boolean
    attended?: EnumAttendanceStatusFilter<"Booking"> | $Enums.AttendanceStatus
    qrCodeUsed?: BoolFilter<"Booking"> | boolean
    qrCodeUrl?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    session?: XOR<CampSessionScalarRelationFilter, CampSessionWhereInput>
  }, "id" | "stripeId" | "qrCodeData">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    stripeId?: SortOrder
    amount?: SortOrder
    campName?: SortOrder
    athleteName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    rawData?: SortOrderInput | SortOrder
    acceptedTerms?: SortOrder
    attended?: SortOrder
    qrCodeUsed?: SortOrder
    qrCodeData?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    sessionId?: StringWithAggregatesFilter<"Booking"> | string
    stripeId?: StringWithAggregatesFilter<"Booking"> | string
    amount?: FloatWithAggregatesFilter<"Booking"> | number
    campName?: StringWithAggregatesFilter<"Booking"> | string
    athleteName?: StringWithAggregatesFilter<"Booking"> | string
    email?: StringWithAggregatesFilter<"Booking"> | string
    phone?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Booking"> | $Enums.PaymentStatus
    rawData?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    acceptedTerms?: BoolWithAggregatesFilter<"Booking"> | boolean
    attended?: EnumAttendanceStatusWithAggregatesFilter<"Booking"> | $Enums.AttendanceStatus
    qrCodeUsed?: BoolWithAggregatesFilter<"Booking"> | boolean
    qrCodeData?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    qrCodeUrl?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    auth_id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    auth_id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRolesFilter<"User"> | $Enums.UserRoles
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    auth_id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRolesWithAggregatesFilter<"User"> | $Enums.UserRoles
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    tags?: StringFilter<"Post"> | string
    url?: StringFilter<"Post"> | string
    imageUrl?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    description?: StringFilter<"Post"> | string
    tags?: StringFilter<"Post"> | string
    url?: StringFilter<"Post"> | string
    imageUrl?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    description?: StringWithAggregatesFilter<"Post"> | string
    tags?: StringWithAggregatesFilter<"Post"> | string
    url?: StringWithAggregatesFilter<"Post"> | string
    imageUrl?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    brandName?: StringFilter<"Company"> | string
    shortDescription?: StringFilter<"Company"> | string
    description?: StringFilter<"Company"> | string
    logoUrl?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    lat?: FloatFilter<"Company"> | number
    lng?: FloatFilter<"Company"> | number
    facebook?: StringFilter<"Company"> | string
    instagram?: StringFilter<"Company"> | string
    twitter?: StringFilter<"Company"> | string
    tiktok?: StringFilter<"Company"> | string
    youtube?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    brandName?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    tiktok?: SortOrder
    youtube?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    brandName?: StringFilter<"Company"> | string
    shortDescription?: StringFilter<"Company"> | string
    description?: StringFilter<"Company"> | string
    logoUrl?: StringFilter<"Company"> | string
    email?: StringFilter<"Company"> | string
    phone?: StringFilter<"Company"> | string
    address?: StringFilter<"Company"> | string
    lat?: FloatFilter<"Company"> | number
    lng?: FloatFilter<"Company"> | number
    facebook?: StringFilter<"Company"> | string
    instagram?: StringFilter<"Company"> | string
    twitter?: StringFilter<"Company"> | string
    tiktok?: StringFilter<"Company"> | string
    youtube?: StringFilter<"Company"> | string
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    brandName?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    tiktok?: SortOrder
    youtube?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    brandName?: StringWithAggregatesFilter<"Company"> | string
    shortDescription?: StringWithAggregatesFilter<"Company"> | string
    description?: StringWithAggregatesFilter<"Company"> | string
    logoUrl?: StringWithAggregatesFilter<"Company"> | string
    email?: StringWithAggregatesFilter<"Company"> | string
    phone?: StringWithAggregatesFilter<"Company"> | string
    address?: StringWithAggregatesFilter<"Company"> | string
    lat?: FloatWithAggregatesFilter<"Company"> | number
    lng?: FloatWithAggregatesFilter<"Company"> | number
    facebook?: StringWithAggregatesFilter<"Company"> | string
    instagram?: StringWithAggregatesFilter<"Company"> | string
    twitter?: StringWithAggregatesFilter<"Company"> | string
    tiktok?: StringWithAggregatesFilter<"Company"> | string
    youtube?: StringWithAggregatesFilter<"Company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringWithAggregatesFilter<"Contact"> | string
    message?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type CampProgramCreateInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    slug: string
    location: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: CampSessionCreateNestedManyWithoutCampProgramInput
    hosts?: CampProgramHostCreateNestedManyWithoutCampProgramInput
  }

  export type CampProgramUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    slug: string
    location: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: CampSessionUncheckedCreateNestedManyWithoutCampProgramInput
    hosts?: CampProgramHostUncheckedCreateNestedManyWithoutCampProgramInput
  }

  export type CampProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CampSessionUpdateManyWithoutCampProgramNestedInput
    hosts?: CampProgramHostUpdateManyWithoutCampProgramNestedInput
  }

  export type CampProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CampSessionUncheckedUpdateManyWithoutCampProgramNestedInput
    hosts?: CampProgramHostUncheckedUpdateManyWithoutCampProgramNestedInput
  }

  export type CampProgramCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    slug: string
    location: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampSessionCreateInput = {
    id?: string
    label: string
    priority: number
    startDate: Date | string
    startDateString: string
    endDateString: string
    endDate: Date | string
    period: $Enums.SessionPeriod
    availableSlots: number
    price: number
    status: $Enums.CampStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campProgram: CampProgramCreateNestedOneWithoutSessionsInput
    bookings?: BookingCreateNestedManyWithoutSessionInput
  }

  export type CampSessionUncheckedCreateInput = {
    id?: string
    label: string
    priority: number
    startDate: Date | string
    startDateString: string
    endDateString: string
    endDate: Date | string
    period: $Enums.SessionPeriod
    availableSlots: number
    price: number
    status: $Enums.CampStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campProgramId: string
    bookings?: BookingUncheckedCreateNestedManyWithoutSessionInput
  }

  export type CampSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateString?: StringFieldUpdateOperationsInput | string
    endDateString?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: EnumSessionPeriodFieldUpdateOperationsInput | $Enums.SessionPeriod
    availableSlots?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumCampStatusFieldUpdateOperationsInput | $Enums.CampStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campProgram?: CampProgramUpdateOneRequiredWithoutSessionsNestedInput
    bookings?: BookingUpdateManyWithoutSessionNestedInput
  }

  export type CampSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateString?: StringFieldUpdateOperationsInput | string
    endDateString?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: EnumSessionPeriodFieldUpdateOperationsInput | $Enums.SessionPeriod
    availableSlots?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumCampStatusFieldUpdateOperationsInput | $Enums.CampStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campProgramId?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type CampSessionCreateManyInput = {
    id?: string
    label: string
    priority: number
    startDate: Date | string
    startDateString: string
    endDateString: string
    endDate: Date | string
    period: $Enums.SessionPeriod
    availableSlots: number
    price: number
    status: $Enums.CampStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campProgramId: string
  }

  export type CampSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateString?: StringFieldUpdateOperationsInput | string
    endDateString?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: EnumSessionPeriodFieldUpdateOperationsInput | $Enums.SessionPeriod
    availableSlots?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumCampStatusFieldUpdateOperationsInput | $Enums.CampStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateString?: StringFieldUpdateOperationsInput | string
    endDateString?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: EnumSessionPeriodFieldUpdateOperationsInput | $Enums.SessionPeriod
    availableSlots?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumCampStatusFieldUpdateOperationsInput | $Enums.CampStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campProgramId?: StringFieldUpdateOperationsInput | string
  }

  export type HostCreateInput = {
    id?: string
    name: string
    bio?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campPrograms?: CampProgramHostCreateNestedManyWithoutHostInput
  }

  export type HostUncheckedCreateInput = {
    id?: string
    name: string
    bio?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campPrograms?: CampProgramHostUncheckedCreateNestedManyWithoutHostInput
  }

  export type HostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campPrograms?: CampProgramHostUpdateManyWithoutHostNestedInput
  }

  export type HostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campPrograms?: CampProgramHostUncheckedUpdateManyWithoutHostNestedInput
  }

  export type HostCreateManyInput = {
    id?: string
    name: string
    bio?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampProgramHostCreateInput = {
    id?: string
    campProgram: CampProgramCreateNestedOneWithoutHostsInput
    host: HostCreateNestedOneWithoutCampProgramsInput
  }

  export type CampProgramHostUncheckedCreateInput = {
    id?: string
    campProgramId: string
    hostId: string
  }

  export type CampProgramHostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campProgram?: CampProgramUpdateOneRequiredWithoutHostsNestedInput
    host?: HostUpdateOneRequiredWithoutCampProgramsNestedInput
  }

  export type CampProgramHostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campProgramId?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
  }

  export type CampProgramHostCreateManyInput = {
    id?: string
    campProgramId: string
    hostId: string
  }

  export type CampProgramHostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CampProgramHostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campProgramId?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateInput = {
    id?: string
    stripeId: string
    amount: number
    campName: string
    athleteName: string
    email: string
    phone?: string | null
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    rawData?: string | null
    acceptedTerms: boolean
    attended: $Enums.AttendanceStatus
    qrCodeUsed?: boolean
    qrCodeData?: string | null
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session: CampSessionCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    sessionId: string
    stripeId: string
    amount: number
    campName: string
    athleteName: string
    email: string
    phone?: string | null
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    rawData?: string | null
    acceptedTerms: boolean
    attended: $Enums.AttendanceStatus
    qrCodeUsed?: boolean
    qrCodeData?: string | null
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    campName?: StringFieldUpdateOperationsInput | string
    athleteName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    attended?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    qrCodeUsed?: BoolFieldUpdateOperationsInput | boolean
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: CampSessionUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    campName?: StringFieldUpdateOperationsInput | string
    athleteName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    attended?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    qrCodeUsed?: BoolFieldUpdateOperationsInput | boolean
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    sessionId: string
    stripeId: string
    amount: number
    campName: string
    athleteName: string
    email: string
    phone?: string | null
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    rawData?: string | null
    acceptedTerms: boolean
    attended: $Enums.AttendanceStatus
    qrCodeUsed?: boolean
    qrCodeData?: string | null
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    campName?: StringFieldUpdateOperationsInput | string
    athleteName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    attended?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    qrCodeUsed?: BoolFieldUpdateOperationsInput | boolean
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    campName?: StringFieldUpdateOperationsInput | string
    athleteName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    attended?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    qrCodeUsed?: BoolFieldUpdateOperationsInput | boolean
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    auth_id: string
    email: string
    username: string
    password: string
    role: $Enums.UserRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    auth_id: string
    email: string
    username: string
    password: string
    role: $Enums.UserRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    auth_id: string
    email: string
    username: string
    password: string
    role: $Enums.UserRoles
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRolesFieldUpdateOperationsInput | $Enums.UserRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    description: string
    tags: string
    url: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateInput = {
    id?: string
    description: string
    tags: string
    url: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: string
    description: string
    tags: string
    url: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    brandName: string
    shortDescription: string
    description: string
    logoUrl: string
    email: string
    phone: string
    address: string
    lat: number
    lng: number
    facebook: string
    instagram: string
    twitter: string
    tiktok: string
    youtube: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    brandName: string
    shortDescription: string
    description: string
    logoUrl: string
    email: string
    phone: string
    address: string
    lat: number
    lng: number
    facebook: string
    instagram: string
    twitter: string
    tiktok: string
    youtube: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    tiktok?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    tiktok?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateManyInput = {
    id?: string
    brandName: string
    shortDescription: string
    description: string
    logoUrl: string
    email: string
    phone: string
    address: string
    lat: number
    lng: number
    facebook: string
    instagram: string
    twitter: string
    tiktok: string
    youtube: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    tiktok?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandName?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    facebook?: StringFieldUpdateOperationsInput | string
    instagram?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    tiktok?: StringFieldUpdateOperationsInput | string
    youtube?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type CampSessionListRelationFilter = {
    every?: CampSessionWhereInput
    some?: CampSessionWhereInput
    none?: CampSessionWhereInput
  }

  export type CampProgramHostListRelationFilter = {
    every?: CampProgramHostWhereInput
    some?: CampProgramHostWhereInput
    none?: CampProgramHostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampProgramHostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampProgramCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    slug?: SortOrder
    location?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampProgramAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type CampProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    slug?: SortOrder
    location?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampProgramMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    slug?: SortOrder
    location?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampProgramSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumSessionPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionPeriod | EnumSessionPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.SessionPeriod[] | ListEnumSessionPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionPeriod[] | ListEnumSessionPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionPeriodFilter<$PrismaModel> | $Enums.SessionPeriod
  }

  export type EnumCampStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampStatus | EnumCampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampStatus[] | ListEnumCampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampStatus[] | ListEnumCampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampStatusFilter<$PrismaModel> | $Enums.CampStatus
  }

  export type CampProgramScalarRelationFilter = {
    is?: CampProgramWhereInput
    isNot?: CampProgramWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampSessionCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    priority?: SortOrder
    startDate?: SortOrder
    startDateString?: SortOrder
    endDateString?: SortOrder
    endDate?: SortOrder
    period?: SortOrder
    availableSlots?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campProgramId?: SortOrder
  }

  export type CampSessionAvgOrderByAggregateInput = {
    priority?: SortOrder
    availableSlots?: SortOrder
    price?: SortOrder
  }

  export type CampSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    priority?: SortOrder
    startDate?: SortOrder
    startDateString?: SortOrder
    endDateString?: SortOrder
    endDate?: SortOrder
    period?: SortOrder
    availableSlots?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campProgramId?: SortOrder
  }

  export type CampSessionMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    priority?: SortOrder
    startDate?: SortOrder
    startDateString?: SortOrder
    endDateString?: SortOrder
    endDate?: SortOrder
    period?: SortOrder
    availableSlots?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campProgramId?: SortOrder
  }

  export type CampSessionSumOrderByAggregateInput = {
    priority?: SortOrder
    availableSlots?: SortOrder
    price?: SortOrder
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

  export type EnumSessionPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionPeriod | EnumSessionPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.SessionPeriod[] | ListEnumSessionPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionPeriod[] | ListEnumSessionPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionPeriodWithAggregatesFilter<$PrismaModel> | $Enums.SessionPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionPeriodFilter<$PrismaModel>
    _max?: NestedEnumSessionPeriodFilter<$PrismaModel>
  }

  export type EnumCampStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampStatus | EnumCampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampStatus[] | ListEnumCampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampStatus[] | ListEnumCampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampStatusFilter<$PrismaModel>
    _max?: NestedEnumCampStatusFilter<$PrismaModel>
  }

  export type HostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HostScalarRelationFilter = {
    is?: HostWhereInput
    isNot?: HostWhereInput
  }

  export type CampProgramHostCountOrderByAggregateInput = {
    id?: SortOrder
    campProgramId?: SortOrder
    hostId?: SortOrder
  }

  export type CampProgramHostMaxOrderByAggregateInput = {
    id?: SortOrder
    campProgramId?: SortOrder
    hostId?: SortOrder
  }

  export type CampProgramHostMinOrderByAggregateInput = {
    id?: SortOrder
    campProgramId?: SortOrder
    hostId?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type CampSessionScalarRelationFilter = {
    is?: CampSessionWhereInput
    isNot?: CampSessionWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    stripeId?: SortOrder
    amount?: SortOrder
    campName?: SortOrder
    athleteName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    rawData?: SortOrder
    acceptedTerms?: SortOrder
    attended?: SortOrder
    qrCodeUsed?: SortOrder
    qrCodeData?: SortOrder
    qrCodeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    stripeId?: SortOrder
    amount?: SortOrder
    campName?: SortOrder
    athleteName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    rawData?: SortOrder
    acceptedTerms?: SortOrder
    attended?: SortOrder
    qrCodeUsed?: SortOrder
    qrCodeData?: SortOrder
    qrCodeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    stripeId?: SortOrder
    amount?: SortOrder
    campName?: SortOrder
    athleteName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    rawData?: SortOrder
    acceptedTerms?: SortOrder
    attended?: SortOrder
    qrCodeUsed?: SortOrder
    qrCodeData?: SortOrder
    qrCodeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type EnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    url?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    tiktok?: SortOrder
    youtube?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    tiktok?: SortOrder
    youtube?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    shortDescription?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    tiktok?: SortOrder
    youtube?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampSessionCreateNestedManyWithoutCampProgramInput = {
    create?: XOR<CampSessionCreateWithoutCampProgramInput, CampSessionUncheckedCreateWithoutCampProgramInput> | CampSessionCreateWithoutCampProgramInput[] | CampSessionUncheckedCreateWithoutCampProgramInput[]
    connectOrCreate?: CampSessionCreateOrConnectWithoutCampProgramInput | CampSessionCreateOrConnectWithoutCampProgramInput[]
    createMany?: CampSessionCreateManyCampProgramInputEnvelope
    connect?: CampSessionWhereUniqueInput | CampSessionWhereUniqueInput[]
  }

  export type CampProgramHostCreateNestedManyWithoutCampProgramInput = {
    create?: XOR<CampProgramHostCreateWithoutCampProgramInput, CampProgramHostUncheckedCreateWithoutCampProgramInput> | CampProgramHostCreateWithoutCampProgramInput[] | CampProgramHostUncheckedCreateWithoutCampProgramInput[]
    connectOrCreate?: CampProgramHostCreateOrConnectWithoutCampProgramInput | CampProgramHostCreateOrConnectWithoutCampProgramInput[]
    createMany?: CampProgramHostCreateManyCampProgramInputEnvelope
    connect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
  }

  export type CampSessionUncheckedCreateNestedManyWithoutCampProgramInput = {
    create?: XOR<CampSessionCreateWithoutCampProgramInput, CampSessionUncheckedCreateWithoutCampProgramInput> | CampSessionCreateWithoutCampProgramInput[] | CampSessionUncheckedCreateWithoutCampProgramInput[]
    connectOrCreate?: CampSessionCreateOrConnectWithoutCampProgramInput | CampSessionCreateOrConnectWithoutCampProgramInput[]
    createMany?: CampSessionCreateManyCampProgramInputEnvelope
    connect?: CampSessionWhereUniqueInput | CampSessionWhereUniqueInput[]
  }

  export type CampProgramHostUncheckedCreateNestedManyWithoutCampProgramInput = {
    create?: XOR<CampProgramHostCreateWithoutCampProgramInput, CampProgramHostUncheckedCreateWithoutCampProgramInput> | CampProgramHostCreateWithoutCampProgramInput[] | CampProgramHostUncheckedCreateWithoutCampProgramInput[]
    connectOrCreate?: CampProgramHostCreateOrConnectWithoutCampProgramInput | CampProgramHostCreateOrConnectWithoutCampProgramInput[]
    createMany?: CampProgramHostCreateManyCampProgramInputEnvelope
    connect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CampSessionUpdateManyWithoutCampProgramNestedInput = {
    create?: XOR<CampSessionCreateWithoutCampProgramInput, CampSessionUncheckedCreateWithoutCampProgramInput> | CampSessionCreateWithoutCampProgramInput[] | CampSessionUncheckedCreateWithoutCampProgramInput[]
    connectOrCreate?: CampSessionCreateOrConnectWithoutCampProgramInput | CampSessionCreateOrConnectWithoutCampProgramInput[]
    upsert?: CampSessionUpsertWithWhereUniqueWithoutCampProgramInput | CampSessionUpsertWithWhereUniqueWithoutCampProgramInput[]
    createMany?: CampSessionCreateManyCampProgramInputEnvelope
    set?: CampSessionWhereUniqueInput | CampSessionWhereUniqueInput[]
    disconnect?: CampSessionWhereUniqueInput | CampSessionWhereUniqueInput[]
    delete?: CampSessionWhereUniqueInput | CampSessionWhereUniqueInput[]
    connect?: CampSessionWhereUniqueInput | CampSessionWhereUniqueInput[]
    update?: CampSessionUpdateWithWhereUniqueWithoutCampProgramInput | CampSessionUpdateWithWhereUniqueWithoutCampProgramInput[]
    updateMany?: CampSessionUpdateManyWithWhereWithoutCampProgramInput | CampSessionUpdateManyWithWhereWithoutCampProgramInput[]
    deleteMany?: CampSessionScalarWhereInput | CampSessionScalarWhereInput[]
  }

  export type CampProgramHostUpdateManyWithoutCampProgramNestedInput = {
    create?: XOR<CampProgramHostCreateWithoutCampProgramInput, CampProgramHostUncheckedCreateWithoutCampProgramInput> | CampProgramHostCreateWithoutCampProgramInput[] | CampProgramHostUncheckedCreateWithoutCampProgramInput[]
    connectOrCreate?: CampProgramHostCreateOrConnectWithoutCampProgramInput | CampProgramHostCreateOrConnectWithoutCampProgramInput[]
    upsert?: CampProgramHostUpsertWithWhereUniqueWithoutCampProgramInput | CampProgramHostUpsertWithWhereUniqueWithoutCampProgramInput[]
    createMany?: CampProgramHostCreateManyCampProgramInputEnvelope
    set?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    disconnect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    delete?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    connect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    update?: CampProgramHostUpdateWithWhereUniqueWithoutCampProgramInput | CampProgramHostUpdateWithWhereUniqueWithoutCampProgramInput[]
    updateMany?: CampProgramHostUpdateManyWithWhereWithoutCampProgramInput | CampProgramHostUpdateManyWithWhereWithoutCampProgramInput[]
    deleteMany?: CampProgramHostScalarWhereInput | CampProgramHostScalarWhereInput[]
  }

  export type CampSessionUncheckedUpdateManyWithoutCampProgramNestedInput = {
    create?: XOR<CampSessionCreateWithoutCampProgramInput, CampSessionUncheckedCreateWithoutCampProgramInput> | CampSessionCreateWithoutCampProgramInput[] | CampSessionUncheckedCreateWithoutCampProgramInput[]
    connectOrCreate?: CampSessionCreateOrConnectWithoutCampProgramInput | CampSessionCreateOrConnectWithoutCampProgramInput[]
    upsert?: CampSessionUpsertWithWhereUniqueWithoutCampProgramInput | CampSessionUpsertWithWhereUniqueWithoutCampProgramInput[]
    createMany?: CampSessionCreateManyCampProgramInputEnvelope
    set?: CampSessionWhereUniqueInput | CampSessionWhereUniqueInput[]
    disconnect?: CampSessionWhereUniqueInput | CampSessionWhereUniqueInput[]
    delete?: CampSessionWhereUniqueInput | CampSessionWhereUniqueInput[]
    connect?: CampSessionWhereUniqueInput | CampSessionWhereUniqueInput[]
    update?: CampSessionUpdateWithWhereUniqueWithoutCampProgramInput | CampSessionUpdateWithWhereUniqueWithoutCampProgramInput[]
    updateMany?: CampSessionUpdateManyWithWhereWithoutCampProgramInput | CampSessionUpdateManyWithWhereWithoutCampProgramInput[]
    deleteMany?: CampSessionScalarWhereInput | CampSessionScalarWhereInput[]
  }

  export type CampProgramHostUncheckedUpdateManyWithoutCampProgramNestedInput = {
    create?: XOR<CampProgramHostCreateWithoutCampProgramInput, CampProgramHostUncheckedCreateWithoutCampProgramInput> | CampProgramHostCreateWithoutCampProgramInput[] | CampProgramHostUncheckedCreateWithoutCampProgramInput[]
    connectOrCreate?: CampProgramHostCreateOrConnectWithoutCampProgramInput | CampProgramHostCreateOrConnectWithoutCampProgramInput[]
    upsert?: CampProgramHostUpsertWithWhereUniqueWithoutCampProgramInput | CampProgramHostUpsertWithWhereUniqueWithoutCampProgramInput[]
    createMany?: CampProgramHostCreateManyCampProgramInputEnvelope
    set?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    disconnect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    delete?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    connect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    update?: CampProgramHostUpdateWithWhereUniqueWithoutCampProgramInput | CampProgramHostUpdateWithWhereUniqueWithoutCampProgramInput[]
    updateMany?: CampProgramHostUpdateManyWithWhereWithoutCampProgramInput | CampProgramHostUpdateManyWithWhereWithoutCampProgramInput[]
    deleteMany?: CampProgramHostScalarWhereInput | CampProgramHostScalarWhereInput[]
  }

  export type CampProgramCreateNestedOneWithoutSessionsInput = {
    create?: XOR<CampProgramCreateWithoutSessionsInput, CampProgramUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CampProgramCreateOrConnectWithoutSessionsInput
    connect?: CampProgramWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutSessionInput = {
    create?: XOR<BookingCreateWithoutSessionInput, BookingUncheckedCreateWithoutSessionInput> | BookingCreateWithoutSessionInput[] | BookingUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSessionInput | BookingCreateOrConnectWithoutSessionInput[]
    createMany?: BookingCreateManySessionInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<BookingCreateWithoutSessionInput, BookingUncheckedCreateWithoutSessionInput> | BookingCreateWithoutSessionInput[] | BookingUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSessionInput | BookingCreateOrConnectWithoutSessionInput[]
    createMany?: BookingCreateManySessionInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSessionPeriodFieldUpdateOperationsInput = {
    set?: $Enums.SessionPeriod
  }

  export type EnumCampStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampStatus
  }

  export type CampProgramUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<CampProgramCreateWithoutSessionsInput, CampProgramUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CampProgramCreateOrConnectWithoutSessionsInput
    upsert?: CampProgramUpsertWithoutSessionsInput
    connect?: CampProgramWhereUniqueInput
    update?: XOR<XOR<CampProgramUpdateToOneWithWhereWithoutSessionsInput, CampProgramUpdateWithoutSessionsInput>, CampProgramUncheckedUpdateWithoutSessionsInput>
  }

  export type BookingUpdateManyWithoutSessionNestedInput = {
    create?: XOR<BookingCreateWithoutSessionInput, BookingUncheckedCreateWithoutSessionInput> | BookingCreateWithoutSessionInput[] | BookingUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSessionInput | BookingCreateOrConnectWithoutSessionInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSessionInput | BookingUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: BookingCreateManySessionInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSessionInput | BookingUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSessionInput | BookingUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<BookingCreateWithoutSessionInput, BookingUncheckedCreateWithoutSessionInput> | BookingCreateWithoutSessionInput[] | BookingUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSessionInput | BookingCreateOrConnectWithoutSessionInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSessionInput | BookingUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: BookingCreateManySessionInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSessionInput | BookingUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSessionInput | BookingUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CampProgramHostCreateNestedManyWithoutHostInput = {
    create?: XOR<CampProgramHostCreateWithoutHostInput, CampProgramHostUncheckedCreateWithoutHostInput> | CampProgramHostCreateWithoutHostInput[] | CampProgramHostUncheckedCreateWithoutHostInput[]
    connectOrCreate?: CampProgramHostCreateOrConnectWithoutHostInput | CampProgramHostCreateOrConnectWithoutHostInput[]
    createMany?: CampProgramHostCreateManyHostInputEnvelope
    connect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
  }

  export type CampProgramHostUncheckedCreateNestedManyWithoutHostInput = {
    create?: XOR<CampProgramHostCreateWithoutHostInput, CampProgramHostUncheckedCreateWithoutHostInput> | CampProgramHostCreateWithoutHostInput[] | CampProgramHostUncheckedCreateWithoutHostInput[]
    connectOrCreate?: CampProgramHostCreateOrConnectWithoutHostInput | CampProgramHostCreateOrConnectWithoutHostInput[]
    createMany?: CampProgramHostCreateManyHostInputEnvelope
    connect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
  }

  export type CampProgramHostUpdateManyWithoutHostNestedInput = {
    create?: XOR<CampProgramHostCreateWithoutHostInput, CampProgramHostUncheckedCreateWithoutHostInput> | CampProgramHostCreateWithoutHostInput[] | CampProgramHostUncheckedCreateWithoutHostInput[]
    connectOrCreate?: CampProgramHostCreateOrConnectWithoutHostInput | CampProgramHostCreateOrConnectWithoutHostInput[]
    upsert?: CampProgramHostUpsertWithWhereUniqueWithoutHostInput | CampProgramHostUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: CampProgramHostCreateManyHostInputEnvelope
    set?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    disconnect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    delete?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    connect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    update?: CampProgramHostUpdateWithWhereUniqueWithoutHostInput | CampProgramHostUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: CampProgramHostUpdateManyWithWhereWithoutHostInput | CampProgramHostUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: CampProgramHostScalarWhereInput | CampProgramHostScalarWhereInput[]
  }

  export type CampProgramHostUncheckedUpdateManyWithoutHostNestedInput = {
    create?: XOR<CampProgramHostCreateWithoutHostInput, CampProgramHostUncheckedCreateWithoutHostInput> | CampProgramHostCreateWithoutHostInput[] | CampProgramHostUncheckedCreateWithoutHostInput[]
    connectOrCreate?: CampProgramHostCreateOrConnectWithoutHostInput | CampProgramHostCreateOrConnectWithoutHostInput[]
    upsert?: CampProgramHostUpsertWithWhereUniqueWithoutHostInput | CampProgramHostUpsertWithWhereUniqueWithoutHostInput[]
    createMany?: CampProgramHostCreateManyHostInputEnvelope
    set?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    disconnect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    delete?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    connect?: CampProgramHostWhereUniqueInput | CampProgramHostWhereUniqueInput[]
    update?: CampProgramHostUpdateWithWhereUniqueWithoutHostInput | CampProgramHostUpdateWithWhereUniqueWithoutHostInput[]
    updateMany?: CampProgramHostUpdateManyWithWhereWithoutHostInput | CampProgramHostUpdateManyWithWhereWithoutHostInput[]
    deleteMany?: CampProgramHostScalarWhereInput | CampProgramHostScalarWhereInput[]
  }

  export type CampProgramCreateNestedOneWithoutHostsInput = {
    create?: XOR<CampProgramCreateWithoutHostsInput, CampProgramUncheckedCreateWithoutHostsInput>
    connectOrCreate?: CampProgramCreateOrConnectWithoutHostsInput
    connect?: CampProgramWhereUniqueInput
  }

  export type HostCreateNestedOneWithoutCampProgramsInput = {
    create?: XOR<HostCreateWithoutCampProgramsInput, HostUncheckedCreateWithoutCampProgramsInput>
    connectOrCreate?: HostCreateOrConnectWithoutCampProgramsInput
    connect?: HostWhereUniqueInput
  }

  export type CampProgramUpdateOneRequiredWithoutHostsNestedInput = {
    create?: XOR<CampProgramCreateWithoutHostsInput, CampProgramUncheckedCreateWithoutHostsInput>
    connectOrCreate?: CampProgramCreateOrConnectWithoutHostsInput
    upsert?: CampProgramUpsertWithoutHostsInput
    connect?: CampProgramWhereUniqueInput
    update?: XOR<XOR<CampProgramUpdateToOneWithWhereWithoutHostsInput, CampProgramUpdateWithoutHostsInput>, CampProgramUncheckedUpdateWithoutHostsInput>
  }

  export type HostUpdateOneRequiredWithoutCampProgramsNestedInput = {
    create?: XOR<HostCreateWithoutCampProgramsInput, HostUncheckedCreateWithoutCampProgramsInput>
    connectOrCreate?: HostCreateOrConnectWithoutCampProgramsInput
    upsert?: HostUpsertWithoutCampProgramsInput
    connect?: HostWhereUniqueInput
    update?: XOR<XOR<HostUpdateToOneWithWhereWithoutCampProgramsInput, HostUpdateWithoutCampProgramsInput>, HostUncheckedUpdateWithoutCampProgramsInput>
  }

  export type CampSessionCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CampSessionCreateWithoutBookingsInput, CampSessionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CampSessionCreateOrConnectWithoutBookingsInput
    connect?: CampSessionWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type CampSessionUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CampSessionCreateWithoutBookingsInput, CampSessionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CampSessionCreateOrConnectWithoutBookingsInput
    upsert?: CampSessionUpsertWithoutBookingsInput
    connect?: CampSessionWhereUniqueInput
    update?: XOR<XOR<CampSessionUpdateToOneWithWhereWithoutBookingsInput, CampSessionUpdateWithoutBookingsInput>, CampSessionUncheckedUpdateWithoutBookingsInput>
  }

  export type EnumUserRolesFieldUpdateOperationsInput = {
    set?: $Enums.UserRoles
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumSessionPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionPeriod | EnumSessionPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.SessionPeriod[] | ListEnumSessionPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionPeriod[] | ListEnumSessionPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionPeriodFilter<$PrismaModel> | $Enums.SessionPeriod
  }

  export type NestedEnumCampStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampStatus | EnumCampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampStatus[] | ListEnumCampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampStatus[] | ListEnumCampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampStatusFilter<$PrismaModel> | $Enums.CampStatus
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

  export type NestedEnumSessionPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionPeriod | EnumSessionPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.SessionPeriod[] | ListEnumSessionPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionPeriod[] | ListEnumSessionPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionPeriodWithAggregatesFilter<$PrismaModel> | $Enums.SessionPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionPeriodFilter<$PrismaModel>
    _max?: NestedEnumSessionPeriodFilter<$PrismaModel>
  }

  export type NestedEnumCampStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampStatus | EnumCampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CampStatus[] | ListEnumCampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CampStatus[] | ListEnumCampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCampStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCampStatusFilter<$PrismaModel>
    _max?: NestedEnumCampStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesFilter<$PrismaModel> | $Enums.UserRoles
  }

  export type NestedEnumUserRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRoles | EnumUserRolesFieldRefInput<$PrismaModel>
    in?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRoles[] | ListEnumUserRolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRolesWithAggregatesFilter<$PrismaModel> | $Enums.UserRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRolesFilter<$PrismaModel>
    _max?: NestedEnumUserRolesFilter<$PrismaModel>
  }

  export type CampSessionCreateWithoutCampProgramInput = {
    id?: string
    label: string
    priority: number
    startDate: Date | string
    startDateString: string
    endDateString: string
    endDate: Date | string
    period: $Enums.SessionPeriod
    availableSlots: number
    price: number
    status: $Enums.CampStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutSessionInput
  }

  export type CampSessionUncheckedCreateWithoutCampProgramInput = {
    id?: string
    label: string
    priority: number
    startDate: Date | string
    startDateString: string
    endDateString: string
    endDate: Date | string
    period: $Enums.SessionPeriod
    availableSlots: number
    price: number
    status: $Enums.CampStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutSessionInput
  }

  export type CampSessionCreateOrConnectWithoutCampProgramInput = {
    where: CampSessionWhereUniqueInput
    create: XOR<CampSessionCreateWithoutCampProgramInput, CampSessionUncheckedCreateWithoutCampProgramInput>
  }

  export type CampSessionCreateManyCampProgramInputEnvelope = {
    data: CampSessionCreateManyCampProgramInput | CampSessionCreateManyCampProgramInput[]
    skipDuplicates?: boolean
  }

  export type CampProgramHostCreateWithoutCampProgramInput = {
    id?: string
    host: HostCreateNestedOneWithoutCampProgramsInput
  }

  export type CampProgramHostUncheckedCreateWithoutCampProgramInput = {
    id?: string
    hostId: string
  }

  export type CampProgramHostCreateOrConnectWithoutCampProgramInput = {
    where: CampProgramHostWhereUniqueInput
    create: XOR<CampProgramHostCreateWithoutCampProgramInput, CampProgramHostUncheckedCreateWithoutCampProgramInput>
  }

  export type CampProgramHostCreateManyCampProgramInputEnvelope = {
    data: CampProgramHostCreateManyCampProgramInput | CampProgramHostCreateManyCampProgramInput[]
    skipDuplicates?: boolean
  }

  export type CampSessionUpsertWithWhereUniqueWithoutCampProgramInput = {
    where: CampSessionWhereUniqueInput
    update: XOR<CampSessionUpdateWithoutCampProgramInput, CampSessionUncheckedUpdateWithoutCampProgramInput>
    create: XOR<CampSessionCreateWithoutCampProgramInput, CampSessionUncheckedCreateWithoutCampProgramInput>
  }

  export type CampSessionUpdateWithWhereUniqueWithoutCampProgramInput = {
    where: CampSessionWhereUniqueInput
    data: XOR<CampSessionUpdateWithoutCampProgramInput, CampSessionUncheckedUpdateWithoutCampProgramInput>
  }

  export type CampSessionUpdateManyWithWhereWithoutCampProgramInput = {
    where: CampSessionScalarWhereInput
    data: XOR<CampSessionUpdateManyMutationInput, CampSessionUncheckedUpdateManyWithoutCampProgramInput>
  }

  export type CampSessionScalarWhereInput = {
    AND?: CampSessionScalarWhereInput | CampSessionScalarWhereInput[]
    OR?: CampSessionScalarWhereInput[]
    NOT?: CampSessionScalarWhereInput | CampSessionScalarWhereInput[]
    id?: StringFilter<"CampSession"> | string
    label?: StringFilter<"CampSession"> | string
    priority?: IntFilter<"CampSession"> | number
    startDate?: DateTimeFilter<"CampSession"> | Date | string
    startDateString?: StringFilter<"CampSession"> | string
    endDateString?: StringFilter<"CampSession"> | string
    endDate?: DateTimeFilter<"CampSession"> | Date | string
    period?: EnumSessionPeriodFilter<"CampSession"> | $Enums.SessionPeriod
    availableSlots?: IntFilter<"CampSession"> | number
    price?: FloatFilter<"CampSession"> | number
    status?: EnumCampStatusFilter<"CampSession"> | $Enums.CampStatus
    createdAt?: DateTimeFilter<"CampSession"> | Date | string
    updatedAt?: DateTimeFilter<"CampSession"> | Date | string
    campProgramId?: StringFilter<"CampSession"> | string
  }

  export type CampProgramHostUpsertWithWhereUniqueWithoutCampProgramInput = {
    where: CampProgramHostWhereUniqueInput
    update: XOR<CampProgramHostUpdateWithoutCampProgramInput, CampProgramHostUncheckedUpdateWithoutCampProgramInput>
    create: XOR<CampProgramHostCreateWithoutCampProgramInput, CampProgramHostUncheckedCreateWithoutCampProgramInput>
  }

  export type CampProgramHostUpdateWithWhereUniqueWithoutCampProgramInput = {
    where: CampProgramHostWhereUniqueInput
    data: XOR<CampProgramHostUpdateWithoutCampProgramInput, CampProgramHostUncheckedUpdateWithoutCampProgramInput>
  }

  export type CampProgramHostUpdateManyWithWhereWithoutCampProgramInput = {
    where: CampProgramHostScalarWhereInput
    data: XOR<CampProgramHostUpdateManyMutationInput, CampProgramHostUncheckedUpdateManyWithoutCampProgramInput>
  }

  export type CampProgramHostScalarWhereInput = {
    AND?: CampProgramHostScalarWhereInput | CampProgramHostScalarWhereInput[]
    OR?: CampProgramHostScalarWhereInput[]
    NOT?: CampProgramHostScalarWhereInput | CampProgramHostScalarWhereInput[]
    id?: StringFilter<"CampProgramHost"> | string
    campProgramId?: StringFilter<"CampProgramHost"> | string
    hostId?: StringFilter<"CampProgramHost"> | string
  }

  export type CampProgramCreateWithoutSessionsInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    slug: string
    location: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hosts?: CampProgramHostCreateNestedManyWithoutCampProgramInput
  }

  export type CampProgramUncheckedCreateWithoutSessionsInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    slug: string
    location: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hosts?: CampProgramHostUncheckedCreateNestedManyWithoutCampProgramInput
  }

  export type CampProgramCreateOrConnectWithoutSessionsInput = {
    where: CampProgramWhereUniqueInput
    create: XOR<CampProgramCreateWithoutSessionsInput, CampProgramUncheckedCreateWithoutSessionsInput>
  }

  export type BookingCreateWithoutSessionInput = {
    id?: string
    stripeId: string
    amount: number
    campName: string
    athleteName: string
    email: string
    phone?: string | null
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    rawData?: string | null
    acceptedTerms: boolean
    attended: $Enums.AttendanceStatus
    qrCodeUsed?: boolean
    qrCodeData?: string | null
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUncheckedCreateWithoutSessionInput = {
    id?: string
    stripeId: string
    amount: number
    campName: string
    athleteName: string
    email: string
    phone?: string | null
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    rawData?: string | null
    acceptedTerms: boolean
    attended: $Enums.AttendanceStatus
    qrCodeUsed?: boolean
    qrCodeData?: string | null
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutSessionInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSessionInput, BookingUncheckedCreateWithoutSessionInput>
  }

  export type BookingCreateManySessionInputEnvelope = {
    data: BookingCreateManySessionInput | BookingCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type CampProgramUpsertWithoutSessionsInput = {
    update: XOR<CampProgramUpdateWithoutSessionsInput, CampProgramUncheckedUpdateWithoutSessionsInput>
    create: XOR<CampProgramCreateWithoutSessionsInput, CampProgramUncheckedCreateWithoutSessionsInput>
    where?: CampProgramWhereInput
  }

  export type CampProgramUpdateToOneWithWhereWithoutSessionsInput = {
    where?: CampProgramWhereInput
    data: XOR<CampProgramUpdateWithoutSessionsInput, CampProgramUncheckedUpdateWithoutSessionsInput>
  }

  export type CampProgramUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hosts?: CampProgramHostUpdateManyWithoutCampProgramNestedInput
  }

  export type CampProgramUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hosts?: CampProgramHostUncheckedUpdateManyWithoutCampProgramNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutSessionInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutSessionInput, BookingUncheckedUpdateWithoutSessionInput>
    create: XOR<BookingCreateWithoutSessionInput, BookingUncheckedCreateWithoutSessionInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutSessionInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutSessionInput, BookingUncheckedUpdateWithoutSessionInput>
  }

  export type BookingUpdateManyWithWhereWithoutSessionInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutSessionInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    sessionId?: StringFilter<"Booking"> | string
    stripeId?: StringFilter<"Booking"> | string
    amount?: FloatFilter<"Booking"> | number
    campName?: StringFilter<"Booking"> | string
    athleteName?: StringFilter<"Booking"> | string
    email?: StringFilter<"Booking"> | string
    phone?: StringNullableFilter<"Booking"> | string | null
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    rawData?: StringNullableFilter<"Booking"> | string | null
    acceptedTerms?: BoolFilter<"Booking"> | boolean
    attended?: EnumAttendanceStatusFilter<"Booking"> | $Enums.AttendanceStatus
    qrCodeUsed?: BoolFilter<"Booking"> | boolean
    qrCodeData?: StringNullableFilter<"Booking"> | string | null
    qrCodeUrl?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type CampProgramHostCreateWithoutHostInput = {
    id?: string
    campProgram: CampProgramCreateNestedOneWithoutHostsInput
  }

  export type CampProgramHostUncheckedCreateWithoutHostInput = {
    id?: string
    campProgramId: string
  }

  export type CampProgramHostCreateOrConnectWithoutHostInput = {
    where: CampProgramHostWhereUniqueInput
    create: XOR<CampProgramHostCreateWithoutHostInput, CampProgramHostUncheckedCreateWithoutHostInput>
  }

  export type CampProgramHostCreateManyHostInputEnvelope = {
    data: CampProgramHostCreateManyHostInput | CampProgramHostCreateManyHostInput[]
    skipDuplicates?: boolean
  }

  export type CampProgramHostUpsertWithWhereUniqueWithoutHostInput = {
    where: CampProgramHostWhereUniqueInput
    update: XOR<CampProgramHostUpdateWithoutHostInput, CampProgramHostUncheckedUpdateWithoutHostInput>
    create: XOR<CampProgramHostCreateWithoutHostInput, CampProgramHostUncheckedCreateWithoutHostInput>
  }

  export type CampProgramHostUpdateWithWhereUniqueWithoutHostInput = {
    where: CampProgramHostWhereUniqueInput
    data: XOR<CampProgramHostUpdateWithoutHostInput, CampProgramHostUncheckedUpdateWithoutHostInput>
  }

  export type CampProgramHostUpdateManyWithWhereWithoutHostInput = {
    where: CampProgramHostScalarWhereInput
    data: XOR<CampProgramHostUpdateManyMutationInput, CampProgramHostUncheckedUpdateManyWithoutHostInput>
  }

  export type CampProgramCreateWithoutHostsInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    slug: string
    location: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: CampSessionCreateNestedManyWithoutCampProgramInput
  }

  export type CampProgramUncheckedCreateWithoutHostsInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    slug: string
    location: string
    lat: number
    lng: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: CampSessionUncheckedCreateNestedManyWithoutCampProgramInput
  }

  export type CampProgramCreateOrConnectWithoutHostsInput = {
    where: CampProgramWhereUniqueInput
    create: XOR<CampProgramCreateWithoutHostsInput, CampProgramUncheckedCreateWithoutHostsInput>
  }

  export type HostCreateWithoutCampProgramsInput = {
    id?: string
    name: string
    bio?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HostUncheckedCreateWithoutCampProgramsInput = {
    id?: string
    name: string
    bio?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HostCreateOrConnectWithoutCampProgramsInput = {
    where: HostWhereUniqueInput
    create: XOR<HostCreateWithoutCampProgramsInput, HostUncheckedCreateWithoutCampProgramsInput>
  }

  export type CampProgramUpsertWithoutHostsInput = {
    update: XOR<CampProgramUpdateWithoutHostsInput, CampProgramUncheckedUpdateWithoutHostsInput>
    create: XOR<CampProgramCreateWithoutHostsInput, CampProgramUncheckedCreateWithoutHostsInput>
    where?: CampProgramWhereInput
  }

  export type CampProgramUpdateToOneWithWhereWithoutHostsInput = {
    where?: CampProgramWhereInput
    data: XOR<CampProgramUpdateWithoutHostsInput, CampProgramUncheckedUpdateWithoutHostsInput>
  }

  export type CampProgramUpdateWithoutHostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CampSessionUpdateManyWithoutCampProgramNestedInput
  }

  export type CampProgramUncheckedUpdateWithoutHostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: CampSessionUncheckedUpdateManyWithoutCampProgramNestedInput
  }

  export type HostUpsertWithoutCampProgramsInput = {
    update: XOR<HostUpdateWithoutCampProgramsInput, HostUncheckedUpdateWithoutCampProgramsInput>
    create: XOR<HostCreateWithoutCampProgramsInput, HostUncheckedCreateWithoutCampProgramsInput>
    where?: HostWhereInput
  }

  export type HostUpdateToOneWithWhereWithoutCampProgramsInput = {
    where?: HostWhereInput
    data: XOR<HostUpdateWithoutCampProgramsInput, HostUncheckedUpdateWithoutCampProgramsInput>
  }

  export type HostUpdateWithoutCampProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HostUncheckedUpdateWithoutCampProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampSessionCreateWithoutBookingsInput = {
    id?: string
    label: string
    priority: number
    startDate: Date | string
    startDateString: string
    endDateString: string
    endDate: Date | string
    period: $Enums.SessionPeriod
    availableSlots: number
    price: number
    status: $Enums.CampStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campProgram: CampProgramCreateNestedOneWithoutSessionsInput
  }

  export type CampSessionUncheckedCreateWithoutBookingsInput = {
    id?: string
    label: string
    priority: number
    startDate: Date | string
    startDateString: string
    endDateString: string
    endDate: Date | string
    period: $Enums.SessionPeriod
    availableSlots: number
    price: number
    status: $Enums.CampStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    campProgramId: string
  }

  export type CampSessionCreateOrConnectWithoutBookingsInput = {
    where: CampSessionWhereUniqueInput
    create: XOR<CampSessionCreateWithoutBookingsInput, CampSessionUncheckedCreateWithoutBookingsInput>
  }

  export type CampSessionUpsertWithoutBookingsInput = {
    update: XOR<CampSessionUpdateWithoutBookingsInput, CampSessionUncheckedUpdateWithoutBookingsInput>
    create: XOR<CampSessionCreateWithoutBookingsInput, CampSessionUncheckedCreateWithoutBookingsInput>
    where?: CampSessionWhereInput
  }

  export type CampSessionUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CampSessionWhereInput
    data: XOR<CampSessionUpdateWithoutBookingsInput, CampSessionUncheckedUpdateWithoutBookingsInput>
  }

  export type CampSessionUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateString?: StringFieldUpdateOperationsInput | string
    endDateString?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: EnumSessionPeriodFieldUpdateOperationsInput | $Enums.SessionPeriod
    availableSlots?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumCampStatusFieldUpdateOperationsInput | $Enums.CampStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campProgram?: CampProgramUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type CampSessionUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateString?: StringFieldUpdateOperationsInput | string
    endDateString?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: EnumSessionPeriodFieldUpdateOperationsInput | $Enums.SessionPeriod
    availableSlots?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumCampStatusFieldUpdateOperationsInput | $Enums.CampStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campProgramId?: StringFieldUpdateOperationsInput | string
  }

  export type CampSessionCreateManyCampProgramInput = {
    id?: string
    label: string
    priority: number
    startDate: Date | string
    startDateString: string
    endDateString: string
    endDate: Date | string
    period: $Enums.SessionPeriod
    availableSlots: number
    price: number
    status: $Enums.CampStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampProgramHostCreateManyCampProgramInput = {
    id?: string
    hostId: string
  }

  export type CampSessionUpdateWithoutCampProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateString?: StringFieldUpdateOperationsInput | string
    endDateString?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: EnumSessionPeriodFieldUpdateOperationsInput | $Enums.SessionPeriod
    availableSlots?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumCampStatusFieldUpdateOperationsInput | $Enums.CampStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutSessionNestedInput
  }

  export type CampSessionUncheckedUpdateWithoutCampProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateString?: StringFieldUpdateOperationsInput | string
    endDateString?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: EnumSessionPeriodFieldUpdateOperationsInput | $Enums.SessionPeriod
    availableSlots?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumCampStatusFieldUpdateOperationsInput | $Enums.CampStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type CampSessionUncheckedUpdateManyWithoutCampProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startDateString?: StringFieldUpdateOperationsInput | string
    endDateString?: StringFieldUpdateOperationsInput | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: EnumSessionPeriodFieldUpdateOperationsInput | $Enums.SessionPeriod
    availableSlots?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    status?: EnumCampStatusFieldUpdateOperationsInput | $Enums.CampStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampProgramHostUpdateWithoutCampProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: HostUpdateOneRequiredWithoutCampProgramsNestedInput
  }

  export type CampProgramHostUncheckedUpdateWithoutCampProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
  }

  export type CampProgramHostUncheckedUpdateManyWithoutCampProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    hostId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManySessionInput = {
    id?: string
    stripeId: string
    amount: number
    campName: string
    athleteName: string
    email: string
    phone?: string | null
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    rawData?: string | null
    acceptedTerms: boolean
    attended: $Enums.AttendanceStatus
    qrCodeUsed?: boolean
    qrCodeData?: string | null
    qrCodeUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    campName?: StringFieldUpdateOperationsInput | string
    athleteName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    attended?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    qrCodeUsed?: BoolFieldUpdateOperationsInput | boolean
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    campName?: StringFieldUpdateOperationsInput | string
    athleteName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    attended?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    qrCodeUsed?: BoolFieldUpdateOperationsInput | boolean
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    campName?: StringFieldUpdateOperationsInput | string
    athleteName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTerms?: BoolFieldUpdateOperationsInput | boolean
    attended?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    qrCodeUsed?: BoolFieldUpdateOperationsInput | boolean
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampProgramHostCreateManyHostInput = {
    id?: string
    campProgramId: string
  }

  export type CampProgramHostUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    campProgram?: CampProgramUpdateOneRequiredWithoutHostsNestedInput
  }

  export type CampProgramHostUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    campProgramId?: StringFieldUpdateOperationsInput | string
  }

  export type CampProgramHostUncheckedUpdateManyWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    campProgramId?: StringFieldUpdateOperationsInput | string
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