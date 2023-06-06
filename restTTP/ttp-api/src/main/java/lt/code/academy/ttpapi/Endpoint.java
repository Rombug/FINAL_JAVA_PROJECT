package lt.code.academy.ttpapi;

public interface Endpoint {
    //variable
    String transportId = "transportId";

    //path
    String ROOT = "/api";
    String TRANSPORTS = ROOT + "/transport";
    String TRANSPORT = "/{"+ transportId +"}";
    String SEARCH = "/search";
    String LOGIN = "/login";
}
