# Phase 20 — Mathematical Model Specification

## Decision variable

For each candidate product-corridor observation i:

x_i ∈ {0,1}

where x_i = 1 means the candidate normalized flow is selected.

## Parameters

- m_i: normalized margin contribution for candidate i.
- f_i: normalized flow-unit requirement for candidate i.
- e(i): corridor associated with candidate i.
- C_e: capacity of corridor e.

Principal analytical capacity:

C_e = 3.

## Objective

maximize

Σ_i m_i x_i

## Shared corridor capacity

For every corridor e:

Σ_{i:e(i)=e} f_i x_i ≤ C_e

## Domain

x_i ∈ {0,1}.

## Interpretation

The model is a discrete selection/allocation problem because the candidate-flow decisions are binary and multiple candidate product flows compete for a shared corridor capacity.

The current public benchmark contains `flow_unit = 1.0` for the displayed candidate observations. Therefore, under this baseline formulation, capacity 3 permits at most three selected normalized units on a corridor.

## What is not established by the public record

The following historical details are not recoverable from the published output alone:

1. the exact original solver/library;
2. the complete preprocessing and candidate-filtering code;
3. whether additional product-origin supply and product-destination demand constraints were simultaneously active in the historical run;
4. tie-breaking rules;
5. solver tolerances and random seeds, if any.

Accordingly, Phase 20 distinguishes the documented mathematical structure from the unrecovered implementation details.
