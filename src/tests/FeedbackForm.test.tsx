import { render, fireEvent } from '@testing-library/react';
import FeedbackForm from "../FeedbackForm";

test('form submits with correct data', async () => {
    const { getByPlaceholderText, getByText } = render(<FeedbackForm />);
  
    const name = getByPlaceholderText('Name') as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'Taulant Isaku' } });
    expect(name.value).toBe('Taulant Isaku');
  
    const email = getByPlaceholderText('Email') as HTMLInputElement;
    fireEvent.change(email, { target: { value: 'taulant.isaku1@gmail.com' } });
    expect(email.value).toBe('taulant.isaku1@gmail.com');
  
    const rating = getByPlaceholderText('Rating') as HTMLInputElement;
    fireEvent.change(rating, { target: { value: 3 } });
    expect(rating.value).toBe('3');
  
    const comments = getByPlaceholderText('Comments') as HTMLInputElement;
    fireEvent.change(comments, { target: { value: 'Unit testing with Jest' } });
    expect(comments.value).toBe('Unit testing with Jest');
  
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
  });
  