const useAuth = () => {
    const isLoggedin = localStorage.getItem("isLoggedin");
    const userData = localStorage.getItem("user");
    return (
        isLoggedin, userData
    )
}
export default useAuth