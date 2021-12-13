package com.bethaCode.projeto.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Entity
@Getter@Setter
public class Exame {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column
    private BigDecimal valor;

    @Column(length = 3)
    private String sigla;

    @Column(length = 3)
    private String jejum;

    @ManyToOne
    private Funcionario funcionario;
}
