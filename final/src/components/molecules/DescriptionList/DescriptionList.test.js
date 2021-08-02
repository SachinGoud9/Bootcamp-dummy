import React from 'react';
import DescriptionList from './DescriptionList'

import { cleanup, fireEvent, render, screen} from '@testing-library/react'

afterEach(cleanup)

describe('App', () => {
    test('check the List title', () => {
      const {getByTestId}=render(<DescriptionList  title="What it takes"/>)
      const name = getByTestId('heading')
      expect(name.textContent).toBe('What it takes')
    })
  })


