import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  textOnPrimaryColor,
  textOnSecondaryColor,
} from "styles/colors";

export const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  padding-left: 25px;
  display: flex;
  gap: 20px;
`;

export const CalendarBlock = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40%;
`;

export const DeliveryDateBlock = styled.div`
  margin-left: 20px;
`;

export const DateSection = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

interface DateIconProps {
  $primary?: true;
}

export const DateIcon = styled.div<DateIconProps>`
  font-size: 16px;
  width: 16px;
  line-height: 16px;
  text-align: center;
  padding: 8px;
  border-radius: 50%;
  color: ${({ $primary }) =>
    $primary ? textOnPrimaryColor : textOnSecondaryColor};
  background: ${({ $primary }) => ($primary ? primaryColor : secondaryColor)};
`;

export const DateTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
`;

export const CalendarStyleOverrides = styled.div`
  & .react-calendar {
    border: none;
    width: 250px;
  }

  & .react-calendar__tile--active {
    background: ${primaryColor} !important;
    color: white !important;
    border-radius: 50%;
  }

  & .react-calendar__tile:disabled {
    background-color: transparent;
    opacity: 0.4;
  }

  & .react-calendar__tile--now,
  & .react-calendar__tile--now:hover {
    background: #eeeeee;
    color: #929292;
    border-radius: 50%;
  }

  & .react-calendar__month-view__days__day--weekend {
    color: #494949;
  }

  & abbr[title] {
    text-decoration: unset !important;
  }

  & .react-calendar__month-view__weekdays {
    text-transform: unset !important;
  }

  & .react-calendar__navigation__next2-button,
  & .react-calendar__navigation__prev2-button {
    display: none;
  }

  &
    .react-calendar__navigation__prev-button
    + .react-calendar__navigation__label {
    pointer-events: none;
  }

  & .react-calendar__tile:enabled:hover,
  & .react-calendar__tile:enabled:focus {
    border-radius: 50%;
  }

  & .react-calendar__navigation button:enabled:hover,
  & .react-calendar__navigation button:enabled:focus {
    border-radius: 50%;
  }

  & .react-calendar__navigation button[disabled] {
    background-color: transparent !important;
    border-radius: 50%;
  }
`;
