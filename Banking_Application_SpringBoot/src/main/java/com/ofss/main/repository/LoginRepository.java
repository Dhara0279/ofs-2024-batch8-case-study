package com.ofss.main.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ofss.main.domain.Login;

@Repository
public interface LoginRepository extends CrudRepository<Login, Integer>{

	 Login findByusername(String username);

}
