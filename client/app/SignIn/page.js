// pages/index.js
import { Box, Heading } from "@chakra-ui/react";
import SignInButton from "../components/SignInButton";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Box textAlign="center" mt="20">
      <Heading mb="8">Welcome to My App</Heading>
      <SignInButton />
      {session && (
        <Box mt="4">
          <p>Signed in as {session.user.email}</p>
        </Box>
      )}
    </Box>
  );
}
