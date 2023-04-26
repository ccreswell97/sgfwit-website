import { Button, Typography } from "@mui/material";

export default function MenuButton({text, color}) {
    return (
      <Button color={color}>
        <Typography fontSize={'2rem'} fontWeight={200}>
            {text}
        </Typography>
      </Button>
    );
}