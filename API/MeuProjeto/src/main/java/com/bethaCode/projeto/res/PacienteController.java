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
import java.util.List;


@RestController
@RequestMapping("/api/paciente")
@CrossOrigin("http://localhost:4200")
@RequiredArgsConstructor
public class PacienteController {

    private final PacienteRepository pacienteRepository;
    private final ExameRepository exameRepository;

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
        paciente.setNome(pacienteDTO.getNome());
        paciente.setDataExame(dataExame);
        paciente.setStatus(pacienteDTO.getStatus());
        paciente.setExame(exame);

        return pacienteRepository.save(paciente);
    }

    @GetMapping
    public List<Paciente> pesquisar(
            @RequestParam(value = "nome", required = false, defaultValue = "") String nomeDoPaciente){
        return pacienteRepository.finByNomePaciente("%"+ nomeDoPaciente +"%");
    }

    @GetMapping("{id}")
    public Paciente acharPorId(@PathVariable Integer id){
        return pacienteRepository
                    .findById(id)
                    .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Paciente " +id+" não cadastrada"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        pacienteRepository
                    .findById(id)
                    .map(paciente -> {
                        pacienteRepository.delete(paciente);
                        return Void.TYPE;
                    })
                    .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Nota " +id+ " não cadastrada!"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atulizar(@PathVariable Integer id, @RequestBody PacienteDTO dadoAtualizado){

        LocalDate dataPaciente = LocalDate.parse(dadoAtualizado.getDataExame(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));

        Integer idExame = dadoAtualizado.getIdExame();
        Exame exame = exameRepository
                        .findById(idExame)
                        .orElseThrow(()-> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                "O Exame " +idExame+ " Não Existe em nossa aplicação"));
        pacienteRepository
                    .findById(id)
                    .map(paciente -> {
                        paciente.setNome(dadoAtualizado.getNome());
                        paciente.setDataExame(dataPaciente);
                        paciente.setExame(exame);
                        paciente.setStatus(dadoAtualizado.getStatus());
                        return pacienteRepository.save(paciente);
                    })
                    .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Exame "+id+" Não cadastrada!"));
    }
}
