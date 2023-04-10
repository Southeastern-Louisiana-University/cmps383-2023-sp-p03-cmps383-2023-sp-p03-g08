
const getCurrentUser = () => {
    // @ts-ignore
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    getCurrentUser
}
export default AuthService;