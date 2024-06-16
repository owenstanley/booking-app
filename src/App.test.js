import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

const availableTimes = ["17:00", "17:15", "17:30"];
const fullName = "Test Name";
const email = "test.name@gmail.com";
const phoneNumber = "07920269507";
const defaultCountry = "GB";
const privacyPolicy = true;
const handleSubmit = jest.fn();

test("BookingForm static text", async () => {
  render(<BookingForm availableTimes={availableTimes} />);
  const bannerElement = screen.getByText("Additional requests:");
  expect(bannerElement).toBeInTheDocument();
});

test("Testing if the BookingForm will submit with valid data", async () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      fullName={fullName}
      email={email}
      phoneNumber={phoneNumber}
      defaultCountry={defaultCountry}
      privacyPolicy={privacyPolicy}
      onSubmit={handleSubmit}
    />
  );

  handleSubmit.mockImplementation((e) => {
    e.preventDefault();
  });

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

test("Making sure the BookingForm can't submit with invalid data", async () => {
  render(<BookingForm availableTimes={availableTimes} />);
  const submitButton = screen.getByRole("button", {
    name: /Reserve/i,
  });
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
});
