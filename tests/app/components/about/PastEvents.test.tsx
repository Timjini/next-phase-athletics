import React from 'react';
import {render, screen} from '@testing-library/react';
import { PastEvent } from '@/app/components/about/PastEvents';

describe('past events display', () => {
    it('render past events components', () => {
        render(<PastEvent />)

        expect(
            screen.getByRole(
                'heading',{name: /Our Events & Programs/ }
            )
        ).toBeInTheDocument();

        expect(screen.getByText(/XLR8 Performance Camp June/i)).toBeInTheDocument();

        expect(
            screen.getByText(/Summer Camp: XLR8 training camp/i)
          ).toBeInTheDocument();
          expect(
            screen.getByText(/Year-round development program for youth/i)
          ).toBeInTheDocument();
        
        expect(
            screen.getByAltText('XLR8 Performance Camp June')
          ).toBeInTheDocument();
        
        expect(
            screen.getByAltText('XLR8 Performance Camp October')
          ).toBeInTheDocument();
    })
})