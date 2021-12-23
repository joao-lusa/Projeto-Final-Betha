package com.bethaCode.projeto.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter@Setter
public class PacienteDTO {
    @NotNull(message = "Deve ser informado um nome válido")
    private String nome;

    @NotNull(message = "Deve ser informado uma data")
    private String dataExame;

    private String status;

    @NotNull(message = "Deve ser informado um funcionario para adicionar ou mudar um exame!")
    private Integer idExame;

    public PacienteDTO(){

    }
}
