import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React from 'react';
import { ObjectPageSection } from './index';

describe('ObjectPageSection', () => {
  test('Renders with children', () => {
    const { asFragment } = render(
      <ObjectPageSection id={'1'} titleText="Test" titleTextUppercase>
        This is my Text
      </ObjectPageSection>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('ObjectPage w/ lowercase title', () => {
    const { asFragment } = render(
      <ObjectPageSection id={'1'} titleText="Test" titleTextUppercase={false}>
        This is my Text
      </ObjectPageSection>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Empty Id Prop', () => {
    const renderer = () => render(<ObjectPageSection />);
    expect(renderer).toThrow();
  });

  createCustomPropsTest(ObjectPageSection);
});
