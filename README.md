# rogain-component-each

Returns a tree of the `data` mapped to children.  Each child can access the current element with the `@item` (or `as` attribute) properties and the current index with `@index`.

```html
<Each data={searchResults} as="result">
    <Card title={result.title} contents={result.excerpt} />
</Each>
```

__Attributes__

___data___

Variable. Array.

___as___

String. Optional. Defines the local variable name for accessing each element in `data`. Defaults to `@item`.

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-component-each
```

## License

MIT