import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=21c0af513d68417c87e40b72871c8ff9&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Button href={AUTH_URL}>Login with Spotify</Button>
    </Container>
  );
};

export default Login;
