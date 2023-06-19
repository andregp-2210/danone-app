import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { toast } from "react-toastify";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

import TextField from "@mui/material/TextField";
import { MainContainer } from "./styles/daily-calories";

const initialValue = dayjs();

function SetHighlightedDays(
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const dayHasValue = highlightedDays[day.format("DDMMYYYY") as any];
  const isSelected = !props.outsideCurrentMonth && dayHasValue;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "✅" : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

const DailyCalories = () => {
  const [isLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [dayliCalory, setDayliCalory] = React.useState<String>("");
  const [dayliCalories, setDayliCalories] = React.useState({});
  const [selectedDay, setSelectedDay] = React.useState<{
    displayValue: string;
    value: string;
  }>({
    displayValue: initialValue.format("DD/MM/YYYY"),
    value: initialValue.format("DDMMYYYY"),
  });

  const handleOnDayChange = (newValue: dayjs.Dayjs | null) => {
    const formattedDay = newValue?.format("DDMMYYYY") || "";
    const dayValue = dayliCalories[formattedDay as keyof typeof dayliCalories];
    setSelectedDay({
      displayValue: newValue?.format("DD/MM/YYYY") || "",
      value: formattedDay,
    });
    if (dayValue) {
      setDayliCalory(dayValue);
    } else {
      setDayliCalory("");
    }
  };

  const handleChangeDayliCalory = ({
    target: { value },
  }: {
    target: { value: String };
  }) => {
    setDayliCalory(value);
  };

  const saveEntry = () => {
    if (isNaN(Number(dayliCalory))) {
      toast.error("El valor ingresado debe ser un número");
      return;
    }
    const _dayliCalories = {
      ...dayliCalories,
      [selectedDay.value]: dayliCalory,
    };
    setHighlightedDays(_dayliCalories as never);
    setDayliCalories(_dayliCalories);
  };

  const shouldDisableButton =
    Number(dayliCalory) <= 0 || Number(dayliCalory) > 100000;

  return (
    <MainContainer>
      <h3>Perfil de usuario</h3>
      <p>
        Bienvenid@! a continuación podrás registrar la cantidad de calorías que
        desees consumir por día:
        <br />
        <br />
        <span><strong>*Podrás registrar desde 1 caloría hasta 100.000 calorías por día</strong></span>
      </p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={initialValue}
          loading={isLoading}
          disablePast={true}
          onChange={handleOnDayChange}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{
            day: SetHighlightedDays,
          }}
          slotProps={{
            day: {
              highlightedDays,
            } as any,
          }}
        />
      </LocalizationProvider>
      <div className="info-container">
        <TextField
          className="search-input__input"
          label="Calorias diarias"
          variant="standard"
          placeholder="Ej. 1000"
          type="number"
          onChange={handleChangeDayliCalory}
          value={dayliCalory}
        />
        <button onClick={saveEntry} disabled={shouldDisableButton}>
          Guardar
        </button>
      </div>
    </MainContainer>
  );
};

export { DailyCalories };
