import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import useStore from "../store/store";
import { useShallow } from "zustand/react/shallow";
import ScoreBoard from "./ScoreBoard";

function SquareBoard() {
  const [data, setData, nextIcon, setNextIcon, winner, setWinner] = useStore(
    useShallow((s) => [
      s.data,
      s.setData,
      s.nextIcon,
      s.setNextIcon,
      s.winner,
      s.setWinner,
    ])
  );

  const handleTick = (tick) => {
    if (data[tick] !== 0) return 0;
    if (winner !== 0) return 0;
    const updatedData = [...data];
    updatedData[tick] = nextIcon;
    setNextIcon(nextIcon === 1 ? 2 : 1);
    setData(updatedData);
  };

  React.useEffect(() => {
    checkWin();
  }, [data]);

  const declareWin = (win) => {
    setWinner(win);
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== 0)
      declareWin(data[0]);
    else if (data[3] === data[4] && data[4] === data[5] && data[5] !== 0)
      declareWin(data[3]);
    else if (data[6] === data[7] && data[7] === data[8] && data[8] !== 0)
      declareWin(data[8]);
    else if (data[0] === data[3] && data[3] === data[6] && data[6] !== 0)
      declareWin(data[0]);
    else if (data[1] === data[4] && data[4] === data[7] && data[7] !== 0)
      declareWin(data[1]);
    else if (data[2] === data[5] && data[5] === data[8] && data[8] !== 0)
      declareWin(data[2]);
    else if (data[0] === data[4] && data[4] === data[8] && data[8] !== 0)
      declareWin(data[0]);
    else if (data[2] === data[4] && data[4] === data[6] && data[6] !== 0)
      declareWin(data[2]);
    else if (
      data[0] !== 0 &&
      data[1] !== 0 &&
      data[2] !== 0 &&
      data[3] !== 0 &&
      data[4] !== 0 &&
      data[5] !== 0 &&
      data[5] !== 0 &&
      data[6] !== 0 &&
      data[7] !== 0 &&
      data[8] !== 0
    )
      declareWin(3);
  };

  const getIcon = (tick) => {
    if (tick === 1) {
      return <CircleOutlinedIcon sx={{ fontSize: "4rem", color: "inherit" }} />;
    } else if (tick === 2)
      return <CloseOutlinedIcon sx={{ fontSize: "4rem", color: "#F00" }} />;
  };

  const restartGame = () => {
    setWinner(0);
    setData([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setNextIcon(1);
  };
  return (
    <div className="squareboard">
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
          <Paper
            className="boxplacement"
            elevation={5}
            onClick={() => handleTick(0)}
          >
            {getIcon(data[0])}
          </Paper>
          <Paper
            className="boxplacement"
            elevation={5}
            onClick={() => handleTick(1)}
          >
            {getIcon(data[1])}
          </Paper>
          <Paper
            className="boxplacement"
            elevation={5}
            onClick={() => handleTick(2)}
          >
            {getIcon(data[2])}
          </Paper>
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
          <Paper
            className="boxplacement"
            elevation={5}
            onClick={() => handleTick(3)}
          >
            {getIcon(data[3])}
          </Paper>
          <Paper
            className="boxplacement"
            elevation={5}
            onClick={() => handleTick(4)}
          >
            {getIcon(data[4])}
          </Paper>
          <Paper
            className="boxplacement"
            elevation={5}
            onClick={() => handleTick(5)}
          >
            {getIcon(data[5])}
          </Paper>
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
          <Paper
            className="boxplacement"
            elevation={5}
            onClick={() => handleTick(6)}
          >
            {getIcon(data[6])}
          </Paper>
          <Paper
            className="boxplacement"
            elevation={5}
            onClick={() => handleTick(7)}
          >
            {getIcon(data[7])}
          </Paper>
          <Paper
            className="boxplacement"
            elevation={5}
            onClick={() => handleTick(8)}
          >
            {getIcon(data[8])}
          </Paper>
        </Box>
      </Stack>
      <ScoreBoard />
    </div>
  );
}

export default SquareBoard;
