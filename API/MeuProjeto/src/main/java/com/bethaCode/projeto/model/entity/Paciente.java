package com.bethaCode.projeto.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Getter@Setter
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @NotNull(message = "Deve ser informado um funcionario para adicionar ou mudar um exame!")
    @JoinColumn(name = "id_exame")
    private Exame exame;

    @NotEmpty(message = "Deve ser informado um nome válido")
    @Column(nullable = false, length = 100)
    private String nome;

    @Column(name = "data_exame")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataExame;

    @Column
    private String status;
}

