package org.prime;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by prime on 5/17/16.
 */

@RestController
public class CustomerController {

    ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

    CustomerDAO customerDAO = (CustomerDAO) context.getBean("customerDAO");

    @RequestMapping("/all")
    public String getAll() {
        return "hello world";
    }

    @RequestMapping(value = "/customers",method = RequestMethod.GET, produces="application/json")
    public ResponseEntity<List<CustomerDTO>> getCustomers() {
        return new ResponseEntity<>(customerDAO.getCustomers(), null, HttpStatus.OK);
    }

    @RequestMapping(value = "/customers/{id}",method = RequestMethod.GET, produces="application/json")
    public ResponseEntity<CustomerDTO> getCustomer(@PathVariable int id) {
        return new ResponseEntity<>(customerDAO.getCustomer(id), null, HttpStatus.OK);
    }

    @CrossOrigin(allowedHeaders="*",allowCredentials="true")
    @RequestMapping(value = "/customers", method = RequestMethod.POST, headers="content-type=text/*", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Boolean> createCustomer(@RequestBody CustomerDTO customerDTO) {
        return new ResponseEntity<>(customerDAO.createCustomer(customerDTO), null, HttpStatus.OK);
    }

    @CrossOrigin(allowedHeaders="*",allowCredentials="true")
    @RequestMapping(value = "/customers", method = RequestMethod.PUT, headers="content-type=text/*", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Boolean> updateCustomer(@RequestBody CustomerDTO customerDTO) {
        return new ResponseEntity<>(customerDAO.updateCustomer(customerDTO), null, HttpStatus.OK);
    }

    @CrossOrigin(allowedHeaders="*",allowCredentials="true")
    @RequestMapping(value = "/customers/{id}", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseEntity<Boolean> deleteCustomer(@PathVariable int id) {
        return new ResponseEntity<>(customerDAO.deleteCustomer(id), null, HttpStatus.OK);
    }
}
