import AdminSidebar from "@/components/AdminSidebar";
import { useAuth } from "@/modules/admin";
import { Box, CircularProgress, Container, Grid } from "@mui/material";

const AdminLayout = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Container maxWidth={isAuthenticated ? "md" : "sm"}>
      {!!isAuthenticated ? (
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <AdminSidebar />
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      ) : (
        <Box>{children}</Box>
      )}
    </Container>
  );
};

export default AdminLayout;
