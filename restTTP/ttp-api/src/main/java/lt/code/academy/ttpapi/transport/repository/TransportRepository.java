package lt.code.academy.ttpapi.transport.repository;

import lt.code.academy.ttpapi.transport.entity.TransportEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;


public interface TransportRepository extends JpaRepository<TransportEntity, UUID> {
}
