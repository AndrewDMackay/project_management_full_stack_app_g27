package com.codeclan.example.project_management_back_end.controller;

import com.codeclan.example.project_management_back_end.models.Board;
import com.codeclan.example.project_management_back_end.repositories.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class BoardController {

    @Autowired
    BoardRepository boardRepository;

    @GetMapping(value = "/boards")
    public ResponseEntity<List<Board>> getAllBoards(){
        return new ResponseEntity<>(boardRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/boards/{id}")
    public ResponseEntity getBoard(@PathVariable Long id){
        return new ResponseEntity<>(boardRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/boards")
    public ResponseEntity<Board> createBoard(@RequestBody Board board){
        boardRepository.save(board);
        return new ResponseEntity<>(board, HttpStatus.OK);
    }

    @PatchMapping(value = "/boards/{id}")
    public ResponseEntity<Board> updateBoard(@RequestBody Board board){
        boardRepository.save(board);
        return new ResponseEntity<>(board, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<Board> deleteBoard(@PathVariable Long id){
        Board found = boardRepository.getOne(id);
        boardRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
