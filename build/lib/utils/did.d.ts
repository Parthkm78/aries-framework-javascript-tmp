/**
 * Based on DidUtils implementation in Aries Framework .NET
 * @see: https://github.com/hyperledger/aries-framework-dotnet/blob/f90eaf9db8548f6fc831abea917e906201755763/src/Hyperledger.Aries/Utils/DidUtils.cs
 *
 * Some context about full verkeys versus abbreviated verkeys:
 *  A standard verkey is 32 bytes, and by default in Indy the DID is chosen as the first 16 bytes of that key, before base58 encoding.
 *  An abbreviated verkey replaces the first 16 bytes of the verkey with ~ when it matches the DID.
 *
 *  When a full verkey is used to register on the ledger, this is stored as a full verkey on the ledger and also returned from the ledger as a full verkey.
 *  The same applies to an abbreviated verkey. If an abbreviated verkey is used to register on the ledger, this is stored as an abbreviated verkey on the ledger and also returned from the ledger as an abbreviated verkey.
 *
 *  For this reason we need some methods to check whether verkeys are full or abbreviated, so we can align this with `indy.abbreviateVerkey`
 *
 *  Aries Framework .NET also abbreviates verkey before sending to ledger:
 *  https://github.com/hyperledger/aries-framework-dotnet/blob/f90eaf9db8548f6fc831abea917e906201755763/src/Hyperledger.Aries/Ledger/DefaultLedgerService.cs#L139-L147
 */
export declare const FULL_VERKEY_REGEX: RegExp;
export declare const ABBREVIATED_VERKEY_REGEX: RegExp;
export declare const VERKEY_REGEX: RegExp;
export declare const DID_REGEX: RegExp;
export declare const DID_IDENTIFIER_REGEX: RegExp;
/**
 * Check a base58 encoded string against a regex expression to determine if it is a full valid verkey
 * @param verkey Base58 encoded string representation of a verkey
 * @return Boolean indicating if the string is a valid verkey
 */
export declare function isFullVerkey(verkey: string): boolean;
/**
 * Check a base58 encoded string against a regex expression to determine if it is a valid abbreviated verkey
 * @param verkey Base58 encoded string representation of an abbreviated verkey
 * @returns Boolean indicating if the string is a valid abbreviated verkey
 */
export declare function isAbbreviatedVerkey(verkey: string): boolean;
/**
 * Check a base58 encoded string to determine if it is a valid verkey
 * @param verkey Base58 encoded string representation of a verkey
 * @returns Boolean indicating if the string is a valid verkey
 */
export declare function isVerkey(verkey: string): boolean;
/**
 * Check a string to determine if it is a valid did
 * @param did
 * @return Boolean indicating if the string is a valid did
 */
export declare function isDid(did: string): boolean;
/**
 * Check a string to determine if it is a valid did identifier.
 * @param identifier Did identifier. This is a did without the did:method part
 * @return Boolean indicating if the string is a valid did identifier
 */
export declare function isDidIdentifier(identifier: string): boolean;
