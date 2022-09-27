# Framework and tech stack

Contents:
 * [Summary](#summary)
   * [Issue](#issue)
   * [Decision](#decision)
 * [Context](#context)
   * [Learn NestJS better](#learn-nestjs-better)
   * [Typescript familiarity](#typescript-familiarity)
   * [Rust and WebAssembly for high performance](#rust-and-webassembly-for-high-performance)
   * [Business Logic isolation](#business-logic-isolation)

## Summary

### Issue

We want to choose a good framework and tech stack.

### Decision

We will use [NestJS](https://nestjs.com/) framework along with Typescript.

## Context

### Learn NestJS better
I want to learn NestJS, as it is a framework that is used by many companies and developers and allows to change web server ([ExpressJS](https://expressjs.com/) or [Fastify](https://www.fastify.io/)) that it's using under the hood.

### Typescript familiarity
I want to use Typescript, as it is a language that is used by many companies and developers and allows to use static typing.

### Rust and WebAssembly for high performance
I could also use Rust in the future for calculating the final decision, as it is supposed to be very performant. For now, we can defer this decision until we have a proof of concept.

### Business Logic isolation
I will make sure to isolate the business logic from the framework and tech stack, so that we can change it in the future.
