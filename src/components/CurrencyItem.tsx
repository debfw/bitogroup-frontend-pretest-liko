import { CurrencyItemProps, NullableDataType } from "@/types/types";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Image from "next/image";

export function CurrencyItem(props: CurrencyItemProps) {
  const handleOnValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (props.onValueChange) props.onValueChange(parseInt(e.target.value));
  };

  const handleOnCurrencyChange = (e: SelectChangeEvent<string | null>) => {
    const newCurrency = props.currencies?.find((c) => c.id === e.target.value);
    props.onCurrencyChange(newCurrency || null);
  };
  return (
    <FormControl
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        borderBottom: 1,
        padding: "50px 20px",
        flexDirection: "row",
      }}
    >

      <InputLabel sx={{position:'absolute' , top:48, left:15}}>Currency</InputLabel>

      <Select
        value={props.currentCurrency?.id}
        onChange={handleOnCurrencyChange}
        sx={{
          ".MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          },
          width: 200,
          flexGrow: 1,
          borderRadius: 4,
          height: 50,
        }}
        IconComponent={ArrowDropDownIcon}
        inputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CurrencyExchangeIcon />
            </InputAdornment>
          ),
        }}
      >
        {props.currencies?.map((item) => (
          <MenuItem
            key={item.id}
            value={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Image
              src={`${item.currency_icon}`}
              alt="avatar"
              width="30"
              height="30"
            ></Image>
            {item.currency}
          </MenuItem>
        ))}
      </Select>

      <TextField
        value={props.value}
        onChange={handleOnValueChange}
        inputProps={{ sx: { textAlign: "right", height: 15 } }}
        sx={{
          flexGrow: 2,
          m: 0,
        }}
        margin="normal"
      />
    </FormControl>
  );
}
