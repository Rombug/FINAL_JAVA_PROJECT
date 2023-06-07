package lt.code.academy.ttpapi.security.service;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;

@Service
public class JwtService {

    private final byte[] secretKey;
    private final long tokenExpireInMs;

    public JwtService(@Value("${security.jwt.secret.key}") byte[] secretKey,
                      @Value("#{${security.jwt.token.valid.min} * 60000}") long tokenExpireInMs){
        this.secretKey = secretKey;
        this.tokenExpireInMs = tokenExpireInMs;

    }


    private String generateSecretKey(){
        SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);
        return Encoders.BASE64.encode(secretKey.getEncoded());
    }

}
