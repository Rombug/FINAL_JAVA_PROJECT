package lt.code.academy.ttpapi.user;

import lt.code.academy.ttpapi.exception.data.ExceptionResponse;
import lt.code.academy.ttpapi.user.exception.InvalidUserNameException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(basePackages = "lt.code.academy.ttpapi.user")
public class UserExceptionAdvice {
    @ExceptionHandler(InvalidUserNameException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionResponse handleInvalidUserNameException(InvalidUserNameException ex){
        return new ExceptionResponse("Invalid username", HttpStatus.BAD_REQUEST, ex.getReason());
    }
}
