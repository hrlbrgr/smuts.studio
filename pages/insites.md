---
type: page
title: Insites
date: 2020-01-03
description: Interesting, inspirational, insightful interfaces, interactions and innovations. By Shu Ding.
image: https://shud-og.vercel.app/api/og?title=Insites.
---

# Insites

Interesting, inspirational, insightful interfaces, interactions, and innovations.

export function Insite({ title, url, description }) {
  const H3 = 'h3'
  return (
    <a className="insite-card block font-semibold" href={url} target="_blank">
      <H3>
        {title}
      </H3>
      <p>{description}</p>
    </a>
  );
}

### What if we have another way to communicate?

<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
  <Insite title="Void 1" url="/insites/void" description="An empty canvas (desktop only)." />
  <Insite title="Void 2" url="/insites/void-ii" description="Another empty canvas (desktop only)." />
  <Insite title="Infinite" url="https://twitter.com/shuding_/status/1324763353533698049" description="An infinite canvas with infinite content."/>
</div>

### What can we do with our limited tools?

<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
  <Insite title="CSS-Only Dino Game" url="/insites/dino.html" description="A trick to reflect document state from CSS animations (Chrome only)." />
  <Insite title="CSS-Only Magnifier" url="/insites/magnifier.html" description="A draggable magnifier (Chrome only)." />
  <Insite title="Deutsch.css" url="/insites/deutsch-css" description="Translate any website into Deutsch (Chrome preferred)." />
  <Insite title="Primes.css" url="/insites/primes-css" description="Finding primes with CSS." />
</div>

### How can we think differently for things we are used to?

<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.25rem'}}>
  <Insite title="Fade-In Animation 1" url="https://twitter.com/shuding_/status/1552438750470340610" description="Brightness and blur." />
  <Insite title="Fade-In Animation 2" url="https://twitter.com/shuding_/status/1553175201357221893" description="Ken Burns." />
  <Insite title="Fade-In Animation 3" url="https://twitter.com/shuding_/status/1556357928176730113" description="Mask." />
</div>
