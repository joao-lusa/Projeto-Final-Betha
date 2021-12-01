package com.bethaCode.projeto.model.repository;

import com.bethaCode.projeto.model.entity.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository  extends JpaRepository<Paciente, Integer> {
}
