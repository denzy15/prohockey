import { SERVER_URL } from "@/shared/constants";
import { Box, Chip, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";

const ParameterSelect = ({ param, handleSelect, activeValue }) => {
  
  const hasPhoto = !!param.values[0].photo;

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="body2" sx={{ mb: 1 }}>
        {param.name}: {activeValue.value}
      </Typography>

      <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {hasPhoto
          ? param.values.map((parVal, i) => (
              <Box
                key={i}
                onClick={() => handleSelect(param._id, parVal)}
                sx={{
                  cursor: "pointer",
                  borderStyle:
                    activeValue._id === parVal._id ? "solid" : "dashed",
                  borderColor:
                    activeValue._id === parVal._id ? "black" : "primary.main",
                  borderWidth: activeValue._id === parVal._id ? 3 : 1,
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Tooltip title={parVal.value}>
                  <img
                    style={{ maxWidth: "60px" }}
                    src={`${SERVER_URL}/${parVal.photo}`}
                  />
                </Tooltip>
              </Box>
            ))
          : param.values.map((parVal, i) => (
              <Chip
                variant={activeValue._id === parVal._id ? "outlined" : "filled"}
                key={i}
                onClick={() => handleSelect(param._id, parVal)}
                label={parVal.value}
                sx={{
                  bgcolor: "primary.light",
                  color: "background.default",
                  borderRadius: 3,
                  borderColor: "primary.main",
                  fontWeight: 500,
                  fontSize: 15,
                }}
              />
            ))}
      </Stack>
    </Box>
  );
};

export default ParameterSelect;
