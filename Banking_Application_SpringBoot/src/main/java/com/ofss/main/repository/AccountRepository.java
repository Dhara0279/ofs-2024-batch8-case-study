package com.ofss.main.repository;

import org.springframework.data.repository.CrudRepository;

import com.ofss.main.domain.Account;

public interface AccountRepository extends CrudRepository<Account, Integer> {

}
