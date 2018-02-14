---
layout: docs
title: Typography
page_title: Typography - turretcss - A Responsive Front-end Framework for Accessible and Semantic Websites
description: A guide to the use of turretcss style definitions with typographic HTML elements including headings, paragraphs, blockquotes, etc.
permalink: /docs/typography/
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Headings

<h1>Heading 1 <small>Heading 1 small</small></h1>
<h2>Heading 2 <small>Heading 2 small</small></h2>
<h3>Heading 3 <small>Heading 3 small</small></h3>
<h4>Heading 4 <small>Heading 4 small</small></h4>
<h5>Heading 5 <small>Heading 5 small</small></h5>
<h6>Heading 6 <small>Heading 6 small</small></h6>

```scss
--headings-margin: 2em 0 1em 0;
--headings-font-family: inherit;
--headings-font-weight: var(--font-weight-bold);
--headings-color: inherit;
--headings-line-height: var(--line-height-s);
--headings-text-transform: none;
--headings-letter-spacing: var(--letter-spacing);

--headings-small-font-family: inherit;
--headings-small-font-weight: inherit;
--headings-small-size: 0.6em;
--headings-small-color: inherit;

--h1-font-size: 2.25rem;
--h2-font-size: 2.0rem;
--h3-font-size: 1.5rem;
--h4-font-size: 1.25rem;
--h5-font-size: 1.125rem;
--h6-font-size: 1rem;
```

```html
<h1>Heading 1 <small>Heading 1 small</small></h1>
<h2>Heading 2 <small>Heading 2 small</small></h2>
<h3>Heading 3 <small>Heading 3 small</small></h3>
<h4>Heading 4 <small>Heading 4 small</small></h4>
<h5>Heading 5 <small>Heading 5 small</small></h5>
<h6>Heading 6 <small>Heading 6 small</small></h6>
```

## Display Title

<h1 class="display-title">Display Title</h1>

```scss
--display-title-margin: 0;
--display-title-font-family: var(--headings-font-family);
--display-title-font-weight: var(--headings-font-weight);
--display-title-font-size: 2.25rem;
--display-title-color: inherit;
--display-title-line-height: var(--line-height-xs);
--display-title-text-transform: uppercase;
--display-title-letter-spacing: var(--letter-spacing-m);
```

```html
<h1 class="display-title">...</h1>
```

## Big

The `.big` class is used for responsive text that scales between min/max sizes based on a varience between min/max widths and the viewport width.

<p class="big">Big</p>

```scss
--big-margin: 0.5em 0;
--big-font-family: var(--headings-font-family);
--big-font-weight: var(--headings-font-weight);
--big-line-height: var(--line-height-xs);
--big-base-size: 36px;
--big-min-size: 36;
--big-max-size: 56;
--big-base-width: 320px;
--big-min-width: 320;
--big-max-width: 960;
```

```html
<p class="big">...</p>
```

## Small Caps

<h2 class="small-caps">Small Caps</h2>

```scss
--small-caps-margin: 1em 0;
--small-caps-font-family: var(--headings-font-family);
--small-caps-font-weight: var(--headings-font-weight);
--small-caps-font-size: var(--font-size-s);
--small-caps-line-height: var(--line-height-xs);
--small-caps-text-transform: uppercase;
--small-caps-letter-spacing: var(--letter-spacing);
```

```html
<h2 class="small-caps">...</h2>
```

## Lead

<p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur.</p>

```scss
--lead-margin: 0.5em 0 1em 0;
--lead-font-family: inherit;
--lead-font-weight: inherit;
--lead-font-size: var(--font-size-xl);
--lead-color: inherit;
--lead-line-height: var(--line-height-m);
```

```html
<p class="lead">...</p>
```

## Paragraph

<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

```scss
--paragraph-margin: 1em 0;
--paragraph-font-family: inherit;
--paragraph-font-weight: inherit;
--paragraph-font-size: var(--font-size-m);
--paragraph-color: inherit;
--paragraph-line-height: var(--line-height-m);
```

```html
<p>...</p>
```

## Link

```scss
--link-color: currentColor;
--link-text-decoration: underline;
--link-hover-color: currentColor;
--link-hover-decoration: underline;
```

<p><a href="index.html">Link</a></p>

```html
<a href="">...</a>
```

## Strong

<strong>strong</strong>

```scss
--strong-font-family: inherit;
--strong-font-weight: var(--font-weight-bold);
--strong-color: inherit;
```

```html
<strong>...</strong>
```

## Emphasis

<em>emphasis</em>

```scss
--emphasis-font-style: italic;
```

```html
<em>...</em>
```

## Horizontal Rule

<hr>

```scss
--horizontal-rule-margin: var(--margin-s) auto;
--horizontal-rule-height: var(--border-width);
--horizontal-rule-background: var(--light);
```

```html
<hr>
```

## Blockquote

<blockquote>
  <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur.</p>
</blockquote>

```scss
--blockquote-margin: 2em 0;
--blockquote-padding: 0 1em;
--blockquote-font-family: inherit;
--blockquote-font-weight: var(--lead-font-weight);
--blockquote-font-size: var(--lead-font-size);
--blockquote-font-style: normal;
--blockquote-line-height: var(--lead-line-height);
--blockquote-color: var(--lead-color);
```

