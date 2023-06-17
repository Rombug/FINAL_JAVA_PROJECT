package lt.code.academy.ttpapi;

public interface Endpoint {
    //variable
    String transportId = "transportId";

    //path
    String TRANSPORTS = "/transport";
    String TRANSPORT = "/{"+ transportId +"}";
    String SEARCH = "/search";
    String LOGIN = "/login";
    String USERS = "/users";
}
