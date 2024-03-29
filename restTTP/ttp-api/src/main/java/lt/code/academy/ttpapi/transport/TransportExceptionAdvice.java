package lt.code.academy.ttpapi.transport;

import lt.code.academy.ttpapi.transport.exception.TransportNotExistRuntimeException;
import lt.code.academy.ttpapi.exception.data.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(basePackages = "lt.code.academy.ttpapi.transport")
public class TransportExceptionAdvice {
    @ExceptionHandler(TransportNotExistRuntimeException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ExceptionResponse handleTransportNotExistException(TransportNotExistRuntimeException ex){
        return new ExceptionResponse(String.format("Transport does not exist with this %s id", ex.getId()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ExceptionResponse handleException(Exception e) {
        return new ExceptionResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
