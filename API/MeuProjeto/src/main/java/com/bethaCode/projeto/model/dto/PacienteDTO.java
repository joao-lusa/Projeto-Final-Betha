package com.bethaCode.projeto.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter@Setter
public class PacienteDTO {
    private String nome;
    private String dataExame;
    private String status;
    private Integer idExame;

    public PacienteDTO(){

    }
}
