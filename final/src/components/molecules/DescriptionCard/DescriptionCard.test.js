import React from 'react';
import DescriptionCard from './DescriptionCard'

import { cleanup, fireEvent, render, screen} from '@testing-library/react'

afterEach(cleanup)

describe('App', () => {
    test('check the Descption Card title', () => {
      const {getByTestId}=render(<DescriptionCard  head="What it takes"/>)
      const name = getByTestId('heading')
      expect(name.textContent).toBe('What it takes')
    })
  })


