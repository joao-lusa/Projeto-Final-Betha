package com.bethaCode.projeto.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter@Setter
public class ExameDTO {
    @NotNull(message = "Deve ser informado um nome válido")
    private String nome;
    private String valor;
    private String sigla;
    private String jejum;
    @NotNull(message = "Deve ser informado um funcionario")
    private Integer idFuncionario;

    public ExameDTO(){

    }
}
