import { render, fireEvent,waitFor } from '@testing-library/react';
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
  
  test("form displays validation error message when input is invalid", async () => {
    const { getByPlaceholderText, getByText } = render(<FeedbackForm />);
  
    const name = getByPlaceholderText('Name') as HTMLInputElement;
    fireEvent.change(name, { target: { value: '' } });
    expect(name.value).toBe('');
  
    const email = getByPlaceholderText('Email') as HTMLInputElement;
    fireEvent.change(email, { target: { value: 'invalidEmail' } });
    expect(email.value).toBe('invalidEmail');
  
    const rating = getByPlaceholderText('Rating') as HTMLInputElement;
    fireEvent.change(rating, { target: { value: 0 } });
    expect(rating.value).toBe('0');
  
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
  
    const nameError = await waitFor(() => getByText("name must be at least 2 characters"));
    expect(nameError).toBeInTheDocument();
  
    const emailError = await waitFor(() => getByText("email must be a valid email"));
    expect(emailError).toBeInTheDocument();
  
    const ratingError = await waitFor(() => getByText("rating must be less than or equal to 5"));
    expect(ratingError).toBeInTheDocument();
  });

  