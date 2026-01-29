---
title: "The Agentic Deployment Era: Why We Need to Build for Machines"
date: "2026-01-29"
template: "post"
draft: false
slug: "agentic-deployments"
category: "software-engineering"
tags:
  - "AI"
  - "devops"
  - "infrastructure"
  - "grafana"
description: "A shift is happening in how we think about deployment platforms. The user is no longer just a human clicking buttons. It's an agent."
socialImage: ""
---

## tldr;

1. Developer Experience (DX) optimized for humans is hitting a ceiling
2. AI agents are becoming the primary operators of our infrastructure
3. Platforms like Encore get this right: declarative, API-first, machine-readable
4. At Grafana, we're seeing this shift in how observability is consumed
5. Build for Agent Experience (AX) or become the bottleneck

## The Realization

I've spent years thinking about how to make infrastructure easier for developers. Better dashboards. Cleaner CLIs. Golden paths. The assumption was always the same: a human will be the one running `kubectl apply` or clicking "Deploy" in some UI.

That assumption is breaking down.

In my work at Grafana, I'm watching AI agents take over more and more of the operational loop. They're not just generating code anymore—they're deploying it, monitoring it, and responding to incidents. The question isn't whether agents will manage our infrastructure. It's whether our infrastructure is ready for them.

## Why DX Alone Won't Cut It

A great developer portal is useless to an agent. Think about it:

- Visual dashboards? Agents can't see pixels.
- Intuitive navigation? Agents need explicit paths.
- "Easy to use" UIs? Easy for whom?

An agent doesn't "guess" its way through a workflow. It needs:

```yaml
# What an agent wants
input: structured
output: predictable
errors: actionable
discovery: programmatic
```

If your deployment platform requires a human to interpret something, you've introduced a bottleneck. And that bottleneck will cost you as agent-driven development scales.

## What Encore Gets Right

I've been playing with [Encore](https://encore.dev) lately, and it's one of the few platforms that feels like it was built with agents in mind—even if that wasn't the original intent.

Here's what stands out:

**1. Declarative Infrastructure**

You don't write infrastructure code. You write application code, and the infrastructure is derived:

```go
//encore:api public
func GetUser(ctx context.Context, id string) (*User, error) {
    // Your logic here
}
```

The framework infers the API endpoint, generates the client, and handles the deployment topology. An agent can understand this. There's no hidden state, no imperative scripts to reverse-engineer.

**2. Machine-Readable Everything**

Encore generates OpenAPI specs, infrastructure graphs, and dependency maps automatically. An agent can parse these to understand:
- What services exist
- How they connect
- What deploying a change will affect

**3. Deterministic Deployments**

`encore deploy` gives you the same result every time. No drift. No "works on my machine." An agent can run this command 1000 times and expect consistent outcomes.

**4. Structured Error Messages**

When something fails, you get structured output:

```json
{
  "error": "service_dependency_missing",
  "service": "payments",
  "missing": "database/transactions",
  "hint": "Add transactions database to your encore.app"
}
```

An agent can read this, understand the problem, and fix it without human intervention.

## The Grafana Angle

At Grafana, I worked on authorization and access control systems. What I'm seeing is that observability consumption is shifting.

Today, a human looks at a dashboard, notices a spike, and investigates. Tomorrow, an agent monitors the metrics API directly, correlates anomalies, and either fixes the issue or escalates with full context.

We're building for this future. The OpenFGA work I was involved in is fundamentally about making authorization decisions programmatic and auditable—exactly what an agent needs to operate safely in a system.

The pattern is the same everywhere:

| Human-First | Agent-First |
|-------------|-------------|
| Dashboard UI | Metrics API |
| Wiki documentation | OpenAPI specs |
| "Click here to deploy" | `deploy --json` |
| Slack alerts | Structured webhooks |

## Building for AX

If you're building platforms or infrastructure tools, here's the shift:

**From visual to programmatic.** Every action should be API-callable. If it only exists in a UI, an agent can't use it.

**From prose to schema.** Documentation should be machine-parseable. Think OpenAPI, JSON Schema, structured metadata—not wiki pages.

**From error codes to recovery hints.** `Error 500` is a dead end. `Error: rate_limit_exceeded, retry_after: 30s` is actionable.

**From implicit to explicit.** Don't assume the user will "figure it out." An agent won't.

## The Cultural Shift

This isn't just a technical change. It's a mindset shift.

We've spent decades optimizing for human cognition—visual hierarchy, intuitive layouts, helpful tooltips. These matter less when your user is an LLM with perfect recall but zero ability to interpret ambiguity.

The platforms that win in 2026 and beyond will be the ones that treat agents as first-class citizens. Not as an afterthought. Not as a "feature." As the primary user.

## Conclusion

The developer experience movement was about reducing friction for humans. The agent experience era is about eliminating friction for machines.

Platforms like Encore are already there—declarative, deterministic, machine-readable by default. At Grafana, we're building observability and authorization systems with the same principles.

If you're still building for human eyes only, you're building for yesterday. The agents are here. They're deploying code, managing infrastructure, and responding to incidents.

The question is: are your systems ready to let them?

## Links

- Encore: https://encore.dev
- OpenFGA: https://openfga.dev
- Grafana: https://grafana.com
