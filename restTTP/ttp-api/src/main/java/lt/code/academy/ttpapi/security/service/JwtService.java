package lt.code.academy.ttpapi.security.service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lt.code.academy.ttpapi.security.exception.InvalidTokenException;
import lt.code.academy.ttpapi.user.dto.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

@Service
public class JwtService {

    private final byte[] secretKey;
    private final long tokenExpireInMs;

    public JwtService(@Value("${security.jwt.secret.key}") byte[] secretKey,
                      @Value("#{${security.jwt.token.valid.min} * 60000}") long tokenExpireInMs){
        this.secretKey = secretKey;
        this.tokenExpireInMs = tokenExpireInMs;
    }

    public String generateToken(User user){
        Date date = new Date();
        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setAudience("ttp-ui")
                .setIssuer("ttp-api")
                .setIssuedAt(date)
                .setExpiration(new Date(date.getTime() + tokenExpireInMs))
                .setSubject(user.getUsername())
                .claim("roles", user.getRoles())
                .signWith(Keys.hmacShaKeyFor(secretKey), SignatureAlgorithm.HS512)
                .compact();
    }

    public Authentication parseToken(String token){
        try {

        JwtParser jwtParser = Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build();

        Jwt<Header, Claims> headerClaimsJwt = jwtParser.parseClaimsJwt(token);
        Claims body = headerClaimsJwt.getBody();

        String userName = body.getSubject();
        List<SimpleGrantedAuthority> roles = ((List<String>)body.get("roles"))
                .stream()
                .map(SimpleGrantedAuthority::new)
                .toList();

        return new UsernamePasswordAuthenticationToken(userName, null, roles);

        }catch (Exception e){
            throw new InvalidTokenException();
        }

    }

    private String generateSecretKey(){
        SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);
        return Encoders.BASE64.encode(secretKey.getEncoded());
    }
}
