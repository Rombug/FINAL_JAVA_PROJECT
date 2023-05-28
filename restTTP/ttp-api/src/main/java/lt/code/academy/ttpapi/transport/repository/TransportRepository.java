package lt.code.academy.ttpapi.transport.repository;

import lt.code.academy.ttpapi.transport.entity.TransportEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;


public interface TransportRepository extends JpaRepository<TransportEntity, UUID> {
    List<TransportEntity> findAllByOwnerOrRegistrationCountry(String owner, String registrationCountry);

//    @Query("SELECT p FROM TransportEntity p WHERE p.registrationCountry = :registrationCountry AND p.owner > :owner")
//    List<TransportEntity> getTransportByCountryAndOwner(@Param("registrationCountry") String registrationCountry, @Param("owner") String owner);

    @Query("SELECT p FROM TransportEntity p WHERE LOWER(p.registrationCountry) = LOWER(:registrationCountry) AND LOWER(p.owner) > LOWER(:owner)")
    List<TransportEntity> getTransportByCountryAndOwner(@Param("registrationCountry") String registrationCountry, @Param("owner") String owner);


}
