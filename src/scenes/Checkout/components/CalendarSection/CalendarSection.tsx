import { useCallback, useEffect, useMemo } from "react";
import { Set } from "immutable";
import Calendar, { CalendarTileProperties } from "react-calendar";

import * as Styled from "./calendarSection.styled";

import "react-calendar/dist/Calendar.css";

interface OwnProps {
  value: Date;
  onChange: (newVal: Date) => void;
  availableDates: string[];
}

const CalendarSection: React.FC<OwnProps> = ({
  value,
  onChange,
  availableDates,
}) => {
  const today = useMemo(() => new Date(), []);

  useEffect(() => {
    onChange(new Date(availableDates[0]));
  }, [availableDates]);

  const availableSet = useMemo(
    () => Set(availableDates.map((date) => new Date(date).toDateString())),
    [availableDates],
  );

  const isTileDisabled = useCallback(
    ({ date }: CalendarTileProperties) =>
      availableSet.has(date.toDateString()) === false,
    [],
  );

  return (
    <Styled.Wrapper>
      <Styled.CalendarBlock>
        <Styled.CalendarStyleOverrides>
          <Calendar
            minDate={today}
            defaultActiveStartDate={today}
            value={value}
            onClickDay={onChange}
            tileDisabled={isTileDisabled}
          />
        </Styled.CalendarStyleOverrides>
      </Styled.CalendarBlock>
      <Styled.DeliveryDateBlock>
        <Styled.DateSection>
          <Styled.DateIcon>{today.getDate()}</Styled.DateIcon>
          <Styled.DateTitle>- Today</Styled.DateTitle>
        </Styled.DateSection>
        <Styled.DateSection>
          <Styled.DateIcon $primary>{value.getDate()}</Styled.DateIcon>
          <Styled.DateTitle>- Selected date</Styled.DateTitle>
        </Styled.DateSection>
      </Styled.DeliveryDateBlock>
    </Styled.Wrapper>
  );
};

export default CalendarSection;
