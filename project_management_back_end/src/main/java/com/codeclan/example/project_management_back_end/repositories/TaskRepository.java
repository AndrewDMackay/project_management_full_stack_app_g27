package com.codeclan.example.project_management_back_end.repositories;

import com.codeclan.example.project_management_back_end.models.Board;
import com.codeclan.example.project_management_back_end.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByBoardName(Board board);
}
