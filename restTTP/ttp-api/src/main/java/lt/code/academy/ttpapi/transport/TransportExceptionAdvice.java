package lt.code.academy.ttpapi.transport;

import lt.code.academy.ttpapi.transport.exception.TransportNotExistRuntimeException;
import lt.code.academy.ttpapi.transport.exception.data.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TransportExceptionAdvice {
    @ExceptionHandler(TransportNotExistRuntimeException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ExceptionResponse handleTransportNotExistException(TransportNotExistRuntimeException ex){
        return new ExceptionResponse(String.format("Transport does not exist with this %s id", ex.getId()), HttpStatus.NOT_FOUND);
    }
}
