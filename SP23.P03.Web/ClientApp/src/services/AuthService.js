
const getCurrentUser = () => {
    // @ts-ignore
    return JSON.parse(sessionStorage.getItem("user"));
};

const AuthService = {
    getCurrentUser
}
export default AuthService;