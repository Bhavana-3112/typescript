# TypeScript

##  Why Use TypeScript?

TypeScript is similar to JavaScript, but with including types.

TypeScript is **JavaScript with superpowers**:
-  Adds strong static typing
-  Catches errors early (at compile time!)
-  Scales better for large applications
-  Improves code completion & IntelliSense in your editor


---
  
##  Quick Start Guide

### 1.Install Node.js (if not already)

[Download Node.js](https://nodejs.org)  
Verify installation:

```bash
node -v
npm -v
```
### 2.Install TypeScript & ts-node
Install locally for a safe, project-scoped setup:

```bash

npm install --save-dev typescript ts-node
```

Or install globally:

```bash

npm install -g typescript ts-node
```
### 3.Initialize tsconfig.json

Run the following to generate your TypeScript config file:

```bash
npx tsc --init
```

### 4.Recommended config:
```bash

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
```

## Running TypeScript Code

🔹 With ts-node (Recommended for learning):

```bash
npx ts-node src/index.ts
```

🔹 Or compile & run:

```bash

npx tsc      # Compiles to /dist

node dist/index.js

```

## Topics to Explore

✅ Basic Types (string, number, boolean, etc.)

✅ Interfaces and Type Aliases

✅ Optional Chaining ?.

✅ Nullish Coalescing ??

✅ Classes and Access Modifiers

✅ Type Assertions and Narrowing

✅ Union & Intersection Types

✅ Generics

✅ Enums and Tuples

✅ Modules and Exports

### Learn More

Official Docs: https://www.typescriptlang.org/docs


