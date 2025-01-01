import { Box, Stack, Paper } from "@mui/material";

export default function BoardGame() {
  return (
    <div style={{ marginTop: 40 }}>
        
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={5}></Paper>
          <Paper elevation={5}></Paper>
          <Paper elevation={5}></Paper>
        </Box>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={5}></Paper>
          <Paper elevation={5}></Paper>
          <Paper elevation={5}></Paper>
        </Box>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper elevation={5}></Paper>
          <Paper elevation={5}></Paper>
          <Paper elevation={5}></Paper>
        </Box>
      </Stack>
    </div>
  );
}
