// components/SignInButton.js
import { Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  return session ? (
    <Button colorScheme="teal" onClick={() => signOut()}>
      Sign Out
    </Button>
  ) : (
    <Button colorScheme="teal" onClick={() => signIn("google")}>
      Sign in with Google
    </Button>
  );
};

export default SignInButton;
