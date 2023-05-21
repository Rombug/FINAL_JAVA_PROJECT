package lt.code.academy.ttpapi.transport;

import static lt.code.academy.ttpapi.Endpoint.*;

import lt.code.academy.ttpapi.transport.dto.Transport;
import lt.code.academy.ttpapi.transport.service.TransportService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(TRANSPORTS)
public class TransportController {
    private final TransportService transportService;

    public TransportController(TransportService transportService) {
        this.transportService = transportService;
    }

    @GetMapping(value = TRANSPORT, produces = MediaType.APPLICATION_JSON_VALUE)
    public Transport getTransport(@PathVariable(transportId)UUID id){
        return transportService.getTransport(id);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Transport> getTransports(){
        return transportService.getTransports();
    }
}
