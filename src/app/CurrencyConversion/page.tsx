"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useDataQuery } from "@/utils/queries";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { DataType } from "@/types/types";
import { CurrencyItem } from "@/components/CurrencyItem";
import { useRouter } from "next/navigation";

export default function RateConversionCard() {
  const { data, isSuccess } = useDataQuery();
  const [fromValue, setFromValue] = React.useState(0);
  const [fromCurrency, setFromCurrency] = React.useState<DataType | null>(null);
  const [toValue, setToValue] = React.useState(0);
  const [toCurrency, setToCurrency] = React.useState<DataType | null>(null);
  const router = useRouter();

  const handleIconClick = () => {
    router.push('/CurrencySelection'); 
  };
  const MaxDecimal =
    fromCurrency && toCurrency
      ? Math.max(
          parseInt(fromCurrency.amount_decimal),
          parseInt(toCurrency.amount_decimal)
        )
      : 0;
  const currencyRatio =
    fromCurrency && toCurrency
      ? parseFloat(
          (fromCurrency.twd_price / toCurrency.twd_price).toFixed(MaxDecimal)
        )
      : 0;

  const handleChangeValue = (newFromValue: number) => {
    if (!currencyRatio) return;
    if (newFromValue !== fromValue) {
      setFromValue(newFromValue);
      setToValue(newFromValue * currencyRatio);
    }
  };

  return (
    <Box
      sx={{
        width: 400,
        height: 800,
        borderStyle: "solid",
        borderColor: "black",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          overflowX: "auto",
          width: " -webkit-fill-available",
          borderBottom: 1,
          padding: 2,
        }}
      >
        <h1> Rate Conversion </h1>
      </Box>

      <Box
        sx={{
          border: 1,
          margin: 3,
          borderRadius: 3,
          width: 350,
          position: "relative",
        }}
      >
        <CurrencyItem
          currencies={data}
          currentCurrency={fromCurrency}
          onCurrencyChange={(currency) => {
            setFromCurrency(currency);
          }}
          value={fromValue}
          onValueChange={(value) => handleChangeValue(value)}
        />

        <IconButton
          sx={{
            position: "absolute",
            top: "37%",
            display: "flex",
            left: "15%",
            background: "white",
            color: "black",
            padding: 0,
          }}
          onClick={handleIconClick}
        >
          <ExpandCircleDownIcon sx={{ width: 70, height: 70 }} />
        </IconButton>

        {fromCurrency && toCurrency && (
          <Box
            sx={{
              position: "absolute",
              right: -10,
              top: "40%",
              pr: 4,
              pb: 0.5,
            }}
          >
            <Typography>{`1 ${fromCurrency.currency} ≈ ${currencyRatio} ${toCurrency.currency}`}</Typography>
          </Box>
        )}
        <CurrencyItem
          currencies={data}
          currentCurrency={toCurrency}
          onCurrencyChange={(currency) => {
            setToCurrency(currency);
          }}
          value={toValue}
        />
      </Box>
    </Box>
  );
}
