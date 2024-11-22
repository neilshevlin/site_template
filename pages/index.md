---
title: Home
description: Home Template
---

{% section .hero %}

# This is your Index / Home template

This page demonstrates the various components available in this template.

## Basic Components

### Callout Component
{% callout type="warning" %}
This is a warning callout for important alerts!
{% /callout %}

### Section Component
{% section .custom-section %}
This content is wrapped in a section component, which can be styled separately.
{% /section %}

### Code Component
{% code %}
function helloWorld() {
  console.log("Hello from the code component!");
}
{% /code %}

## Interactive Components

### Python Sandbox
{% pythonsandbox %}
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
{% /pythonsandbox %}

### Generic Sandbox
{% sandbox %}
console.log("This is a JavaScript sandbox");
{% /sandbox %}

## Layout Components

### Side by Side

{% side-by-side %}
This is the left side content.
It can span multiple lines.

You can even add code:
```js
console.log("Left side!");
```
===
This is the right side content.
It can also span multiple lines.

And have its own code:
```js
console.log("Right side!");
```
{% /side-by-side %}

### Features Grid
{% features %}
{% item %}
### Feature 1
Description of first feature
{% /item %}

{% item %}
### Feature 2
Description of second feature
{% /item %}
{% /features %}

### Data Table
{% datatable %}
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
{% /datatable %}

### ASCII Diagram
{% ascii %}
+-------------+
|   Box One   |
+-------------+
      |
      v
+-------------+
|   Box Two   |
+-------------+
{% /ascii %}

### Diagram
{% diagram %}
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[OK]
    B -->|No| D[Cancel]
{% /diagram %}

{% /section %}