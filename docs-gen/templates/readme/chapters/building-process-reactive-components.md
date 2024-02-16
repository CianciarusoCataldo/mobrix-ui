### Reactive components

<br>

Some components are designed with a specific structure, to sync their internal state with an external input value. This kind of component handle internally their actual value, using the `value` parameter as starting point. This let the component to be driven in 2 different way:

- Internally, Its internal `value`, when using the component without changing its value parameter from code

- External, passing the `value` parameter

So, we have 2 scenarios:

- If you change the component value
  using the component(without changing the `value` parameter), it will be updated internally.

- If you change the passed `value` parameter, the component will sync its value with the given one.

A clear example is the [Input](https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input) component. When changing the `value` parameter, the component will sync its actual value.

<br>

---

---

<br>
