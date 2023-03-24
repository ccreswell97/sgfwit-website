import { Button, Typography } from "@mui/material";

export default function MenuButton({text, color}) {
    return (
      <Button color={color}>
        <Typography fontSize={24}>
            {text}
        </Typography>
      </Button>
    );
}