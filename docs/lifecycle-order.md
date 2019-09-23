# lifecycle-order

Ensures that all Stencil `lifecycles` are written in correct order.

## Config

Order could be `alphabetical` or `call-order`

This is the correct order for **call-order**:

- connectedCallback
- componentWillLoad
- componentDidLoad
- componentWillRender
- componentDidRender
- componentShouldUpdate
- componentWillUpdate
- componentDidUpdate
- componentDidUnload
- disconnectedCallback
- render

## Usage

```json
{ "@d0whc3r/stencil/lifecycle-order": ["error", "alphabetical"] }
```

```json
{ "@d0whc3r/stencil/lifecycle-order": ["error", "call-order"] }
```
