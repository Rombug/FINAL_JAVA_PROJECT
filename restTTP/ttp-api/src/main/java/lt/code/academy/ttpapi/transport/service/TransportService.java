package lt.code.academy.ttpapi.transport.service;

import lt.code.academy.ttpapi.transport.dto.Transport;
import lt.code.academy.ttpapi.transport.entity.TransportEntity;
import lt.code.academy.ttpapi.transport.exception.TransportNotExistRuntimeException;
import lt.code.academy.ttpapi.transport.repository.TransportRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TransportService {
    private final TransportRepository transportRepository;

    public TransportService(TransportRepository transportRepository) {
        this.transportRepository = transportRepository;
    }

    public void createTransport(Transport transport){
        transportRepository.save(TransportEntity.convert(transport));
    }

    public List<Transport> getTransports(){
        return transportRepository.findAll()
                .stream()
                .map(Transport::convert)
                .toList();
    }

    public Transport getTransport(UUID id){
        return transportRepository.findById(id)
                .map(Transport::convert)
                .orElseThrow(() -> new TransportNotExistRuntimeException(id));
    }

    public void updateTransport(Transport transport){
        getTransport(transport.getId());
        transportRepository.save(TransportEntity.convert(transport));
    }
    public void deleteTransport(UUID id){
        transportRepository.deleteById(id);
    }

    public List<Transport> search(String text) {
        return transportRepository.findAllByOwnerOrRegistrationCountry(text, text)
                .stream()
                .map(Transport::convert)
                .toList();
    }

}
