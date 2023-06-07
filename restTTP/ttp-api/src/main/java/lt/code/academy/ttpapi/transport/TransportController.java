package lt.code.academy.ttpapi.transport;

import static lt.code.academy.ttpapi.Endpoint.*;

import lt.code.academy.ttpapi.transport.dto.Transport;
import lt.code.academy.ttpapi.transport.service.TransportService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createTransport(@RequestBody Transport transport){
        transportService.createTransport(transport);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(value = TRANSPORT, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateTransport(@RequestBody Transport transport, @PathVariable(transportId) UUID id){
        transport.setId(id);
        transportService.updateTransport(transport);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(TRANSPORT)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTransport(@PathVariable(transportId) UUID id){
        transportService.deleteTransport(id);
    }

    @GetMapping(value = SEARCH, produces = MediaType.APPLICATION_JSON_VALUE)
    List<Transport> search(@RequestParam String query){
        return transportService.search(query);
    }
}
