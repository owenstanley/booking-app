import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("BookingForm static text", () => {
  render(<BookingForm availableTimes={["12:00"]} />);
  const bannerElement = screen.getByText("Additional requests:");
  expect(bannerElement).toBeInTheDocument();
});

/*test("BookingForm submit", () => {
  const availableTimes = ["12:00", "12:15", "12:30"];
  const today = new Date();
  const dateReserved = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDay()
  );
  const timeReserved = "12:15";
  const numGuests = 2;
  const occasion = "None";
  const fullName = "Test Name";
  const email = "test.name@gmail.com";
  const phone = "01122 334556";
  const privacyPolicy = true;
  const handleSubmit = jest.fn();
  render(
    <BookingForm
      availableTimes={availableTimes}
      dateReserved={dateReserved}
      timeReserved={timeReserved}
      numGuests={numGuests}
      occasion={occasion}
      fullName={fullName}
      email={email}
      phone={phone}
      privacyPolicy={privacyPolicy}
      onSubmit={handleSubmit}
    />
  );

  const submitButton = screen.getByText("Reserve");
  fireEvent.click(submitButton);
  expect(handleSubmit).toHaveBeenCalledWith({
    dateReserved,
    timeReserved,
    privacyPolicy,
  });
});*/
