"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useDataQuery } from "@/utils/queries";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

export default function RateConversionCard() {
  const { data, isLoading, isSuccess } = useDataQuery();
  const [amount, setAmount] = React.useState("");
  const [currencyFrom, setCurrencyFrom] = React.useState("GHS");
  const [currencyTo, setCurrencyTo] = React.useState("LKR");
  const [conversionResult, setConversionResult] = React.useState("");

  const handleCurrencyChangeFrom = (
    event: React.ChangeEvent<string>,
    child: React.ReactNode
  ) => {
    setCurrencyFrom(event.target.value);
    // Perform conversion if needed
  };

  const handleCurrencyChangeTo = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrencyTo(event.target.value);
    // Perform conversion if needed
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
    // Perform conversion if needed
  };

  const performConversion = () => {
    // Logic to perform conversion
  };

  React.useEffect(() => {
    performConversion();
  }, [amount, currencyFrom, currencyTo]);

  return (
    <Card sx={{ minWidth: 275, maxWidth: 500, m: 2 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 25, textAlign: "center" }}
          color="black"
          gutterBottom
        >
          Rate Conversion
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Select
            value={currencyFrom}
            onChange={handleCurrencyChangeFrom}
            sx={{ width: "auto", flexGrow: 1 }}
            IconComponent={ArrowDropDownIcon}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyExchangeIcon /> {/* Replace with your actual icon */}
                </InputAdornment>
              ),
            }}
          >
            {data?.map((item) => (
              <MenuItem value="GHS" key={item.id}>
                {item.currency}
              </MenuItem>
            ))}
          </Select>
          <TextField
            value={amount}
            onChange={handleAmountChange}
            sx={{
              flexGrow: 2,
              ".MuiInputBase-input": {
                textAlign: "right",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <ArrowDropDownIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            margin="normal"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "spaceEvenly",
          }}
        >
          <IconButton>
            <ExpandCircleDownIcon  sx={{ width: 60, height: 60 }}/>
          </IconButton>
          <Typography>{currencyFrom}</Typography>
          <Typography>≈</Typography>
          <Typography>{currencyTo}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Select
            value={currencyFrom}
            onChange={handleCurrencyChangeFrom}
            sx={{ width: "auto", flexGrow: 1 }}
            IconComponent={ArrowDropDownIcon}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyExchangeIcon /> {/* Replace with your actual icon */}
                </InputAdornment>
              ),
            }}
          >
            {data?.map((item) => (
              <MenuItem value="GHS" key={item.id}>
                {item.currency}
              </MenuItem>
            ))}
          </Select>
          <TextField
            value={amount}
            onChange={handleAmountChange}
            sx={{
              flexGrow: 2,
              ".MuiInputBase-input": {
                textAlign: "right",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <ArrowDropDownIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            margin="normal"
          />
        </Box>
        {/* Add additional elements such as conversion result display here */}
      </CardContent>
    </Card>
  );
}
