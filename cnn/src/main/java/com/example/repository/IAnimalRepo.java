package com.example.repository;

import com.example.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface IAnimalRepo extends JpaRepository<Animal, Integer> {
    @Modifying
    @Query(value = "insert into animal (img,name) VALUES (:img,:name)", nativeQuery = true)
    void create(@Param("img") String img, @Param("name") String name);

}
