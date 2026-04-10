class AuthService {
    constructor() {
        // Hardcoded user (replace later with database)
        this.validUser = new User("admin", "1234");
    }

    login(user) {
        return (
            user.getUsername() === this.validUser.getUsername() &&
            user.getPassword() === this.validUser.getPassword()
        );
    }
}