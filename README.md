# 1. What's a closure? Where in the code is there a closure?

A closure is a combination of a function bundled together with references to its lexical environment, allowing the function to access variables from that environment even after the function has finished executing. A closure allows a function to "remember" and access the variables in its lexical scope even when the function is called outside that scope.

For example in the PlanetPage.vue, there is a function called fetchData that is defined in the lexical scope of the script setup block. It captures the url parameter from its outer scope, after the fetchData is defined and called, it can still access the url parameter and any other variables from the lexical scope of the script setup block, that is a closure.

# 2. Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?

Any function that calls any external asynchronous service, like a simple `fetch` or `console.log`, those are potential side-effects

In the fetchData function: 
   `` planets.value = data.results
    nextLink.value = data.next
    previousLink.value = data.previous ``
are side-effects because it modifies the external state by updating the value of:
    ``  const planets = ref<PlanetItem[]>([])
        const nextLink = ref<string | null>(null)
        const previousLink = ref<string | null>(null) ``

Yes, these sife-effects are expected becaus of the architecture of the framework.
This is a common side effect when dealing with uni-directional data flow frameworks like Vue.js, React.js.
They are already avoided making use of async/await statements.

# beyond_challenge

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
