import { Box, Typography, Button } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import useStore from "../store/store";
import { useShallow } from "zustand/react/shallow";

function ScoreBoard() {
  const [winner, setWinner, setData, setNextIcon] = useStore(
    useShallow((s) => [s.winner, s.setWinner, s.setData, s.setNextIcon])
  );
  const restartGame = () => {
    setWinner(0);
    setData([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setNextIcon(1);
  };
  return (
    <div>
      <Box className="boxName">
        {winner === 0 && (
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
            Game
          </Typography>
        )}
        {winner === 1 && (
          <>
            <CircleOutlinedIcon sx={{ fontSize: "2.5rem", color: "#0F0" }} />{" "}
            <Typography variant="h4" sx={{ fontWeight: "700" }}>
              {" "}
              Won
            </Typography>
          </>
        )}
        {winner === 2 && (
          <>
            <CloseOutlinedIcon sx={{ fontSize: "2.5rem", color: "#F00" }} />
            <Typography variant="h4" sx={{ fontWeight: "700" }}>
              {" "}
              Won
            </Typography>
          </>
        )}
        {winner === 3 && (
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
            No Result
          </Typography>
        )}
      </Box>
      {winner === 0 ? (
        <Box className="boxName">
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
            In Progress...
          </Typography>
        </Box>
      ) : (
        <Box className="boxResult" onClick={() => restartGame()}>
          <Button variant="contained" startIcon={<RefreshIcon />}>
            Re-start
          </Button>
        </Box>
      )}
    </div>
  );
}

export default ScoreBoard;
