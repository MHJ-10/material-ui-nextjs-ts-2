import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { fetchUsers } from "../data";

const UserCards = async () => {
  const users = await fetchUsers();

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gap={2}
      padding={2}
    >
      {users.map((user) => (
        <Card
          key={user.id}
          variant="outlined"
          sx={{ maxWidth: 345, boxShadow: 3 }}
        >
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
            <Box marginTop={2}>
              <Link href={`/users/${user.id}`} passHref>
                <Button variant="contained" color="primary">
                  View Profile
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default UserCards;
