import { AuthenticatedSessionContext, Ctx } from "next/types";
import { Await, EnsurePromise } from "next/types/utils";
interface ResultWithContext<Result = unknown, Context = unknown> {
    __blitz: true;
    value: Result;
    ctx: Context;
}
export interface AuthenticatedMiddlewareCtx extends Omit<Ctx, "session"> {
    session: AuthenticatedSessionContext;
}
declare type PipeFn<Prev, Next, PrevCtx, NextCtx = PrevCtx> = (i: Await<Prev>, c: PrevCtx) => Next extends ResultWithContext ? never : Next | ResultWithContext<Next, NextCtx>;
declare function pipe<A, Z>(ab: (i: A, c: Ctx) => Z): (input: A, ctx: Ctx) => EnsurePromise<Z>;
declare function pipe<A, B, C, CA = Ctx, CB = CA, CC = CB>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>): (input: A, ctx: CA) => EnsurePromise<C>;
declare function pipe<A, B, C, D, CA = Ctx, CB = CA, CC = CB, CD = CC>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>, cd: PipeFn<C, D, CC, CD>): (input: A, ctx: CA) => EnsurePromise<D>;
declare function pipe<A, B, C, D, E, CA = Ctx, CB = CA, CC = CB, CD = CC, CE = CD>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>, cd: PipeFn<C, D, CC, CD>, de: PipeFn<D, E, CD, CE>): (input: A, ctx: CA) => EnsurePromise<E>;
declare function pipe<A, B, C, D, E, F, CA = Ctx, CB = CA, CC = CB, CD = CC, CE = CD, CF = CE>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>, cd: PipeFn<C, D, CC, CD>, de: PipeFn<D, E, CD, CE>, ef: PipeFn<E, F, CE, CF>): (input: A, ctx: CA) => EnsurePromise<F>;
declare function pipe<A, B, C, D, E, F, G, CA = Ctx, CB = CA, CC = CB, CD = CC, CE = CD, CF = CE, CG = CF>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>, cd: PipeFn<C, D, CC, CD>, de: PipeFn<D, E, CD, CE>, ef: PipeFn<E, F, CE, CF>, fg: PipeFn<F, G, CF, CG>): (input: A, ctx: CA) => EnsurePromise<CG>;
declare function pipe<A, B, C, D, E, F, G, H, CA = Ctx, CB = CA, CC = CB, CD = CC, CE = CD, CF = CE, CG = CF, CH = CG>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>, cd: PipeFn<C, D, CC, CD>, de: PipeFn<D, E, CD, CE>, ef: PipeFn<E, F, CE, CF>, fg: PipeFn<F, G, CF, CG>, gh: PipeFn<G, H, CG, CH>): (input: A, ctx: CA) => EnsurePromise<H>;
declare function pipe<A, B, C, D, E, F, G, H, I, CA = Ctx, CB = CA, CC = CB, CD = CC, CE = CD, CF = CE, CG = CF, CH = CG, CI = CH>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>, cd: PipeFn<C, D, CC, CD>, de: PipeFn<D, E, CD, CE>, ef: PipeFn<E, F, CE, CF>, fg: PipeFn<F, G, CF, CG>, gh: PipeFn<G, H, CG, CH>, hi: PipeFn<H, I, CH, CI>): (input: A, ctx: CA) => EnsurePromise<I>;
declare function pipe<A, B, C, D, E, F, G, H, I, J, CA = Ctx, CB = CA, CC = CB, CD = CC, CE = CD, CF = CE, CG = CF, CH = CG, CI = CH, CJ = CI>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>, cd: PipeFn<C, D, CC, CD>, de: PipeFn<D, E, CD, CE>, ef: PipeFn<E, F, CE, CF>, fg: PipeFn<F, G, CF, CG>, gh: PipeFn<G, H, CG, CH>, hi: PipeFn<H, I, CH, CI>, ij: PipeFn<I, J, CI, CJ>): (input: A, ctx: CA) => EnsurePromise<J>;
declare function pipe<A, B, C, D, E, F, G, H, I, J, K, CA = Ctx, CB = CA, CC = CB, CD = CC, CE = CD, CF = CE, CG = CF, CH = CG, CI = CH, CJ = CI, CK = CJ>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>, cd: PipeFn<C, D, CC, CD>, de: PipeFn<D, E, CD, CE>, ef: PipeFn<E, F, CE, CF>, fg: PipeFn<F, G, CF, CG>, gh: PipeFn<G, H, CG, CH>, hi: PipeFn<H, I, CH, CI>, ij: PipeFn<I, J, CI, CJ>, jk: PipeFn<J, K, CJ, CK>): (input: A, ctx: CA) => EnsurePromise<K>;
declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, CA = Ctx, CB = CA, CC = CB, CD = CC, CE = CD, CF = CE, CG = CF, CH = CG, CI = CH, CJ = CI, CK = CJ, CL = CK>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>, cd: PipeFn<C, D, CC, CD>, de: PipeFn<D, E, CD, CE>, ef: PipeFn<E, F, CE, CF>, fg: PipeFn<F, G, CF, CG>, gh: PipeFn<G, H, CG, CH>, hi: PipeFn<H, I, CH, CI>, ij: PipeFn<I, J, CI, CJ>, jk: PipeFn<J, K, CJ, CK>, kl: PipeFn<K, L, CK, CL>): (input: A, ctx: CA) => EnsurePromise<L>;
declare function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, CA = Ctx, CB = CA, CC = CB, CD = CC, CE = CD, CF = CE, CG = CF, CH = CG, CI = CH, CJ = CI, CK = CJ, CL = CK, CM = CL>(ab: PipeFn<A, B, CA, CB>, bc: PipeFn<B, C, CB, CC>, cd: PipeFn<C, D, CC, CD>, de: PipeFn<D, E, CD, CE>, ef: PipeFn<E, F, CE, CF>, fg: PipeFn<F, G, CF, CG>, gh: PipeFn<G, H, CG, CH>, hi: PipeFn<H, I, CH, CI>, ij: PipeFn<I, J, CI, CJ>, jk: PipeFn<J, K, CJ, CK>, kl: PipeFn<K, L, CK, CL>, lm: PipeFn<L, M, CL, CM>): (input: A, ctx: CA) => EnsurePromise<M>;
export declare type ParserType = "sync" | "async";
export declare const resolver: {
    pipe: typeof pipe;
};
export {};
