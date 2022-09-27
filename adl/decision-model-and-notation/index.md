# Decision Model and Notation (DMN)

Contents:

* [Summary](#summary)
  * [Issue](#issue)
  * [Decision](#decision)
* [Context](#context)
  * [Approach so far](#approach-so-far)
  * [Industry standards](#industry-standards)

## Summary

### Issue

We would like to create quickly a working decision engine that can be used by other developers and companies.

### Decision

We will use [DMN](https://en.wikipedia.org/wiki/Decision_Model_and_Notation) standard to create decision models.

## Context

### Approach so far

I've had a couple of approaches to creating a decision engine:
 - Graph database, using Neo4J
 - Google Spreadsheet, with a kind of firewall approach, where next rule overrides parameters being set by the previous rules

All of these required to manually set the rules and parameters, which is not very convenient.

### Industry standards

I've come across DMN when looking for any open-source decision engine. I've found [Open Rules](https://openrules.com/) and [Camunda](https://camunda.com/).

Camunda uses also BPMN.

I don't know well any of these standards, but I've decided to use DMN, as it is a standard.
