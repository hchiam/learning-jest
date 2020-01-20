import React from 'react';
import Link from './Link.react';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  /** If you yarn add --dev @testing-library/react
   * You can also do things like these:
   * expect(queryByLabelText(/off/i)).toBeTruthy();
   * fireEvent.click(getByLabelText(/off/i));
   * expect(queryByLabelText(/on/i)).toBeTruthy();
   */
});
