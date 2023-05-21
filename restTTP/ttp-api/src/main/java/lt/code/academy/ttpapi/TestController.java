package lt.code.academy.ttpapi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class TestController {
    @GetMapping("/{name}")
    public String test(@PathVariable String name){
        return String.format("Hello, %s this is Test", name);
    }

}