```html
<blockquote>
  <p>...</p>
  <cite>...</cite>
</blockquote>
```

## Cite

<cite>Name</cite>

```scss
--cite-margin: 1em 0;
--cite-font-family: inherit;
--cite-font-weight: inherit;
--cite-font-size: var(--font-size-s);
--cite-font-style: normal;
--cite-color: inherit;
--cite-text-align: left;
```

```html
<cite>...</cite>
```

## List

```scss
--list-margin: 1em 0;
--list-padding: 0;
--list-font-family: var(--paragraph-font-family);
--list-font-weight: var(--paragraph-font-weight);
--list-font-size: var(--paragraph-font-size);
--list-color: var(--paragraph-color);
--list-line-height: var(--paragraph-line-height);

--list-item-margin: 0.5em 0 0.5em 1.5em;
--list-item-padding: 0 0 0 0.5em;

--child-list-margin:  0.5em 0 0.5em 0;
--child-list-padding: 0;
--child-list-item-margin: var(--list-item-margin);
--child-list-item-padding: var(--list-item-padding);
```

### Unordered List

<ul>
  <li>Vehicula Dapibus Tellus Fermentum</li>
  <li>Vehicula Dapibus Tellus Fermentum</li>
  <li>Vehicula Dapibus Tellus Fermentum
    <ul>
      <li>Vehicula Dapibus Tellus Fermentum</li>
      <li>Vehicula Dapibus Tellus Fermentum</li>
    </ul>
  </li>
</ul>

```scss
--unordered-list-icon: disc;
--unordered-child-list-icon: disc;
```

```html
<ul>
  <li>...</li>
  <li>
    <ul>
      <li>...</li>
    </ul>
  </li>
</ul>
```

### Ordered List

<ol>
  <li>Vehicula Dapibus Tellus Fermentum</li>
  <li>Vehicula Dapibus Tellus Fermentum</li>
  <li>Vehicula Dapibus Tellus Fermentum
    <ol>
      <li>Vehicula Dapibus Tellus Fermentum</li>
      <li>Vehicula Dapibus Tellus Fermentum</li>
    </ol>
  </li>
</ol>

```html
<ol>
  <li>...</li>
  <li>
    <ol>
      <li>...</li>
    </ol>
  </li>
</ol>
```

## Definition List

<dl>
  <dt>Fringilla Ipsum Tellus</dt>
  <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
  <dt>Fringilla Ipsum Tellus</dt>
  <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
  <dt>Fringilla Ipsum Tellus</dt>
  <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
</dl>

```scss
--definition-list-margin: var(--paragraph-margin);
--definition-list-padding: 0;
--definition-list-font-size: var(--paragraph-font-size);

--definition-term-margin: 0.5em 0;
--definition-term-font-family: var(--strong-font-family);
--definition-term-font-weight: var(--strong-font-weight);
--definition-term-font-size: inherit;
--definition-term-color: var(--paragraph-color);

--definition-description-margin: 0 0 1em 0;
--definition-description-font-family: var(--paragraph-font-family);
--definition-description-font-weight: var(--paragraph-font-weight);
--definition-description-font-size: inherit;
--definition-description-color: var(--paragraph-color);
```

```html
<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

## Code

<code>&lt;p&gt;code&lt;/p&gt;</code>

```scss
--code-font-family: var(--font-family-monospace);
--code-font-weight: normal;
--code-font-size: 80%;
--code-color: var(--secondary);
```

```html
<code>...</code>
```

## Pre

<pre><code>&lt;p&gt;pre&lt;/p&gt;</code></pre>

```scss
--pre-margin: 1em 0;
--pre-padding: 1em;
--pre-font-family: var(--code-font-family);
--pre-font-weight: normal;
--pre-font-size: var(--code-font-size);
--pre-color: inherit;
--pre-tab-size: 4;
--pre-hyphens: none;
--pre-line-height: var(--line-height-m);
--pre-background: var(--light-100);
--pre-border-width: var(--border-width);
--pre-border-style: var(--border-style);
--pre-border-color: var(--border-color);
--pre-border-radius: var(--border-radius);

--pre-code-color: var(--code-color);
```

```html
<pre><code>...</code></pre>
```

## Kbd

<p>Save file: <kbd>cmd</kbd> + <kbd>S</kbd></p>

```scss
--kbd-margin: 0 0.2em;
--kbd-padding: 0.2em 0.4em;
--kbd-font-family: var(--code-font-family);
--kbd-font-weight: var(--code-font-weight);
--kbd-font-size: var(--code-font-size);
--kbd-color: var(--code-color);
--kbd-background: var(--pre-background);
--kbd-border-width: var(--pre-border-width);
--kbd-border-style: var(--pre-border-style);
--kbd-border-color: var(--pre-border-color);
--kbd-border-radius: var(--pre-border-radius);
```

```html
<kbd>...</kbd>
```

## Mark

<p><mark>mark</mark></p>

```scss
--mark-margin: 0;
--mark-padding: 0.2em 0.4em;
--mark-font-family: inherit;
--mark-font-weight: inherit;
--mark-font-size: inherit;
--mark-color: inherit;
--mark-background: yellow;
```

```html
<mark>...</mark>
```

```html
<mark class="error">...</mark>
<mark class="warning">...</mark>
<mark class="success">...</mark>
<mark class="info">...</mark>
```
