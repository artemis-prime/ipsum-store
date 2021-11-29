# Project organization

## Domain Centered Architecture
An approach to FE organization that puts the concepts, data ontology, and actions that make up ***the purpose*** of an app at the core of design and testing. Ideally, this has the effect of fully decoupling core app logic from any quirks or organizing features of the presentation tier, such as component life cycle, state management libraries, etc.  The desired result as a "CLIable" version of the app that can be developed and tested entirely separately from any UI. 

## domain: 'the actual app'
As the heading says, this intentionally captures all essential core features of the app aside from presentation. It contains two things: 

* A definition of the ***ontology of the app***, in the form of `Interface`s that define the various elements of the domain, as well as ***design patterns and their participants***, including those of interactors / controllers. Note that this entails much more than just "type-safety" and error prevention, but also allows and encourages development where we think of our core patterns and objects at their most essential level **first**. Many developers that work with types start to notice that this kind of focus is a much better way to work, as it greatly improves overall clarity, expressiveness, and encapsulation. It's the ***real*** reason to use types! 
* Services and Interactors organized by domain area that encompass the functionality of the app apart from the UI. At mininum this includes `service`s that encapsulate ***CRUD, etc.*** of common data types. Also, ideally, ***interactors encompass state transitions*** in a way that is similar to `REST` API's: one can ask to put the app into various states by manipulating objects and that can then be verified by examination.  

### "Look ma, no `state`!" (kind of...)
One might notice that there is no specific area devoted to "state management" in this outline. There is a reason for this.  Recall that we want to avoid dependence and  conflation with particular presentation technologies and their quirks.  As such, "state management" is actually definitely one of those, we want to avoid it dictating our architectural choices. 

In practice of course, state management is sometimes actually necessary. But even in those cases, it should just live quietly in the `domain`, rather than polluting the code with a slew of things called "reducers", "dispatchers" etc. This would clearly violate our core principle of the architecture reflecting the domain, and not quirks of the display technology. 

This is one of the many ways that `MobX` really shines as compared to `Redux` and why it finds a place in our stack. This kind of domain-focused approach is at the heart of its core conception.  Unlike in `Redux`, any field of any object in the domain can become `observable` to UI components and refresh them.  And all this is without the need for the highly opinionated patterns of `Reducer`, `Action`, and `Dispatch` appearing anywhere. One simple defines variables to be observed, and then directly dereferences them in any `render()` method or functional component. 

For example

```
// domain/cart/CartManager.tsx
class CheckoutManager {
  @observable currentCart: Cart | undefined = undefined
  // ....
}

// components/CartView.tsx
const CartView: React.FC<{}> = () => {
  const checkoutManager = useCheckoutManager() // custom hook for convenience
  return (
    {cartManager.currentCart ? (
      <h3>Your Cart ({checkoutManager.currentCart.itemCount})</h3>
      {//...}
    ) : (
      <Button onClick={beginShopping}>Begin Shopping</Button>
    )}
  )
}
```

There is much more on `MobX` and how it fits into our desired architectural approach. Links will be provided in other documents.

## components: stupid and general
Components are all the widgets, cards, tables, etc. that display and interact with the domain objects of the app. They do not (in most cases) contain any direct data access or even encode functional info such as "this widget links to this page".  They just provide a simple way to accomplish the core tasks of displaying and interacting with the apps objects.  

### If there is more than one file that makes up a component, use a ***PascalCase directory*** per component
So if `CartView` contains several files, they'd appear as follows:

```
components/CartView/
              CartView.tsx
              cartView.scss
              SubcomponentFoo.tsx
              cartViewHelpers.ts
              stateAbbreviationsUS.json
```

Only the main one is referenced in the `index` for `components` and is thus visible to the outside world:

```
// components/index.ts

export { default as CartView } from './CartView/CartView'
//...
```

Note that anything that is ***not a React component***, such as `scss` files, utilities, helpers are ***camalCase to distinguish them*** from components.

### "page components"
Any components that only appear on one page of the app should live with that page, not in the `component`s tree.  (cf: current `pages/offer/OfferMessageCard`).  However, once you are "repeating yourself", it is better to move the component to this tree. This keeps things tidy by keeping a clear line between general and specific.

### View, Card, Modal, etc
The core function of a component should be kept as separate from it's visual "container" as possible. Toward that end, it's often best and most practical for most components to start as a `View` ie, something agnostic about where and how it appears (in a `Card`, `Modal` or whatever else).  That way various presentation forms can simply wrap the component as needed.  

```
import { MessagesView } from 'components' // main functionality

const MessagesCard = () => (
  <Card>
    <MessagesView/>
  </Card>
)

```

In practice, this is often the level at which the "specificity" of the component, ie, its link to the domain also lives.  As in the current code:

```
import { MessagesView } from 'components' 
import { useProductMessagesService } from 'domain/product/ProductMessagesService'

const ProductMessagesCard: React.FC<{
  productId: string
}> = ({
  productId
}) => {
  // connection to the data.
  // What makes this an *Product*MessagesCard! 
  const source = useProductMessagesService() 
  return (
    <Card>
      <MessagesView 
        messagesSource={source} 
        messagesKey={productId}
        {//...}
    </Card>
  )
}
```

