package lt.code.academy.ttpapi.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lt.code.academy.ttpapi.security.data.Login;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final ObjectMapper mapper;


    public JwtAuthenticationFilter(AuthenticationManager authenticationManager){
        super(authenticationManager);
        mapper = new ObjectMapper();
    }
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
        try {
           Login login = mapper.readValue(request.getReader(), Login.class);
           Authentication authentication = new UsernamePasswordAuthenticationToken(login.username(), login.password());

           return getAuthenticationManager().authenticate(authentication);
        } catch (IOException e) {
            throw new BadCredentialsException("Bad username or password", e);
        }
    }
}
