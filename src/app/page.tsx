"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
import { Typography } from "@mui/material";
import { useDataQuery } from "@/utils/queries";
import { formatNumberToThousands } from "@/utils/formater";
import Link from "next/link";

export default function Home() {
  const { data, isLoading, isSuccess } = useDataQuery();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  React.useEffect(() => {
    isLoading
      ? console.log("How about adding a pagination, UI designer?")
      : null;
  });
  return (
    <main>
      <Box
        sx={{
          maxWidth: 500,
          borderStyle: "solid",
          borderColor: "black",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            overflowX: "auto",
            width: " -webkit-fill-available",
            borderBottom: 1,
            padding: 3,
          }}
        >
          <h1> Rate Table (TWD)</h1>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <Typography>Currency</Typography>
            <Typography>Price</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            overflowX: "auto",
            padding: 3,
            borderBottom: 1,
            width: " -webkit-fill-available",
          }}
        >
          {isLoading && (
            <Box sx={{ textAlign: "center", fontSize: "40" }}> Loading... </Box>
          )}
          {isSuccess && (
            <Box aria-label="Currency Exchange Rate table">
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Box
                    key={row.id}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      mt: 1,
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Image
                        src={row.currency_icon}
                        alt="currency-icon"
                        width={50}
                        height={50}
                      />
                      <Typography>{row.currency}</Typography>
                    </Box>
                    <Box>
                      <Typography>
                        {formatNumberToThousands(row.twd_price)}
                      </Typography>
                    </Box>
                  </Box>
                ))}
            </Box>
          )}
        </Box>
        <TablePagination
          component="div"
          count={data?.length ?? 0}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10, 15, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 3,
              margin: 5,
              width: 300,
              borderColor: "black",
              color: "black",
              padding: 3,
            }}
          >
            <Link
              href="/CurrencyConversion"
              style={{
                color: "black",
                fontSize: "x-large",
                textDecoration: "none",
              }}
            >
              Rate Conversion
            </Link>
          </Button>
        </div>
      </Box>
    </main>
  );
}
