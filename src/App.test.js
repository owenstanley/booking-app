import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

const availableTimes = ["17:00", "17:15", "17:30"];
const today = new Date();
const fullName = "Test Name";
const email = "test.name@gmail.com";
const privacyPolicy = true;
const handleSubmit = jest.fn();

test("BookingForm static text", async () => {
  handleSubmit.mockImplementation((e) => {
    e.preventDefault();
  });

  render(<BookingForm availableTimes={availableTimes} />);
  const bannerElement = screen.getByText("Additional requests:");
  expect(bannerElement).toBeInTheDocument();
});

test("BookingForm submit", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      fullName={fullName}
      email={email}
      privacyPolicy={privacyPolicy}
      onSubmit={handleSubmit}
    />
  );

  const submitButton = screen.getByRole("button", {
    name: /Reserve/i,
  });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({
        elements: expect.objectContaining({
          timeReserved: expect.objectContaining({ value: availableTimes[0] }),
          fullName: expect.objectContaining({ value: fullName }),
          email: expect.objectContaining({ value: email }),
        }),
      }),
    })
  );
});
