package com.bethaCode.projeto.model.repository;

import com.bethaCode.projeto.model.entity.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PacienteRepository  extends JpaRepository<Paciente, Integer> {

    @Query(" SELECT n FROM Paciente n WHERE upper(n.nome) like upper(:nome)")
    List<Paciente> finByNomePaciente(@Param("nome") String nome);
}
