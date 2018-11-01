import { compose, withContext, withStateHandlers } from 'recompose';
import PropTypes from 'prop-types';

/**
 * A settable windowRoot `Element` context provider.
 *
 * This makes an element referenece accessable without needing to pass it down through the props
 * by using windowRootConsumer(), which will attach `windowRoot` to a component's props.
 *
 * Inside the wrapped component we can use `this.props.setWindowRoot(Element)` to change the value
 * stored inside the context.
 *
 * Mainly use in window() to determine the root Element to attach portals to.
 *
 * Usage:
 *
 * class Foo extends Component {
 *   render() {
 *     return (
 *       <div>
 *         // Any children of this component will be able to use windowRootConsumer, to access the
 *         // windowRoot, and setWindowRoot props.
 *         <MyConsumingComponent />
 *
 *         // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
 *         <div ref={this.setWindowRoot} />
 *       </div>
 *     );
 *   }
 * }
 *
 * // This is where we attach the provider
 * export WindowRootProvider(Foo);
 */

const windowRootProvider = compose(
  withStateHandlers(
    () => ({
      windowRoot: document.body,
    }),
    {
      setWindowRoot: () => windowRoot => ({
        windowRoot,
      }),
    },
  ),
  withContext(
    {
      windowRoot: PropTypes.instanceOf(Element),
      setWindowRoot: PropTypes.func,
    },
    props => ({
      windowRoot: props.windowRoot,
      setWindowRoot: props.setWindowRoot,
    }),
  ),
);

export default windowRootProvider;
