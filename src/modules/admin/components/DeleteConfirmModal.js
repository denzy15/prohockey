import { Box, Button, Popover, Stack, Typography } from "@mui/material";
import React from "react";

const DeleteConfirmModal = ({ handleDelete, handleClose, anchorEl }) => {
  return (
    <Popover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box sx={{ p: 2, maxWidth: 400 }}>
        <Typography>Вы уверены? Это действия безвозвратно</Typography>
        <Stack direction={"row"} spacing={1} sx={{ mt: 1 }}>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={handleDelete}
          >
            Удалить
          </Button>
          <Button variant="outlined" size="small" onClick={handleClose}>
            Отмена
          </Button>
        </Stack>
      </Box>
    </Popover>
  );
};

export default DeleteConfirmModal;
