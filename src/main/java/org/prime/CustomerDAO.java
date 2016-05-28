package org.prime;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by prime on 5/17/16.
 */

public class CustomerDAO {
    private NamedParameterJdbcTemplate jdbc;

    CustomerDAO(DataSource jdbc) {
        this.jdbc = new NamedParameterJdbcTemplate(jdbc);
    }

    private CustomerDTO getCustomerDTOFromResultSet(ResultSet resultSet) {
        CustomerDTO customerDTO = new CustomerDTO();

        try {
            customerDTO.setId(resultSet.getInt("id"));
            customerDTO.setName(resultSet.getString("name"));
            customerDTO.setAge(resultSet.getInt("age"));
        } catch (SQLException ex) {
            System.out.println(ex.getClass() + " " + ex.getMessage());
        }

        return customerDTO;
    }

    public List<CustomerDTO> getCustomers() {
        return jdbc.query("SELECT * FROM CUSTOMER", (resultSet, rowNum) -> {
            return getCustomerDTOFromResultSet(resultSet);
        });
    }

    public CustomerDTO getCustomer(int id) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);

        return jdbc.queryForObject("select * from CUSTOMER where id = :id", params, (resultSet, rowNum) -> {
            return getCustomerDTOFromResultSet(resultSet);
        });
    }

    public boolean deleteCustomer(int id) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);

        return jdbc.update("delete from CUSTOMER where id = :id", params) == 1;
    }

    public boolean createCustomer(CustomerDTO customerDTO) {
        BeanPropertySqlParameterSource params = new BeanPropertySqlParameterSource(customerDTO);

        return jdbc.update("insert into CUSTOMER (id, name, age) values (:id, :name, :age)", params) == 1;
    }

//    public int [] createCustomerDTO(List<CustomerDTO> CustomerDTOs) {
//        SqlParameterSource[] params = SqlParameterSourceUtils.createBatch(CustomerDTOs.toArray());
//
//        return jdbc.batchUpdate("insert into CustomerDTOs (name, email, text) values (:name, :email, :text)", params);
//    }

    public boolean updateCustomer(CustomerDTO customerDTO) {
        BeanPropertySqlParameterSource params = new BeanPropertySqlParameterSource(customerDTO);

        return jdbc.update("update CUSTOMER set id = :id, name = :name, age = :age where id = :id", params) == 1;
    }
}
