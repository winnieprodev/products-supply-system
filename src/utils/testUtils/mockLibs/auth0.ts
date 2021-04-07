import { User } from "models";

const user: User = {
  name: "John",
  sirname: "Doe",
  email: "johndoe@me.com",
  picture: "test.jpg",
  email_verified: true,
  authToken: "mocked-auth-token",
  sub: "google-oauth2|12345678901234",
};

jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    isAuthenticated: true,
    user,
    logout: jest.fn(),
    getAccessTokenSilently: jest.fn(),
    loginWithRedirect: jest.fn(),
    loginWithPopup: jest.fn(),
  }),
}));
