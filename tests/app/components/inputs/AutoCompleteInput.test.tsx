import React from 'react'; 
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AutoCompleteInput from '@/app/components/inputs/AutoCompleteInput';

describe('AutoCompleteInput', () => {
  it('calls onPlaceSelected with correct parameters when place is selected', async () => {
    const onPlaceSelected = jest.fn();
  
    render(
      <AutoCompleteInput
        placeholder="Enter a location"
        onPlaceSelected={onPlaceSelected}
      />
    );
  
    // typing into the input
    const input = screen.getByPlaceholderText('Enter a location');
    fireEvent.change(input, { target: { value: 'New York' } });
  
    // search button
    const searchButton = screen.getByTestId('searchbox-button');
    fireEvent.click(searchButton);
  
    await waitFor(() => {
      expect(onPlaceSelected).toHaveBeenCalledWith({
        address: [{ long_name: '123 Main St' }],
        lat: 40.7128,
        lng: -74.0060,
      });
    });
  });
});