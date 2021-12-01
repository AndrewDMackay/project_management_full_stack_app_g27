package com.codeclan.example.project_management_back_end.repositories;

import com.codeclan.example.project_management_back_end.models.Board;
import com.codeclan.example.project_management_back_end.models.TaskType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    List<Board> findByTasksDate(LocalDate date);

    List<Board> findByTasksTime(LocalTime time);

    List<Board> findByTasksComment(String comment);

    List<Board> findByTasksPriority(TaskType priority);

    List<Board> findByTasksCompleted(Boolean completed);

    List<Board> findByTasksBoard(Board board);
}
