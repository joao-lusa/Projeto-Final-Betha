package com.bethaCode.projeto.res;

import com.bethaCode.projeto.model.dto.PacienteDTO;
import com.bethaCode.projeto.model.entity.Exame;
import com.bethaCode.projeto.model.entity.Paciente;
import com.bethaCode.projeto.model.repository.ExameRepository;
import com.bethaCode.projeto.model.repository.PacienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


@RestController
@RequestMapping("/api/paciente")
@CrossOrigin("http://localhost:4200")
@RequiredArgsConstructor
public class PacienteController {

    private PacienteRepository pacienteRepository;
    private ExameRepository exameRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Paciente salvar(@RequestBody PacienteDTO pacienteDTO){
        LocalDate dataExame = LocalDate.parse(pacienteDTO.getDataExame(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));

        Integer idExame = pacienteDTO.getIdExame();
        Exame exame = exameRepository
                        .findById(idExame)
                        .orElseThrow(()-> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                "O Exame " +idExame+ " Não Existe em nossa aplicação"));

        Paciente paciente = new Paciente();
        paciente.setNome(paciente.getNome());
        paciente.setDataExame(dataExame);
        paciente.setExame(exame);

        return pacienteRepository.save(paciente);
    }
}
