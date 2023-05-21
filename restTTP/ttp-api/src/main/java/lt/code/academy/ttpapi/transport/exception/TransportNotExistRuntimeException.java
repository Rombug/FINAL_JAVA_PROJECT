package lt.code.academy.ttpapi.transport.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.UUID;
@Getter
@RequiredArgsConstructor
public class TransportNotExistRuntimeException extends RuntimeException{
    private final UUID id;
}
