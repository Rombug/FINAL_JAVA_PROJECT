package lt.code.academy.ttpapi.user.exception;

public class InvalidUserNameException extends RuntimeException {

    private static final String REASON = "username.exist";
    public String getReason() {
        return REASON;
    }
}
